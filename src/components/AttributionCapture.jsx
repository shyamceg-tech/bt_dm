'use client';

/**
 * AttributionCapture — BlueTick 2026
 *
 * Invisible (`null`-rendering) client component mounted once in the root
 * layout. On first paint, and again after every client-side route change, it
 * records the page + Google Ads attribution into sessionStorage (see
 * src/lib/attribution.js). submitToBigin() later folds that into every form
 * submission, so Bigin gets Page Source / Campaign / Ad group / Keyword with
 * zero changes to the individual form components.
 *
 * Cost: one synchronous sessionStorage write per navigation. No network, no
 * DOM, no effect on LCP/TBT — it renders nothing.
 */

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { captureAttribution } from '@/lib/attribution';

export default function AttributionCapture() {
  const pathname = usePathname();
  useEffect(() => {
    captureAttribution();
  }, [pathname]);
  return null;
}
