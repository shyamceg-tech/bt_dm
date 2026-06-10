/**
 * hoodi/training-bangalore.config.js
 * Hoodi-branch overlay for the training landing page's data.
 *
 * META is re-exported UNCHANGED from the canonical training config (it carries
 * no Indiranagar reference). Only FAQS needs localizing: one answer mentions the
 * Indiranagar campus / metro — remapped here to the Hoodi campus / Hoodi Junction
 * on ITPL Road. Kept DRY (derived from the base FAQS) so the rest of the copy
 * can never drift from the canonical page.
 *
 * Used ONLY by the noindex Hoodi training page + its FaqsTraining variant. The
 * real /digital-marketing-training-in-bangalore page is untouched.
 */

export { META } from '@/data/training-bangalore.config';
import { FAQS as BASE_FAQS } from '@/data/training-bangalore.config';

export const FAQS = BASE_FAQS.map((f) => ({
  ...f,
  a: f.a.replace(
    'train offline at our Indiranagar campus &mdash; a 1-minute walk from the metro with free parking',
    'train offline at our Hoodi campus &mdash; a minute from Hoodi Junction on ITPL Road with free parking',
  ),
}));
