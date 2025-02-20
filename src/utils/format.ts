import { IPoll, IPollOption } from './types';

export function formatPoll(poll: IPoll, options: IPollOption[]) {
  return {
    ...poll,
    options: options.filter((option) => option.pollId === poll.id),
  };
}
