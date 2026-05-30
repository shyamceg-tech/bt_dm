'use client';

/**
 * ModalRoot.jsx — BlueTick 2026 Refresh
 *
 * Single client island that:
 *   1. Listens for clicks on any [data-modal-open] element in the document
 *      (event delegation — works regardless of where the trigger lives,
 *      including RSC Headers and client drawers we don't want to touch).
 *   2. Owns which modal is currently open ('hire' | 'franchisee' | null).
 *   3. Renders the right <Modal> with the right form inside.
 *
 * Why event delegation instead of context / props:
 *   - Header.jsx is RSC; passing an onOpen handler would force it into a
 *     client component, eating a chunk of LCP-relevant DOM.
 *   - The buttons already carry a stable `data-modal-open="hire"` /
 *     `"franchisee"` attribute from Phase 1. We just bind to that.
 *   - HeaderInteractivity.jsx (the drawer client island) has its own
 *     onClick={closeDrawer}, which still bubbles — both run.
 *
 * Mounted once in src/app/layout.js so it's always available.
 */

import { useCallback, useEffect, useState } from 'react';
import Modal from './Modal';
import HireForm from './HireForm';
import FranchiseeForm from './FranchiseeForm';

const VALID_MODALS = new Set(['hire', 'franchisee']);

export default function ModalRoot() {
  const [openModal, setOpenModal] = useState(null);

  const close = useCallback(() => setOpenModal(null), []);

  useEffect(() => {
    /* Delegated click listener — fires for any click anywhere in the doc.
       We walk up from the target to find a [data-modal-open] ancestor;
       if found AND it's a known modal key, set state. */
    const onDocClick = (e) => {
      const trigger = e.target.closest?.('[data-modal-open]');
      if (!trigger) return;
      const key = trigger.getAttribute('data-modal-open');
      if (!VALID_MODALS.has(key)) return;

      /* Defensive: don't reopen if already open with the same modal. */
      setOpenModal((current) => (current === key ? current : key));
    };

    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  /* Render the right modal. Modal handles its own open/close, but it's
     fine — null is still a valid `open` prop value (means closed). */
  return (
    <>
      <Modal
        open={openModal === 'hire'}
        onClose={close}
        title="Hire from BlueTick"
        subtitle="Tell us what role you're hiring for — we'll send a shortlist."
        titleId="modal-hire-title"
      >
        {openModal === 'hire' && <HireForm onClose={close} />}
      </Modal>

      <Modal
        open={openModal === 'franchisee'}
        onClose={close}
        title="Franchisee Enquiry"
        subtitle="Interested in starting a BlueTick centre? Share your details below."
        titleId="modal-franchisee-title"
      >
        {openModal === 'franchisee' && <FranchiseeForm onClose={close} />}
      </Modal>
    </>
  );
}
