import { buildApp } from './app.js';

const PORT = Number(process.env.PORT ?? 3000);

const app = await buildApp();

async function shutdown(signal: string) {
  app.log.info(`received ${signal}, shutting down`);
  await app.close();
  process.exit(0);
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

try {
  await app.listen({ port: PORT, host: '0.0.0.0' });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
