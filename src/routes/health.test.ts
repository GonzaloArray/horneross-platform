import { describe, expect, it } from 'vitest';
import { buildApp } from '../app.js';

describe('GET /health', () => {
  it('returns status ok with a valid timestamp', async () => {
    const app = await buildApp();

    const response = await app.inject({
      method: 'GET',
      url: '/health',
    });

    expect(response.statusCode).toBe(200);

    const body = response.json();
    expect(body).toMatchObject({ status: 'ok' });
    expect(new Date(body.timestamp).toISOString()).toBe(body.timestamp);

    await app.close();
  });
});
