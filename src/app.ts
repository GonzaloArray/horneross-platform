import cors from '@fastify/cors';
import sensible from '@fastify/sensible';
import Fastify, { type FastifyInstance } from 'fastify';
import { healthRoutes } from './routes/health.js';

export async function buildApp(): Promise<FastifyInstance> {
  const app = Fastify({
    logger: true,
  });

  await app.register(cors);
  await app.register(sensible);

  await app.register(healthRoutes);

  return app;
}

export type App = FastifyInstance;
