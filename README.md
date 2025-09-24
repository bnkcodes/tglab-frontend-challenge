# TGLab Frontend Challenge

## Descrição

Esta é uma aplicação web desenvolvida com React + TypeScript + Vite que simula uma plataforma de apostas. A aplicação permite que usuários se registrem, façam login, realizem apostas e carregar seus saldos.

## Requisitos

- Node.js >= 18.x
- Yarn ou npm
- Mock API rodando (disponível em: https://github.com/bnkcodes/tglab-mock-api)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/bnkcodes/tglab-frontend-challenge.git
   cd tglab-frontend-challenge
   ```

2. Instale as dependências utilizando o Yarn:

   ```bash
   yarn
   ```

   Ou com npm:

   ```bash
   npm install
   ```

## Configuração

1. Certifique-se de que a Mock API esteja rodando em `http://localhost:3000`

## Execução

1. Para rodar a aplicação em ambiente de desenvolvimento:

   ```bash
   yarn dev
   ```

   Ou com npm:

   ```bash
   npm run dev
   ```


A aplicação estará disponível em: http://localhost:5173

## Funcionalidades

### Autenticação
- **Registro**: Criação de conta com nome, email e senha
- **Login**: Autenticação de usuários existentes
- **Logout**: Encerramento de sessão

### Apostas
- **Realizar Apostas**: Interface para criar novas apostas com valor personalizado
- **Deposito de saldo**: Interface para adicionar saldo com valor personalizado



### Internacionalização
- **Múltiplos idiomas**: Suporte a português, inglês e espanhol
- **Formatação**: Moedas formatadas conforme o locale selecionado

## Estrutura do Projeto

```
src/
├── @types/               # Tipagens customizados em modulo globais
├── app/                  # Configurações gerais da aplicação
├── features/             # Funcionalidades por domínio
├── pages/                # Páginas da aplicação
│   ├── private/          # Páginas privadas (autenticadas)
│   └── public/           # Páginas públicas
├── shared/               # Componentes e utilities compartilhados
└── locales/              # Arquivos de tradução
```

## Tecnologias Utilizadas

- **TypeScript**: Superset JavaScript com tipagem estática
- **Vite**: Build tool e dev server
- **MUI Joy**: Biblioteca de componentes UI
- **SWR**: Biblioteca para gerenciamento de estado remoto
- **React Router**: Roteamento da aplicação
- **React Hook Form**: Gerenciamento de formulários
- **i18next**: Internacionalização
- **Zod**: Validação de schemas

## Iniciar a aplicação

- `yarn dev`: Inicia o servidor de desenvolvimento

## API Endpoints Utilizados

A aplicação consome os seguintes endpoints da Mock API:

- `POST /register` - Registro de usuário
- `POST /login` - Login de usuário
- `POST /bet` - Realizar aposta
- `POST /deposit` - Adicionar saldo (Novo)
- `GET /my-bets` - Consultar apostas (Não finalizado)
- `DELETE /my-bet/:id` - Cancelar aposta (Não finalizado)
- `GET /my-transactions` - Consultar transações (Não finalizado)

## Observações

Par o funcionamento, certifique-se de que a Mock API esteja rodando antes de iniciar a aplicação frontend.
