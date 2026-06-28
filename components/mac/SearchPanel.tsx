'use client';

import { useEffect, useRef } from 'react';
import s from './SearchPanel.module.css';

type Props = {
  open: boolean;
  onClose: () => void;
  onKeepOpen: () => void;
};

export default function SearchPanel({ open, onClose, onKeepOpen }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Autofocus the input whenever the panel opens, same as Apple's does.
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div className={s.backdrop} onMouseEnter={onClose} />

      <div
        className={s.panel}
        onMouseEnter={onKeepOpen}
        onMouseLeave={onClose}
      >
        <div className={s.inner}>
          <svg
            className={s.icon}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="10.5" cy="10.5" r="6.5" fill="none" />
            <line x1="15.5" y1="15.5" x2="20" y2="20" />
          </svg>

          <input
            ref={inputRef}
            type="text"
            className={s.input}
            placeholder="Пошук на apple.com"
            aria-label="Пошук на apple.com"
          />
        </div>
      </div>
    </>
  );
}