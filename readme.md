# Leads Management

Sistema de gerenciamento de leads com front-end em React.js (Vite) e back-end em Node.js + SQLite.\
Preparado para rodar localmente ou totalmente com Docker Compose.

## Pré-requisitos

- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)
- (Opcional para rodar local) Node.js v20+ e npm

---

## Rodando com Docker

> **Recomendado:** Tudo roda isolado e pronto para testes!

```bash
# Clone o repositório
git clone git@github.com:Vini-S-Santos/TestSquadra.git
cd leads-management

# Suba o sistema (front e back)
docker-compose up --build
```

- Acesse o frontend em: [http://localhost:4173](http://localhost:4173)
- API do backend em: [http://localhost:3001/api/leads](http://localhost:3001/api/leads)

> O banco de dados é populado automaticamente na primeira execução.

---

## Rodando localmente (sem Docker)

### Backend

```bash
cd apps/server
npm install
npm run seed     # Popula o banco de dados com dados fictícios
npm start        # Inicia a API em http://localhost:3001
```

### Frontend

```bash
cd apps/client
cp .env.example .env   # (Edite o .env se necessário)
npm install
npm run dev            # Abre o front em http://localhost:5173
```

No arquivo `.env` do front, configure:

```
VITE_API_URL=http://localhost:3001
```

---

## Estrutura do Projeto

```
leads-management/
│
├─ apps/
│   ├─ client/   # Frontend React (Vite)
│   └─ server/   # Backend Node.js (Express + SQLite)
│
├─ docker-compose.yml
└─ README.md
```

---

## Variáveis de Ambiente

### Frontend (`apps/client/.env`)

```
VITE_API_URL=http://localhost:3001
```

> Se rodando com Docker, normalmente **não precisa alterar**.

---

## Comandos Úteis

- Parar todos containers:\
  `docker-compose down`
- Rebuild do frontend:\
  `docker-compose build frontend`

---

## Contato

Dúvidas? Abra uma issue ou envie um e-mail para [visouza0@gmail.com](mailto\:visouza0@gmail.com)

