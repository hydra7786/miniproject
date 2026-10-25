import { cadastrarProduto, listarProdutos, buscarProdutoPorId, buscarProdutosPorNome, filtrarPorCategoria } from "./produtos";
import { cadastrarCliente, listarClientes, buscarClientePorId } from "./clientes";
import { adicionarAoCarrinho, listarCarrinho, calcularTotalCarrinho, alterarQuantidade, removerDoCarrinho } from "./carrinho";
import { finalizarPedido, listarPedidos, listarPedidosPorCliente } from "./pedidos";
import { relatorioVendas, relatorioEstoqueBaixo, resumoGeral } from "./relatorios";

console.log("========== SISTEMA DE E-COMMERCE ==========\n");


console.log("--- Cadastro de Produtos ---");
console.log(cadastrarProduto("Headset Gamer", "Informática", 299, 12));
console.log(cadastrarProduto("Produto Inválido", "Teste", -50, 5)); 
console.log(cadastrarProduto("", "Teste", 100, 5)); 


console.log("\n--- Listagem de Produtos ---");
console.table(listarProdutos());

console.log("\n--- Busca por nome (gamer) ---");
console.table(buscarProdutosPorNome("gamer"));

console.log("\n--- Filtro por categoria ---");
console.table(filtrarPorCategoria("Informática"));


console.log("\n--- Clientes ---");
console.table(listarClientes());
console.log(cadastrarCliente("Diego Rocha", "diego@email.com"));
console.log(cadastrarCliente("Ana Silva", "ana.silva@email.com")); 


console.log("\n--- Carrinho de Compras ---");
console.log(adicionarAoCarrinho(1, 2)); 
console.log(adicionarAoCarrinho(2, 3)); 
console.log(adicionarAoCarrinho(1, 1)); 
console.log(adicionarAoCarrinho(99, 1)); 
console.log(adicionarAoCarrinho(3, 50));

console.log("\nItens no carrinho:");
console.table(listarCarrinho());
console.log(`Total do carrinho: R$ ${calcularTotalCarrinho().toFixed(2)}`);


console.log("\n--- Finalização de Pedido ---");
const pedido = finalizarPedido(1);
console.log(pedido);

console.log("\n--- Pedidos do Cliente 1 ---");
console.table(listarPedidosPorCliente(1));


relatorioVendas();
relatorioEstoqueBaixo();
resumoGeral();

console.log("\n========== FIM DA DEMONSTRAÇÃO ==========");