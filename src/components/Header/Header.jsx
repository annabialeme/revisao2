import styles from './Header.module.css';

export default function Header({ title, subtitle, totalProducts }) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p className={styles.total}>Total de produtos: {totalProducts}</p>
    </header>
  );
}
