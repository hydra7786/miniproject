import { Pedido, ItemPedido } from "./types";
import { buscarClientePorId } from "./clientes";
import { buscarProdutoPorId, reduzirEstoque } from "/produtos";
let pedidos: Pedido[] = [];
let proximoIdPedido = 1;

export function finalizarPedido(clienteId: number): Pedido | string {
  const cliente = buscarClientePorId(clienteId);
  if (!cliente) return "Erro: cliente não encontrado.";

  const itensCarrinho = obterCarrinho();
  if (itensCarrinho.length === 0) return "Erro: carrinho vazio. Não é possível finalizar o pedido.";

  
  for (const item of itensCarrinho) {
    const produto = buscarProdutoPorId(item.produtoId);
    if (!produto) return `Erro: produto ID ${item.produtoId} não existe.`;
    if (item.quantidade > produto.estoque) {
      return `Erro: estoque insuficiente para o produto "${produto.nome}".`;
    }
  }

 
  const itensPedido: ItemPedido[] = itensCarrinho.map(item => {
    const produto = buscarProdutoPorId(item.produtoId)!;
    return {
      produtoId: item.produtoId,
      quantidade: item.quantidade,
      precoUnitario: produto.preco
    };
  });

  const total = calcularTotalCarrinho();

 
  for (const item of itensCarrinho) {
    reduzirEstoque(item.produtoId, item.quantidade);
  }

  const novoPedido: Pedido = {
    id: proximoIdPedido++,
    clienteId,
    itens: itensPedido,
    total,
    data: new Date()
  };

  pedidos.push(novoPedido);
  limparCarrinho();

  return novoPedido;
}

export function listarPedidos(): Pedido[] {
  return [...pedidos];
}

export function listarPedidosPorCliente(clienteId: number): Pedido[] {
  return pedidos.filter(p => p.clienteId === clienteId);
}