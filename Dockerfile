FROM node:22-alpine AS build

RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build


FROM node:22-alpine AS production

RUN corepack enable

WORKDIR /app

ENV NODE_ENV=production

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/index.js"]
