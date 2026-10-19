import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema.js';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL env var is required');
}

// A single shared `postgres` client pools connections internally;
// avoid creating a new client per request.
const client = postgres(connectionString);

export const db = drizzle(client, { schema });
