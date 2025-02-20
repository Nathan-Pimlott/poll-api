import { testDbConnection } from '../utils/db';

export async function healthHandler(req: any, res: any) {
  const isHealthy = await testDbConnection();
  return res
    .status(200)
    .send({ status: isHealthy ? 'Healthy!' : 'Unhealthy!' });
}
