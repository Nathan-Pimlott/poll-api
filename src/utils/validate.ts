import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

export const validate = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req);
      return next();
    } catch (error: any) {
      // Catch the Zod error or use a generic message
      const zodError =
        error.errors.length > 0
          ? error.errors[0].message
          : 'Failed to validate request.';

      return next(zodError);
    }
  };
};
