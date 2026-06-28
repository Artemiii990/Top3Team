'use client';

import s from './MegaMenu.module.css';
import { MENU_DATA } from './menuData';

type Props = {
  activeMenu: string | null;
  onClose: () => void;
  onKeepOpen: () => void;
};

export default function MegaMenu({
  activeMenu,
  onClose,
  onKeepOpen,
}: Props) {
  if (!activeMenu) return null;

  const menu = MENU_DATA[activeMenu];

  if (!menu) return null;

  const extraColumns = menu.columns ?? [];
  // Total columns = 1 (main) + however many extra columns this menu has (0-2)
  const columnCount = 1 + extraColumns.length;

  return (
    <>
      <div className={s.backdrop} onMouseEnter={onClose} />

      <div
        className={s.menu}
        onMouseEnter={onKeepOpen}
        onMouseLeave={onClose}
      >
        <div className={s.inner} data-columns={columnCount}>
          {/* Column 1: title + bold featured links + optional bottom link */}
          <div className={s.column}>
            <div className={s.label}>{menu.title}</div>

            {menu.featured.map((item, i) => (
              <a
                key={item}
                href="#"
                className={s.featured}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {item}
              </a>
            ))}

            {menu.bottomLink && (
              <a href="#" className={s.bottomLink}>
                {menu.bottomLink}
              </a>
            )}
          </div>

          {/* Extra columns: 0, 1, or 2 depending on the section */}
          {extraColumns.map(col => (
            <div className={s.column} key={col.title}>
              <div className={s.label}>{col.title}</div>

              {col.links.map(item => (
                <a key={item} href="#" className={s.secondary}>
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}