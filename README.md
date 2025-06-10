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
- [Próximos Passos de Desenvolvimento](#próximos-passos-de-desenvolvimento)
- [Licença](#licença)
- [Autor](#autor)

## Descrição

Trato Tech é um e-commerce de produtos tecnológicos desenvolvido com React, TypeScript e Redux Toolkit. O projeto utiliza uma API REST com json-server para persistência de dados e permite aos usuários navegar por diferentes categorias de produtos, adicionar itens ao carrinho, gerenciar favoritos, realizar buscas e cadastrar novos produtos.

### Layout

O layout do projeto é responsivo e foi desenvolvido no [Figma](https://www.figma.com/design/XuqzfXGFTPQYR5O1SS60NI/React--gerenciamento-de-estados-globais-com-Redux-%7C-TratoTech--Community-?node-id=50-4&p=f&t=KSRbNzHDojI3PBXO-0) pela equipe da Alura.

### Principais recursos incluem

- **API REST**: Integração com json-server para persistência de dados
- **Navegação por categorias**: Produtos organizados por categorias (Eletrônicos, Automotivo, Jogos, Escritório, Som)
- **Carrinho de compras**: Adição, remoção e gerenciamento de quantidades
- **Sistema de favoritos**: Marcar/desmarcar produtos como favoritos
- **Busca inteligente**: Filtrar produtos por nome nas categorias
- **Cadastro de produtos**: Formulário para adicionar novos produtos via API
- **Edição de produtos**: Modificar título e descrição de produtos existentes
- **Notificações**: Toast notifications para feedback do usuário
- **Persistência local**: Redux Persist para manter estado entre sessões
- **TypeScript**: Tipagem estática para maior segurança e produtividade

## Tecnologias Utilizadas

### Frontend

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Redux Toolkit** - Gerenciamento de estado global
- **Redux Persist** - Persistência do estado no localStorage
- **React Router DOM** - Roteamento e navegação
- **React Hook Form** - Gerenciamento de formulários
- **Axios** - Cliente HTTP para requisições à API
- **SASS/SCSS** - Pré-processador CSS para estilização
- **Classnames** - Manipulação condicional de classes CSS
- **React Icons** - Biblioteca de ícones
- **Chakra UI Toast** - Sistema de notificações
- **Vite** - Bundler e ferramenta de desenvolvimento

### Backend/API

- **json-server** - API REST simulada para desenvolvimento
- **Axios** - Cliente HTTP para comunicação com a API

### Desenvolvimento

- **ESLint** - Linting e análise de código
- **Prettier** - Formatação automática de código
- **Cypress** - Testes end-to-end
- **UUID** - Geração de identificadores únicos

## Estrutura de Pastas

```
src/
├── assets/           # Imagens e recursos estáticos
├── common/
│   └── config/       # Configurações da API (Axios)
├── components/       # Componentes reutilizáveis
│   ├── Botao/        # Componente de botão
│   ├── Busca/        # Componente de busca
│   ├── Header/       # Cabeçalho das páginas
│   ├── Input/        # Componente de input
│   ├── Item/         # Card de produto
│   └── ...
├── pages/            # Páginas da aplicação
│   ├── Anuncie/      # Página de cadastro de produtos
│   ├── Carrinho/     # Página do carrinho
│   ├── Categoria/    # Página de categoria
│   └── Home/         # Página inicial
├── services/         # Serviços da API (async thunks)
│   ├── categorias.ts # Serviços de categorias
│   └── itens.ts      # Serviços de itens
├── store/            # Configuração do Redux
│   ├── hooks.ts      # Hooks tipados do Redux
│   ├── index.tsx     # Configuração do store
│   └── reducers/     # Reducers da aplicação
├── styles/           # Estilos globais e breakpoints
├── types/            # Definições de tipos TypeScript
└── routes.tsx        # Configuração de rotas
```

```
database/
└── db.json           # Banco de dados JSON para json-server
```

### Arquivos Principais

- `src/main.tsx`: Ponto de entrada da aplicação com configuração do Chakra UI Toast
- `src/store/index.tsx`: Configuração do Redux store com Redux Persist
- `src/store/hooks.ts`: Hooks tipados para useDispatch e useSelector
- `src/routes.tsx`: Definição das rotas da aplicação
- `src/common/config/api.ts`: Configuração do cliente Axios
- `src/services/`: Async thunks para comunicação com a API
- `src/store/reducers/`: Reducers para categorias, itens, carrinho e busca
- `database/db.json`: Banco de dados JSON para desenvolvimento

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

3. Inicie o servidor da API (json-server):

```bash
npm run server
# ou
yarn server
```

4. Em outro terminal, inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

5. Acesse o projeto em seu navegador pelo link gerado no servidor de desenvolvimento.

> **Importante**: É necessário executar tanto o json-server (porta 3333) quanto o servidor de desenvolvimento do Vite (porta 5174) para que a aplicação funcione corretamente.

### Configuração

#### API

O projeto utiliza json-server para simular uma API REST. O servidor roda na porta 3333 e utiliza o arquivo `database/db.json` como banco de dados.

#### Estado da Aplicação

O projeto utiliza Redux Persist para salvar o estado da aplicação no localStorage do navegador, garantindo que os dados sejam mantidos entre sessões.

#### Notificações

O sistema de notificações utiliza Chakra UI Toast, configurado no arquivo `src/main.tsx` para fornecer feedback visual das operações.

### Casos de Uso Comuns

1. **Navegação por Categorias**: Na página inicial, clique em uma categoria para ver os produtos relacionados.
2. **Adicionar ao Carrinho**: Clique no ícone de carrinho em um produto para adicioná-lo.
3. **Favoritar Produtos**: Clique no ícone de coração para favoritar/desfavoritar um produto.
4. **Buscar Produtos**: Use a barra de busca no topo para encontrar produtos específicos.
5. **Gerenciar Carrinho**: Acesse a página de carrinho para ver os itens adicionados, alterar quantidades ou remover produtos.
6. **Cadastrar Novos Produtos**: Acesse `/anuncie` para criar novos produtos via formulário (dados são salvos na API).
7. **Editar Produtos**: Clique no ícone de edição para modificar o título e descrição de um produto.
8. **Excluir Produtos**: Clique no botão vermelho no canto superior direito do item para removê-lo.
9. **Feedback Visual**: Observe as notificações toast que aparecem durante operações (carregamento, sucesso, erro).

### Solução de Problemas

- **API não responde**: Verifique se o json-server está rodando na porta 3333 (`npm run server`).
- **Produtos não carregam**: Certifique-se de que o arquivo `database/db.json` existe e está acessível.
- **Carrinho não atualiza**: Verifique se o localStorage do navegador está habilitado.
- **Formulário não cadastra produtos**: Confirme se a API está rodando e se os campos obrigatórios estão preenchidos.
- **Toast notifications não aparecem**: Verifique se o Chakra UI Toast está configurado corretamente no `main.tsx`.
- **Imagens não carregam**: Certifique-se de que todas as dependências foram instaladas corretamente.
- **Erros de TypeScript**: Execute `npm run lint` para verificar problemas de tipagem.

## Projeto ao Vivo

Para acessar uma versão de demonstração do projeto, visite: [Trato Tech](https://trato-tech-alura.vercel.app)

## Fluxo de Dados

O projeto utiliza Redux Toolkit para gerenciar o estado global da aplicação com integração à API:

### Estados Gerenciados

1. **Categorias**: Carregadas da API via async thunk (`buscarCategorias`)
2. **Itens**: Produtos gerenciados via API com operações CRUD:
   - `buscarItens`: Carrega produtos da API
   - `cadastrarItem`: Adiciona novos produtos via POST
   - Edição e exclusão locais (podem ser estendidas para API)
3. **Carrinho**: Gerenciado localmente com persistência
4. **Busca**: Termo de busca para filtrar produtos

### Arquitetura de Dados

```
API (json-server) ←→ Services (async thunks) ←→ Redux Store ←→ Components
                                                      ↓
                                              Redux Persist ←→ localStorage
```

### Fluxo de Operações

1. **Carregamento**: Async thunks fazem requisições à API
2. **Estado Local**: Redux gerencia o estado da aplicação
3. **Persistência**: Redux Persist salva dados no localStorage
4. **Feedback**: Toast notifications informam o status das operações

## Próximos Passos de Desenvolvimento

O projeto Trato Tech está em constante evolução. Abaixo estão os próximos recursos e melhorias planejados:

### Recursos Prioritários

1. **Página de Favoritos**: Implementar uma página dedicada para visualizar e gerenciar todos os produtos favoritados pelo usuário.

2. **API Completa para CRUD**: Estender as operações de edição e exclusão de produtos para usar a API ao invés de apenas estado local.

### Melhorias Técnicas

1. **Testes Automatizados**: Expandir cobertura de testes com Jest, React Testing Library e Cypress.

2. **Otimização de Performance**:

   - Implementar lazy loading para componentes
   - Otimizar requisições à API com cache
   - Implementar paginação para listas grandes

3. **Melhorias de UX**:

   - Loading states mais elaborados
   - Skeleton screens durante carregamento
   - Animações e transições suaves

4. **Infraestrutura**:

   - Configurar CI/CD pipeline
   - Implementar monitoramento de erros
   - Adicionar analytics de uso

5. **Migração para Next.js**: Considerar migração para Next.js para SSR e melhor SEO.

Se você deseja contribuir com alguma dessas melhorias, sinta-se à vontade para abrir um Pull Request!

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [MIT License](https://github.com/Melksedeque/trato-tech-alura?tab=MIT-1-ov-file) para mais detalhes.

## Autor

- GitHub - [Melksedeque](https://github.com/Melksedeque/)
- FrontEndMentor - [Melksedeque](https://www.frontendmentor.io/profile/Melksedeque)
- Twitter / X - [SouzaMelk](https://x.com/SouzaMelk)
- LinkedIn - [Melksedeque Silva](https://www.linkedin.com/in/melksedeque-silva/)
