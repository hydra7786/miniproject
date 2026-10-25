import { ItemCarrinho } from "./types";
import { buscarProdutoPorId } from "./produtos";

let carrinho: ItemCarrinho[] = [];

export function adicionarAoCarrinho(produtoId: number, quantidade: number): string {
  if (quantidade <= 0) return "Erro: quantidade deve ser maior que zero.";

  const produto = buscarProdutoPorId(produtoId);
  if (!produto) return "Erro: produto não encontrado.";
  if (quantidade > produto.estoque) return "Erro: quantidade superior ao estoque disponível.";

  const itemExistente = carrinho.find(i => i.produtoId === produtoId);
  if (itemExistente) {
    const novaQtd = itemExistente.quantidade + quantidade;
    if (novaQtd > produto.estoque) return "Erro: quantidade total excede o estoque.";
    itemExistente.quantidade = novaQtd;
  } else {
    carrinho.push({ produtoId, quantidade });
  }

  return "Produto adicionado ao carrinho com sucesso.";
}

export function removerDoCarrinho(produtoId: number): string {
  const index = carrinho.findIndex(i => i.produtoId === produtoId);
  if (index === -1) return "Erro: item não encontrado no carrinho.";
  carrinho.splice(index, 1);
  return "Item removido do carrinho.";
}

export function alterarQuantidade(produtoId: number, novaQuantidade: number): string {
  if (novaQuantidade <= 0) return "Erro: quantidade deve ser maior que zero.";

  const item = carrinho.find(i => i.produtoId === produtoId);
  if (!item) return "Erro: item não encontrado no carrinho.";

  const produto = buscarProdutoPorId(produtoId);
  if (!produto) return "Erro: produto não encontrado.";
  if (novaQuantidade > produto.estoque) return "Erro: quantidade superior ao estoque.";

  item.quantidade = novaQuantidade;
  return "Quantidade atualizada.";
}

export function listarCarrinho(): ItemCarrinho[] {
  return [...carrinho];
}

export function calcularSubtotal(item: ItemCarrinho): number {
  const produto = buscarProdutoPorId(item.produtoId);
  if (!produto) return 0;
  return produto.preco * item.quantidade;
}

export function calcularTotalCarrinho(): number {
  return carrinho.reduce((total, item) => total + calcularSubtotal(item), 0);
}

export function limparCarrinho(): void {
  carrinho = [];
}

export function obterCarrinho(): ItemCarrinho[] {
  return carrinho;
}