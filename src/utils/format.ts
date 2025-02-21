import _ from 'lodash';

import { IPoll, IPollOption } from './types';

export function formatPoll(poll: IPoll, options: IPollOption[]) {
  return {
    ...poll,
    options: options
      .filter((option) => option.pollId === poll.id)
      .map(({ id, title, votes = 0 }) => ({ id, title, votes })),
  };
}
