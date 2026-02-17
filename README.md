# REFRIGELAR - Sistema de Gestão de Equipamentos

Sistema completo para gestão de equipamentos de refrigeração e ar condicionado com geração de QR Code, histórico de serviços e painéis administrativos.

## Funcionalidades

### Site Institucional
- Página inicial com apresentação
- Página de serviços
- Sobre a empresa
- Galeria de trabalhos realizados
- Página de contato com WhatsApp
- Botão flutuante do WhatsApp

### Sistema de Gestão
- **Autenticação segura** com três níveis de acesso:
  - Administrador: acesso total
  - Técnico: cadastrar equipamentos e serviços
  - Cliente: visualizar seus equipamentos

### Cadastro de Equipamentos
- Dados completos do cliente
- Especificações técnicas do equipamento
- Upload de fotos
- Geração automática de QR Code único
- Configuração de privacidade (público/privado)

### Histórico de Serviços
- Registro completo de cada serviço
- Tipo de serviço realizado
- Peças utilizadas
- Fotos anexadas
- Assinatura digital do cliente
- Geração de PDF

### QR Code
- Leitura de QR Code na tela de login
- Página pública do equipamento
- Layout de etiqueta para impressão

## Tecnologias

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Banco de Dados**: PostgreSQL com Prisma ORM
- **Autenticação**: NextAuth.js
- **UI Components**: Radix UI + shadcn/ui

## Requisitos

- Node.js 18+
- PostgreSQL 12+
- NPM ou Yarn

## Instalação

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd refrigelar
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
# Database
DATABASE_URL="postgresql://usuario:senha@localhost:5432/refrigelar?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="sua-chave-secreta-aqui"

# WhatsApp
WHATSAPP_NUMBER="5598985855278"
```

### 4. Configure o banco de dados

```bash
# Gerar cliente Prisma
npx prisma generate

# Executar migrações
npx prisma migrate dev --name init

# Popular banco com dados iniciais
npx prisma db seed
```

### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

## Usuários Padrão

Após executar o seed, os seguintes usuários estarão disponíveis:

| Tipo | E-mail | Senha |
|------|--------|-------|
| Admin | admin@refrigelar.com | admin123 |
| Técnico | tecnico@refrigelar.com | tecnico123 |
| Cliente | cliente@exemplo.com | cliente123 |

## Deploy no Vercel

### 1. Prepare o projeto

```bash
# Build de produção
npm run build
```

### 2. Deploy no Vercel

```bash
# Instale o CLI do Vercel
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel
```

### 3. Configure as variáveis de ambiente no Vercel

Acesse o dashboard do Vercel e configure:
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL` (URL do seu deploy)

### 4. Configure o banco de dados

Use um serviço como:
- **Neon** (https://neon.tech) - PostgreSQL serverless
- **Supabase** (https://supabase.com) - PostgreSQL gratuito
- **Railway** (https://railway.app) - PostgreSQL

Execute as migrações:
```bash
npx prisma migrate deploy
```

## Estrutura do Projeto

```
refrigelar/
├── prisma/
│   ├── schema.prisma    # Schema do banco de dados
│   └── seed.ts          # Dados iniciais
├── src/
│   ├── app/
│   │   ├── api/         # API Routes
│   │   ├── admin/       # Painel do administrador
│   │   ├── cliente/     # Área do cliente
│   │   ├── tecnico/     # Painel do técnico
│   │   ├── equipamento/ # Página pública do equipamento
│   │   ├── login/       # Tela de login
│   │   ├── contato/     # Página de contato
│   │   ├── servicos/    # Página de serviços
│   │   ├── sobre/       # Sobre a empresa
│   │   ├── trabalhos/   # Galeria de trabalhos
│   │   ├── globals.css  # Estilos globais
│   │   ├── layout.tsx   # Layout principal
│   │   └── page.tsx     # Página inicial
│   ├── components/
│   │   ├── ui/          # Componentes de UI (shadcn)
│   │   ├── navbar.tsx   # Navegação
│   │   └── whatsapp-float.tsx
│   ├── lib/
│   │   ├── auth.ts      # Configuração do NextAuth
│   │   ├── prisma.ts    # Cliente Prisma
│   │   └── utils.ts     # Funções utilitárias
│   └── types/
│       └── index.ts     # Tipos TypeScript
├── public/              # Arquivos estáticos
├── .env.example         # Exemplo de variáveis
├── next.config.js       # Configuração do Next.js
├── package.json         # Dependências
├── tailwind.config.ts   # Configuração do Tailwind
└── tsconfig.json        # Configuração do TypeScript
```

## Personalização

### Alterar dados da empresa

Edite os arquivos nas páginas do site institucional:
- `src/app/page.tsx` - Página inicial
- `src/app/sobre/page.tsx` - Sobre a empresa
- `src/app/contato/page.tsx` - Contato

### Alterar número do WhatsApp

Edite o arquivo `.env`:
```env
WHATSAPP_NUMBER="5598XXXXXXXXX"
```

Ou edite diretamente nos componentes:
- `src/components/whatsapp-float.tsx`
- Páginas do site

### Alterar cores

Edite o arquivo `src/app/globals.css`:

```css
:root {
  --primary: 201 96% 32%;      /* Azul principal */
  --accent: 43 96% 50%;        /* Amarelo/destaque */
}
```

## Suporte

Em caso de dúvidas ou problemas:
- E-mail: servrefrigelar@gmail.com
- WhatsApp: (98) 98585-5278

## Licença

Este projeto é proprietário da REFRIGELAR Serviços LTDA.
