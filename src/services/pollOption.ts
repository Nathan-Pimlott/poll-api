import { query } from '../utils/db';
import { IPoll, IPollOption } from '../utils/types';

export async function getPollOptionsByPollId(pollId: string) {
  const pollOptions: IPollOption[] = await query(`
    select * from poll_option where pollId = "${pollId}"
  `);

  if (!pollOptions) {
    throw Error('Unable to get options for poll.');
  }

  return pollOptions;
}

// Used when getting options for a selection of polls.
export async function getPollOptions(polls: IPoll[]) {
  const formattedPollIds = polls.map((poll) => `"${poll.id}"`).join(',');

  const pollOptions: IPollOption[] = await query(`
    select * from poll_option where pollId in (${formattedPollIds})
  `);

  if (!pollOptions) {
    throw Error('Unable to get options for poll.');
  }

  return pollOptions;
}
