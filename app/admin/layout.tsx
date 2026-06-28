import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import styles from '@/components/admin/AdminLayout.module.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <AdminSidebar />

      <div className={styles.content}>
        <AdminHeader />

        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
}