export function healthHandler(req: any, res: any) {
  res.status(200).send({ status: 'Healthy!' });
}
