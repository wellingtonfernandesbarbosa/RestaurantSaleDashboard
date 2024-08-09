import Link from "next/link";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname() || '';

  return (
    <header className={styles.container}>
      <nav className={styles.container__nav}>
        <ul className={styles.container__nav__list}>
          <li className={pathName === '/' ? styles.container__nav__list__item__active : styles.container__nav__list__item}>
            <Link href="/">Dashboard</Link>
          </li>
          <li className={pathName === '/pedidos' ? styles.container__nav__list__item__active : styles.container__nav__list__item}>
            <Link href="/pedidos">Pedidos</Link>
          </li>
          <li className={pathName === '/produtosvendidos' ? styles.container__nav__list__item__active : styles.container__nav__list__item}>
            <Link href="/produtosvendidos">Produtos Vendidos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
