/**
 * hoodi/contact.js — HOODI BRANCH contact line.
 *
 * Single source of truth for the phone / WhatsApp number shown on the Hoodi
 * Google-Ads pages (and the Thank-You pop-up when the visitor is on a /hoodi
 * route). The Indiranagar / main site keeps its own number — see the
 * DEFAULT_CONTACT in Header.jsx / Footer.jsx and CONTACT in src/data/centers.js.
 * Nothing here changes those.
 *
 * Number provided by the client for the Hoodi centre: +91 77607 33466.
 */
export const HOODI_CONTACT = {
  phoneDisplay: '+917760733466',
  phoneHref: 'tel:+917760733466',
  whatsappHref: 'https://wa.me/917760733466',
};
