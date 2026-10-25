import { Cliente } from "./types";

let clientes: Cliente[] = [
  { id: 1, nome: "Ana Silva", email: "ana.silva@email.com" },
  { id: 2, nome: "Bruno Costa", email: "bruno.costa@email.com" },
  { id: 3, nome: "Carla Mendes", email: "carla.mendes@email.com" }
];

let proximoIdCliente = 4;

export function cadastrarCliente(nome: string, email: string): Cliente | string {
  if (!nome || nome.trim() === "") return "Erro: nome é obrigatório.";
  if (!email || email.trim() === "") return "Erro: e-mail é obrigatório.";

  const emailExiste = clientes.some(c => c.email.toLowerCase() === email.toLowerCase());
  if (emailExiste) return "Erro: e-mail já cadastrado.";

  const novo: Cliente = {
    id: proximoIdCliente++,
    nome: nome.trim(),
    email: email.trim().toLowerCase()
  };

  clientes.push(novo);
  return novo;
}

export function listarClientes(): Cliente[] {
  return [...clientes];
}

export function buscarClientePorId(id: number): Cliente | undefined {
  return clientes.find(c => c.id === id);
}