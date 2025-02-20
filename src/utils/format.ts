import _ from 'lodash';

import { IPoll, IPollOption, IPollVote } from './types';

export function formatPoll(
  poll: IPoll,
  options: IPollOption[],
  votes: IPollVote[] = []
) {
  return {
    ...poll,
    votes: votes.length,
    options: options
      .filter((option) => option.pollId === poll.id)
      .map((option) => ({
        ...option,
        votes: votes.reduce(
          (count, vote) => (vote.optionId === option.id ? ++count : count),
          0
        ),
      })),
  };
}
