import { Express } from 'express';
import { healthHandler } from '../handlers/health';
import { middleware } from './middleware';

export function routes(app: Express) {
  middleware(app);
  app.get('/health', healthHandler);
}
