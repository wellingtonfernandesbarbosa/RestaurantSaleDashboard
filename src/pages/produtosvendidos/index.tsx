import Header from "@/components/Header";
import styles from "./produtosvendidos.module.scss";

export default function ProdutosVendidos() {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Produtos Vendidos</h1>
    </div>
  );
}
