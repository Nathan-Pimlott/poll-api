import { IPoll, IPollOption } from './types';

export function formatPolls(polls: IPoll[], options: IPollOption[]) {
  return polls.map((poll) => ({
    ...poll,
    options: options.filter((option) => option.pollId === poll.id),
  }));
}
