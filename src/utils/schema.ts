import { z } from 'zod';

export const createPollSchema = z.object({
  body: z
    .object({
      title: z.string().max(255).min(2),
      options: z
        .array(z.string().max(255).min(2))
        .min(2, 'Poll must have at least 2 options.')
        .max(7, 'Poll cannot have more than 7 options.'),
    })
    .strict(),
});
