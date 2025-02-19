import { NextFunction, Request, RequestHandler, Response } from 'express';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('In middleware');

  const { token } = req.headers;

  if (!token) {
    return res.status(401).send();
  }

  return next();
};
