# Horneross

AI agent platform / CRM for sales, support, and operations via WhatsApp and channels.

## What is Horneross?

Horneross provides "empleados de IA" — AI employees that handle B2C sales, B2B corporate outreach, tour bookings, post-sale support, and more through WhatsApp and other messaging channels.

## Capabilities

- **Agents** — Configurable AI agents with skills, training, and evals
- **Conversations** — Multi-channel messaging (WhatsApp, web, etc.)
- **CRM** — Contacts, pipelines, and deal tracking
- **Tickets** — Customer support ticketing
- **Campaigns** — Outbound messaging campaigns
- **Datastores** — Knowledge bases for agent context
- **Integrations** — Composio integrations and custom MCPs
- **Voice** — Voice channel support
- **Media** — Rich media handling

## Getting Started

See the project documentation for setup and development instructions.

## Development

### Prerequisites

- Node.js 22+ (see `.nvmrc`)
- pnpm (via `corepack enable`)
- Docker (for local PostgreSQL)

### Setup

```bash
pnpm install
cp .env.example .env
docker compose up -d
pnpm db:push
pnpm dev
```

### Scripts

| Script | Description |
| --- | --- |
| `pnpm dev` | Run the API in watch mode |
| `pnpm build` | Type-check and compile to `dist/` |
| `pnpm start` | Run the compiled server |
| `pnpm test` | Run the test suite once |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm lint` / `pnpm lint:fix` | Lint, optionally auto-fixing |
| `pnpm format` | Format the codebase |
| `pnpm check` | Biome lint + format check |
| `pnpm db:generate` | Generate Drizzle migrations from schema changes |
| `pnpm db:migrate` | Apply pending migrations |
| `pnpm db:push` | Push schema directly to the database (dev) |
| `pnpm db:studio` | Open Drizzle Studio |

## License

Proprietary — All rights reserved.
