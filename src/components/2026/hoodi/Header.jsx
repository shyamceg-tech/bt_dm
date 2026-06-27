/**
 * hoodi/Header.jsx — Hoodi-branch header.
 *
 * The shared 2026 <Header /> wired to the Hoodi contact line. Only the /hoodi/*
 * Google-Ads pages import this; every other page keeps the shared Header with
 * its default (Indiranagar) number, so the main site is untouched.
 */
import Header from '@/components/2026/Header';
import { HOODI_CONTACT } from '@/data/hoodi/contact';

export default function HoodiHeader() {
  return <Header contact={HOODI_CONTACT} />;
}
