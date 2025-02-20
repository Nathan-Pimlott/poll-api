import { getPollVotesByPollId } from '../services/pollVotes';

export async function getPollVotesHandler(req: any, res: any) {
  try {
    const { pollId } = req.params;

    const pollVotes = await getPollVotesByPollId(pollId);

    return res.status(200).send(pollVotes);
  } catch (error) {
    console.log('Error getting votes for poll.');
    console.debug({ error });
    return res.status(400).send();
  }
}
