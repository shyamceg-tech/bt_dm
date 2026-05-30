'use client';

import { useEffect } from 'react';

export default function MetaPixelTracker() {
  // ✅ Track WhatsApp & Phone Clicks
  useEffect(() => {
    const handleClick = (e) => {
      const el = e.target.closest('a,button');
      if (!el) return;

      const uid = () =>
        crypto.randomUUID ? crypto.randomUUID() : String(Date.now());

      const href = (el.getAttribute('href') || '').toLowerCase();

      // ✅ WhatsApp Clicks
      if (
        href.includes('wa.me') ||
        href.includes('api.whatsapp.com') ||
        href.includes('wa.link') ||
        el.classList.contains('js-wa-cta')
      ) {
        if (window.fbq) {
          window.fbq(
            'track',
            'Contact',
            { contact_type: 'whatsapp' },
            { eventID: uid() }
          );
          console.log('💬 WhatsApp Click Tracked');
        }
        return;
      }

      // ✅ Phone Clicks
      if (href.startsWith('tel:') || el.classList.contains('js-call-cta')) {
        if (window.fbq) {
          window.fbq(
            'track',
            'Contact',
            { contact_type: 'phone' },
            { eventID: uid() }
          );
          console.log('📞 Phone Click Tracked');
        }
      }
    };

    document.addEventListener('click', handleClick, { passive: true });
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // ✅ Lead Tracking After Form Submit
  useEffect(() => {
    const SUCCESS_TEXT =
      'your registration is successful. our learning advisor will reach out to you shortly';

    let fired = false;

    const fireLeadOnce = () => {
      if (fired || !window.fbq) return;
      fired = true;

      const id =
        (crypto.randomUUID && crypto.randomUUID()) || String(Date.now());

      window.fbq('track', 'Lead', {}, { eventID: id });

      console.log('🚀 Meta Lead Event Fired:', id);
    };

    // ✅ Detect success text anywhere in DOM
    const hasSuccessText = () => {
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
      );
      let node;
      while ((node = walker.nextNode())) {
        if (
          (node.nodeValue || '')
            .trim()
            .toLowerCase()
            .includes(SUCCESS_TEXT)
        ) {
          return true;
        }
      }
      return false;
    };

    // ✅ Poll page after form submit
    const pollDOM = (timeout = 12000, step = 150) => {
      const start = Date.now();
      const interval = setInterval(() => {
        if (hasSuccessText()) {
          clearInterval(interval);
          fireLeadOnce();
        } else if (Date.now() - start > timeout) {
          clearInterval(interval);
        }
      }, step);
    };

    // ✅ When form submits → start polling
    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('form');
      if (form) {
        form.addEventListener('submit', () => pollDOM(), { passive: true });
      }
    });

    // ✅ Watch DOM for popup message
    const observer = new MutationObserver(() => {
      if (!fired && hasSuccessText()) fireLeadOnce();
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
