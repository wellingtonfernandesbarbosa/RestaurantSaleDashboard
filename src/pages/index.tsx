import Dashboard from "@/components/Dashboard";
import styles from "./index.module.scss";

import Link from "next/link";
import "@/app/globals.css";

export default function Index() {
  return <div className={styles.container}>
    <nav className={styles.container__nav}>
    <ul className={styles.container__nav__list}>
      <Link href="/">Dashboard</Link>
      <Link href="/pedidos">Pedidos</Link>
      <Link href="/produtosvendidos">Produtos Vendidos</Link>
    </ul>
    </nav>
    <Dashboard />
  </div>;
}
