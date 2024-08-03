import Link from "next/link";
import "@/app/globals.css";
import Dashboard from "@/components/Dashboard";

export default function Index() {
  return <div className="">
    <ul>
      <Link href="/">Dashboard</Link>
      <Link href="/pedidos">Pedidos</Link>
      <Link href="/produtosvendidos">Produtos Vendidos</Link>
    </ul>
    <Dashboard />
  </div>;
}
