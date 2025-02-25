import { query } from '../utils/db';
import { IPoll, IPollOption } from '../utils/types';

export async function getPollOptionsByPollId(pollId: string) {
  const pollOptions: IPollOption[] = await query(` 
    select 
      po.*, 
      (select count(*) from poll_vote pv where pv.optionId = po.id) votes 
    from poll_option po
    where po.pollId = "${pollId}"
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
    select po.*, 
      (select count(*) from poll_vote pv where pv.optionId = po.id) votes 
    from poll_option po
    where po.pollId in (${formattedPollIds})
  `);

  if (!pollOptions) {
    throw Error('Unable to get options for poll.');
  }

  return pollOptions;
}
