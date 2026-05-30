'use client';

/**
 * Modal.jsx — BlueTick 2026 Refresh
 *
 * Generic modal primitive built on the native <dialog> element. The
 * browser handles focus trap, ESC-to-close, and top-layer rendering;
 * this component just glues React's `open` prop to dialog.showModal() /
 * dialog.close() and adds body scroll-lock when open.
 *
 * Why native <dialog> instead of a custom div + portal:
 *   - Built-in focus trap (no manual onKeyDown handler needed)
 *   - Built-in ESC handler that fires a 'cancel' event we can listen for
 *   - Auto top-layer rendering — no z-index battles with header/sticky-bar
 *   - Inert behavior on background content is automatic
 *
 * Browser support: Chrome 37+ / Safari 15.4+ / Firefox 98+. Aligned with
 * other 2026 refresh choices (React 19 inert, scroll-snap, mask-image).
 */

import { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Modal({
  open,
  onClose,
  title,
  subtitle,
  titleId = 'modal-title',
  children,
}) {
  const ref = useRef(null);

  /* Sync `open` prop → dialog.showModal() / dialog.close().
     Using showModal() (not the deprecated `open` attribute) is what gets
     us the focus trap + backdrop + inert background. */
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      /* Lock body scroll so the page doesn't move behind the open modal. */
      document.body.style.overflow = 'hidden';
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  /* When the dialog closes (ESC, backdrop click, our close button, or
     a parent setting open=false), the 'close' event fires. We use that
     as our single source of truth for "the modal is now closed" and
     restore body scroll + notify the parent. */
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    const handleClose = () => {
      document.body.style.overflow = '';
      /* Only call onClose if the parent still thinks we're open — this
         prevents an infinite loop when the parent's open=false flip is
         what triggered the close in the first place. */
      if (open) onClose();
    };

    dialog.addEventListener('close', handleClose);
    return () => {
      dialog.removeEventListener('close', handleClose);
      /* Safety net: if the component unmounts while open, restore scroll. */
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  /* Click on the dialog element itself (not a descendant) means click on
     the backdrop area outside the styled card. Native <dialog> includes
     padding/margin that's part of the backdrop hit-area, so we need to
     manually detect this. */
  const handleBackdropClick = (e) => {
    if (e.target === ref.current) onClose();
  };

  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      aria-labelledby={titleId}
      onClick={handleBackdropClick}
    >
      <div className={styles.head}>
        <div>
          <h2 id={titleId} className={styles.title}>
            {title}
          </h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <button
          type="button"
          className={styles.close}
          aria-label="Close dialog"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      </div>
      <div className={styles.body}>{children}</div>
    </dialog>
  );
}
