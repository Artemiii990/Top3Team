'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './AdminSidebar.module.css';

const MENU = [
  {
    title: 'Dashboard',
    href: '/admin',
  },
  {
    title: 'Products',
    href: '/admin/products',
  },
  {
    title: 'Users',
    href: '/admin/users',
  },
  {
    title: 'Orders',
    href: '/admin/orders',
  },
  {
    title: 'Settings',
    href: '/admin/settings',
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>
        Top3Team Admin
      </h2>

      <nav>
        {MENU.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.link} ${
              pathname === item.href
                ? styles.active
                : ''
            }`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}