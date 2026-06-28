import styles from './AdminHeader.module.css';

export default function AdminHeader() {
  return (
    <header className={styles.header}>
      <h1>Dashboard</h1>

      <div>
        Admin
      </div>
    </header>
  );
}