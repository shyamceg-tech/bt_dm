/**
 * hoodi/Footer.jsx — Hoodi-branch footer.
 *
 * The shared 2026 <Footer /> wired to the Hoodi contact line. Only the /hoodi/*
 * pages import this; all other pages keep the shared Footer with its default
 * (Indiranagar) number, so the main site is untouched.
 */
import Footer from '@/components/2026/Footer';
import { HOODI_CONTACT } from '@/data/hoodi/contact';

export default function HoodiFooter() {
  return <Footer contact={HOODI_CONTACT} />;
}
