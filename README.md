# Trato Tech

![Tela Principal](/screenshot/tela-principal.png)

## Menu

- [Descrição](#descrição)
  - [Layout do Projeto](#layout)
  - [Principais recursos incluem](#principais-recursos-incluem)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Pastas](#estrutura-de-pastas)
  - [Arquivos Principais](#arquivos-principais)
- [Como Instalar e Rodar o Projeto](#como-instalar-e-rodar-o-projeto)
  - [Configuração](#configuração)
  - [Casos de Uso Comuns](#casos-de-uso-comuns)
  - [Solução de Problemas](#solução-de-problemas)
- [Projeto ao Vivo](#projeto-ao-vivo)
- [Fluxo de Dados](#fluxo-de-dados)
- [Licença](#licença)
- [Autor](#autor)

## Descrição

Trato Tech é um e-commerce de produtos tecnológicos desenvolvido com React e Redux. O projeto permite aos usuários navegar por diferentes categorias de produtos, adicionar itens ao carrinho, gerenciar favoritos e realizar buscas.

### Layout

O layout do projeto é responsivo e foi desenvolvido no [Figma](https://www.figma.com/design/XuqzfXGFTPQYR5O1SS60NI/React--gerenciamento-de-estados-globais-com-Redux-%7C-TratoTech--Community-?node-id=50-4&p=f&t=KSRbNzHDojI3PBXO-0).

### Principais recursos incluem

- Navegação por categorias de produtos (Eletrônicos, Automotivo, Jogos, Escritório, Som)
- Adição e remoção de produtos do carrinho
- Gerenciamento de quantidade de itens no carrinho
- Sistema de favoritos
- Busca de produtos
- Persistência de dados com Redux Persist

## Tecnologias Utilizadas

### Frontend

- React 19
- TypeScript
- Redux Toolkit para gerenciamento de estado
- Redux Persist para persistência de dados
- React Router DOM para navegação
- SASS/SCSS para estilização
- Classnames para manipulação condicional de classes CSS
- Vite como bundler e ferramenta de desenvolvimento

## Estrutura de Pastas

```
src/
├── assets/        # Imagens e recursos estáticos
├── components/    # Componentes reutilizáveis
├── pages/         # Páginas da aplicação
├── store/         # Configuração e reducers do Redux
├── styles/        # Estilos globais e breakpoints
├── types/         # Definições de tipos TypeScript
└── routes.tsx     # Configuração de rotas
```

### Arquivos Principais

- `src/main.tsx`: Ponto de entrada da aplicação
- `src/store/index.tsx`: Configuração do Redux store e persistência
- `src/routes.tsx`: Definição das rotas da aplicação
- `src/store/reducers/`: Reducers para categorias, itens, carrinho e busca

## Como Instalar e Rodar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Melksedeque/trato-tech-alura.git
cd trato-tech-alura
```

2. Instale as dependências:

```bash
npm install
# ou
yarn
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

### Configuração

O projeto utiliza Redux Persist para salvar o estado da aplicação no localStorage do navegador. Não é necessária nenhuma configuração adicional para começar a usar.

### Casos de Uso Comuns

1. **Navegação por Categorias**: Na página inicial, clique em uma categoria para ver os produtos relacionados.
2. **Adicionar ao Carrinho**: Clique no ícone de carrinho em um produto para adicioná-lo.
3. **Favoritar Produtos**: Clique no ícone de coração para favoritar/desfavoritar um produto.
4. **Buscar Produtos**: Use a barra de busca no topo para encontrar produtos específicos.
5. **Gerenciar Carrinho**: Acesse a página de carrinho para ver os itens adicionados, alterar quantidades ou remover produtos.

### Solução de Problemas

- **Carrinho não atualiza**: Verifique se o localStorage do navegador está habilitado.
- **Imagens não carregam**: Certifique-se de que todas as dependências foram instaladas corretamente.

## Projeto ao Vivo

Para acessar uma versão de demonstração do projeto, visite: [Trato Tech](#)

## Fluxo de Dados

O projeto utiliza Redux para gerenciar o estado global da aplicação:

1. **Categorias**: Lista estática de categorias disponíveis.
2. **Itens**: Produtos disponíveis para compra.
3. **Carrinho**: Itens adicionados pelo usuário, com suas respectivas quantidades.
4. **Busca**: Termo de busca atual para filtrar produtos.

Todos esses estados são persistidos no localStorage do navegador usando Redux Persist.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [MIT License](https://github.com/Melksedeque/trato-tech-alura?tab=MIT-1-ov-file) para mais detalhes.

## Autor

- GitHub - [Melksedeque](https://github.com/Melksedeque/)
- FrontEndMentor - [Melksedeque](https://www.frontendmentor.io/profile/Melksedeque)
- Twitter / X - [SouzaMelk](https://x.com/SouzaMelk)
- LinkedIn - [Melksedeque Silva](https://www.linkedin.com/in/melksedeque-silva/)
