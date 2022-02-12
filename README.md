# Candy Eccomerce

Aplicação em Desenvolvimento - Construíndo um site de vendas de doces, brigadeiros e trufas, para futuro negócio da família.

## O que foi feito até agora:

- [x] Criação do Layout fixo usando MUI.
- [x] Customização do `Document` para renderização no servidor (SSR) [Para saber mais...](https://nextjs.org/docs/advanced-features/custom-document)
- [x] Adicionando e Customizando Lista de Produtos.
- [x] Paginas de Detalhes do Produto
- [x] Adicionando Modo Escudo com armazenamento do status usando Cookies.
    - ~~~~js
      npm install js-cookies
- [x] Connectar ao MongoDB
    - ~~~~js
      npm install mongoose
    - Boas práticas de evitar erros de Promises por lentidão de internet ou qualquer outra coisa
    ~~~~
    try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('new connection');
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    process.exit(1);
  } 
    ~~~~
- [X] Fazendo API dos Produtos
    - `install next-connect` - método pequeno de rotas e middleware, usado frequentemente em rotas API. [Link](https://www.npmjs.com/package/next-connect)
- [X] Buscar Produto da API
- [X] Adicionar Função de adicionar o produto no carrinho. 
- [x] Função de remover itens
- [ ] Bug do contador (Necessita de correção)????

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
