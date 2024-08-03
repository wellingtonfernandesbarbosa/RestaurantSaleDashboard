# Restaurant Sale Dashboard

Este é um projeto [Next.js](https://nextjs.org/) iniciado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Iniciando

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) com o seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.tsx`. A página será atualizada automaticamente conforme você edita o arquivo.

Este projeto utiliza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar automaticamente a fonte Inter, uma fonte personalizada do Google.

## Saiba Mais

Para saber mais sobre Next.js, veja os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - aprenda sobre as funcionalidades e a API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo sobre Next.js.

Você pode conferir o [repositório do Next.js no GitHub](https://github.com/vercel/next.js/) - seu feedback e contribuições são bem-vindos!

## Deploy na Vercel

A maneira mais fácil de fazer o deploy de sua aplicação Next.js é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira a nossa [documentação de deployment do Next.js](https://nextjs.org/docs/deployment) para mais detalhes.

## Funcionalidades do Projeto

Este projeto tem a intenção de ser um sistema de pedidos, com as seguintes funcionalidades:

- **Tela Inicial**: Lista de números de usuários/clientes de 0 a 60.
- **Tela de Produtos**: Lista de produtos para selecionar após clicar no número do usuário/cliente.
- **Resumo do Pedido**: Resumo dos pedidos com valores somados, possibilitando impressão ou salvamento em local storage.
- **Página de Resumo**: Resumo dos pedidos de cada número.
- **Página de Itens Vendidos**: Total de itens vendidos especificamente naquele dia.

Este `README.md` fornece uma descrição clara do projeto, instruções de inicialização, recursos para aprender mais sobre Next.js e detalhes das funcionalidades do projeto. Certifique-se de ajustar qualquer detalhe conforme necessário para refletir com precisão o estado atual e os objetivos do seu projeto.