import { getPollById } from '../services/poll';
import { getPollVotesByPollId } from '../services/pollVotes';

export async function getPollVotesHandler(req: any, res: any) {
  try {
    const { pollId } = req.params;

    const poll = await getPollById(pollId);
    const pollVotes = await getPollVotesByPollId(pollId);

    const formattedPoll = {
      ...poll,
      votes: pollVotes,
    };

    return res.status(200).send(formattedPoll);
  } catch (error) {
    console.log('Error getting votes for poll.');
    console.debug({ error });
    return res.status(400).send();
  }
}
