import { query } from '../utils/db';
import { IPollVote } from '../utils/types';

export async function getPollVotesByPollId(pollId: string) {
  const votesQueryResponse: IPollVote[] = await query(`
    select pv.id, po.title, pv.createdDate 
    from poll_vote pv
    join poll_option po on po.id = pv.optionId
    where pv.pollId = "${pollId}";
  `);

  if (!votesQueryResponse) {
    throw Error('Unable to get votes for poll.');
  }

  return votesQueryResponse;
}

export async function createPollVote(pollId: string, optionId: string) {
  const createRes = await query(`
    insert into poll_vote (
      id, 
      createdDate, 
      optionId,
      pollId
    ) values(
      uuid(),
      current_timestamp(),
      "${optionId}",
      "${pollId}"
    )  
  `);

  if (!createRes) {
    throw Error('Failed to create poll vote.');
  }
}
