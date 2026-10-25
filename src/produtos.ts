import { Produto } from "./types";

let produtos: Produto[] = [
  { id: 1, nome: "Notebook Gamer", categoria: "Informática", preco: 4500, estoque: 8 },
  { id: 2, nome: "Mouse Sem Fio", categoria: "Informática", preco: 120, estoque: 25 },
  { id: 3, nome: "Teclado Mecânico", categoria: "Informática", preco: 350, estoque: 15 },
  { id: 4, nome: "Cadeira Gamer", categoria: "Móveis", preco: 980, estoque: 6 },
  { id: 5, nome: "Monitor 27 polegadas", categoria: "Informática", preco: 1300, estoque: 10 }
];

let proximoIdProduto = 6;

export function cadastrarProduto(nome: string, categoria: string, preco: number, estoque: number): Produto | string {
  if (!nome || nome.trim() === "") return "Erro: nome do produto não pode ser vazio.";
  if (preco <= 0) return "Erro: preço deve ser maior que zero.";
  if (estoque < 0) return "Erro: estoque não pode ser negativo.";

  const novo: Produto = {
    id: proximoIdProduto++,
    nome: nome.trim(),
    categoria: categoria.trim(),
    preco,
    estoque
  };

  produtos.push(novo);
  return novo;
}

export function listarProdutos(): Produto[] {
  return [...produtos];
}

export function buscarProdutoPorId(id: number): Produto | undefined {
  return produtos.find(p => p.id === id);
}

export function buscarProdutosPorNome(termo: string): Produto[] {
  const t = termo.toLowerCase();
  return produtos.filter(p => p.nome.toLowerCase().includes(t));
}

export function filtrarPorCategoria(categoria: string): Produto[] {
  return produtos.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());
}

export function atualizarProduto(id: number, dados: Partial<Omit<Produto, "id">>): Produto | string {
  const produto = produtos.find(p => p.id === id);
  if (!produto) return "Erro: produto não encontrado.";

  if (dados.nome !== undefined && dados.nome.trim() === "") return "Erro: nome não pode ser vazio.";
  if (dados.preco !== undefined && dados.preco <= 0) return "Erro: preço deve ser maior que zero.";
  if (dados.estoque !== undefined && dados.estoque < 0) return "Erro: estoque não pode ser negativo.";

  Object.assign(produto, dados);
  return produto;
}

export function removerProduto(id: number): boolean | string {
  const index = produtos.findIndex(p => p.id === id);
  if (index === -1) return "Erro: produto não encontrado.";
  produtos.splice(index, 1);
  return true;
}

export function reduzirEstoque(id: number, quantidade: number): boolean {
  const produto = produtos.find(p => p.id === id);
  if (!produto || produto.estoque < quantidade) return false;
  produto.estoque -= quantidade;
  return true;
}