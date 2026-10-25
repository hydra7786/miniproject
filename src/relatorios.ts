import { listarPedidos } from "./pedidos";
import { listarProdutos } from "./produtos";
import { listarClientes } from "./clientes";

export function relatorioVendas(): void {
  const pedidos = listarPedidos();
  const totalVendido = pedidos.reduce((acc, p) => acc + p.total, 0);

  console.log("\n===== RELATÓRIO DE VENDAS =====");
  console.log(`Total de pedidos: ${pedidos.length}`);
  console.log(`Faturamento total: R$ ${totalVendido.toFixed(2)}`);
}

export function relatorioEstoqueBaixo(limite: number = 5): void {
  const baixos = listarProdutos().filter(p => p.estoque <= limite);
  console.log("\n===== PRODUTOS COM ESTOQUE BAIXO =====");
  if (baixos.length === 0) {
    console.log("Nenhum produto com estoque baixo.");
  } else {
    baixos.forEach(p => console.log(`- ${p.nome}: ${p.estoque} unidades`));
  }
}

export function resumoGeral(): void {
  console.log("\n===== RESUMO GERAL =====");
  console.log(`Produtos cadastrados: ${listarProdutos().length}`);
  console.log(`Clientes cadastrados: ${listarClientes().length}`);
  console.log(`Pedidos realizados: ${listarPedidos().length}`);
}
