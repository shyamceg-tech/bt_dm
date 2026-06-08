/**
 * centers.js — BlueTick 2026 Refresh
 *
 * Single source of truth for the offline centre options shown in the lead
 * pop-up's "Select Center" dropdown, plus the shared contact endpoints used
 * by the Thank-You screen (Call / WhatsApp).
 *
 * Centre labels are the exact copy approved in the brief:
 *   - Indiranagar – near the metro station
 *   - Hoodi – near Junction
 *   - Bannerghatta Road
 */

export const CENTERS = [
  { value: 'indiranagar', label: 'Indiranagar – near the metro station' },
  { value: 'hoodi', label: 'Hoodi – near Junction' },
  { value: 'bannerghatta', label: 'Bannerghatta Road' },
];

/* Verified BlueTick contact endpoints (see near-me.config.js / Footer). */
export const CONTACT = {
  phoneDisplay: '+91 9606 9955 25',
  phoneHref: 'tel:+919606995525',
  whatsappHref:
    'https://wa.me/919606995525?text=Hi%20BlueTick%2C%20I%20just%20registered%20on%20your%20website%20and%20would%20like%20to%20connect.',
  email: 'academics@bluetickacademy.com',
};
