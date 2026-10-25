# Miniprojeto_Ecommerce

**Sistema de Gerenciamento de E-commerce**  
Desenvolvedor Back-End Node – Módulo 1 – Semana 07




---

Objetivo

Aplicação back-end desenvolvida em TypeScript e Node.js para gerenciar as operações básicas de uma pequena loja virtual.  

O sistema permite:
- Cadastrar e gerenciar produtos (com controle de estoque)
- Cadastrar e consultar clientes
- Montar e manipular carrinho de compras
- Finalizar pedidos de forma consistente
- Gerar relatórios simples de vendas e estoque

O foco do projeto está na organização do código, tipagem explícita, regras de negócio e modularização, sem utilização de banco de dados, interface gráfica ou frameworks web.

---

 Funcionalidades Implementadas

 Produtos
- Cadastrar produto
- Listar todos os produtos
- Buscar produto por ID
- Buscar produtos por nome (busca parcial)
- Filtrar produtos por categoria
- Atualizar dados de um produto
- Remover produto
- Validações: nome obrigatório, preço > 0, estoque ≥ 0, ID único

 Clientes
- Cadastrar cliente
- Listar clientes
- Buscar cliente por ID
- Validação de nome e e-mail obrigatórios
- Impedimento de e-mail duplicado
- Sistema inicia com 3 clientes já cadastrados

 Carrinho de Compras
- Adicionar produto ao carrinho
- Remover item do carrinho
- Alterar quantidade de um item
- Listar itens do carrinho
- Cálculo de subtotal por item
- Cálculo do valor total do carrinho
- Regras: quantidade > 0, produto existente, quantidade ≤ estoque, atualização de quantidade em caso de produto já existente

 Pedidos
- Finalizar compra (transforma carrinho em pedido)
- Registrar itens com preço histórico (preço no momento da compra)
- Gerar ID único para cada pedido
- Reduzir estoque somente após validação completa de todos os itens
- Consultar todos os pedidos
 Consultar pedidos de um cliente específico
Impede finalização de carrinho vazio ou com estoque insuficiente

 Relatórios
- Relatório de vendas (quantidade de pedidos + faturamento)
- Produtos com estoque baixo
- Resumo geral do sistema

---

#Tecnologias Utilizadas

- *TypeScript
- *Node.js*
- Tipagem estática
- Módulos ES (import/export)
- Métodos de array (`find`, `filter`, `map`, `reduce`)
- Compilação com `tsc`

---

 Estrutura de Arquivos


---

## Instruções de Compilação e Execução

### 1. Instalar dependências
bash
npm install


### 2. Compilar o TypeScript
bash
npm run build


### 3. Executar a aplicação
bash
npm start


Ou de forma combinada:
bash
npm run dev




Exemplos de Operações

 Cadastrar produto
ts
cadastrarProduto("Headset Gamer", "Informática", 299, 12);


 Adicionar ao carrinho`
 ts
adicionarAoCarrinho(1, 2); // produto ID 1, quantidade 2


### Finalizar pedido
ts
const pedido = finalizarPedido(1); // cliente ID 1


### Situações inválidas testadas no `main.ts`
- Cadastrar produto com preço negativo
- Cadastrar produto com nome vazio
- Adicionar quantidade maior que o estoque
- Tentar finalizar carrinho vazio
- Tentar cadastrar cliente com e-mail já existente

---

## Regras de Negócio Implementadas

- ID de produto e cliente são únicos e gerados automaticamente
- Nome de produto e cliente não podem ser vazios
- Preço de produto deve ser maior que zero
- Estoque nunca pode ficar negativo
- Não é possível adicionar ao carrinho quantidade ≤ 0
- Não é possível adicionar produto inexistente
- Não é possível adicionar quantidade superior ao estoque
- Ao adicionar o mesmo produto novamente, a quantidade é atualizada (não cria linha duplicada)
- Pedido só é criado se **todos** os itens tiverem estoque suficiente
- Estoque só é reduzido após a validação completa
- O preço registrado no pedido é o preço praticado no momento da compra (preço histórico)
- Não é possível finalizar pedido com carrinho vazio
- Não é possível criar pedido para cliente inexistente

---

## Limitações Conhecidas

- Dados ficam apenas em memória (são perdidos ao encerrar a aplicação)
- Não há persistência em banco de dados ou arquivo
- Não possui interface gráfica
- Não possui autenticação de usuários
- Não calcula frete, impostos ou cupons de desconto
- Não possui API REST

