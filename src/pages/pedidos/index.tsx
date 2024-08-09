import Header from "@/components/Header";
import styles from "./pedidos.module.scss";

export default function Pedidos() {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Pedidos</h1>
    </div>
  );
}
