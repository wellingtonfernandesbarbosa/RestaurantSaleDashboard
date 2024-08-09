import Dashboard from "@/components/Dashboard";
import styles from "./index.module.scss";
import Header from "@/components/Header";

export default function Index() {
  return <div className={styles.container}>
    <Header />
    <Dashboard />
  </div>;
}
