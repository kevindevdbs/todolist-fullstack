# 📝 Lista de Tarefas Fullstack (To-Do List)

![Project Status](https://img.shields.io/badge/status-concluído-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

Uma aplicação **Fullstack** moderna para gerenciamento de tarefas, desenvolvida com **Next.js 16**, **TypeScript**, **Prisma ORM** e **PostgreSQL**. O projeto utiliza as mais recentes **Server Actions** para comunicação eficiente entre cliente e servidor, além de estilização performática com **Tailwind CSS v4**.

🔗 **Deploy na Vercel:** [Acesse o projeto aqui](https://todolist-fullstack-alpha.vercel.app/)

---

## 📸 Funcionalidades

O projeto oferece uma experiência fluida e responsiva:

- **✅ CRUD Completo:**
  - Criação de tarefas com validação (impede itens vazios ou duplicados).
  - Edição e Exclusão de tarefas.
  - Atualização de status (pendente/concluída) em tempo real.
- **🗑️ Limpeza em Massa:** Botão dedicado para remover todas as tarefas já finalizadas.
- **🔍 Filtros de Visualização:** Alterne facilmente entre *Todas*, *Não Finalizadas* e *Concluídas*.
- **📊 Progresso Visual:** Barra de progresso dinâmica e contadores que motivam a conclusão das tarefas.
- **✨ UI/UX Aprimorada:**
  - Feedback visual com notificações Toast (Sonner).
  - Componentes acessíveis (Radix UI).
  - Ícones intuitivos (Lucide React).
  - Design totalmente responsivo (Mobile First).

---

## 🚀 Tecnologias Utilizadas

### Front-end & Framework
- **[Next.js 16.1](https://nextjs.org/)**: App Router e Server Actions.
- **[React 19](https://react.dev/)**: Biblioteca base para a interface.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Estilização moderna e otimizada.
- **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones.
- **[Radix UI](https://www.radix-ui.com/)** & **[Sonner](https://sonner.emilkowal.ski/)**: Componentes de interface e notificações.

### Back-end & Dados
- **[Prisma ORM](https://www.prisma.io/)**: Acesso ao banco de dados type-safe.
- **[PostgreSQL](https://www.postgresql.org/)**: Banco de dados relacional.
- **[Vercel](https://vercel.com/)**: Deploy e hospedagem.

---

## 📂 Modelagem de Dados

O esquema do banco de dados (`schema.prisma`) é otimizado para simplicidade e eficiência:

```prisma
model Tasks {
  id      Int     @id @default(autoincrement())
  task    String
  done    Boolean
}
```

🔧 Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

1. Clonar o repositório

git clone [https://github.com/kevindevdbs/todolist-fullstack.git](https://github.com/kevindevdbs/todolist-fullstack.git)
cd todolist-fullstack

2. Instalar dependências
   
npm install

3. Configurar Variáveis de Ambiente
   
Crie um arquivo .env na raiz do projeto e adicione a URL de conexão do seu banco PostgreSQL:

Snippet de código
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nomedobanco?schema=public"

4. Configurar o Banco de Dados
Execute a migração para criar a tabela no banco:

npx prisma migrate dev --name init

5. Iniciar o Servidor
   
npm run dev
Acesse http://localhost:3000 no seu navegador.

🛠️ Scripts Disponíveis

npm run dev: Inicia o ambiente de desenvolvimento.

npm run build: Gera a build de produção otimizada.

npm run start: Roda a aplicação baseada na build gerada.

npm run lint: Verifica problemas no código com ESLint.

🤝 Contribuições
Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma Issue ou enviar um Pull Request com melhorias.

Desenvolvido por Kevin
