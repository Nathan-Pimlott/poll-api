import { getPollById } from '../services/poll';
import { getPollOptionsByPollId } from '../services/pollOption';
import { getPollVotesByPollId } from '../services/pollVotes';
import { formatPoll } from '../utils/format';

export async function getPollHandler(req: any, res: any) {
  try {
    const { pollId } = req.params;

    const poll = await getPollById(pollId);
    const pollOptions = await getPollOptionsByPollId(pollId);
    const pollVotes = await getPollVotesByPollId(pollId);

    const formattedPoll = formatPoll(poll, pollOptions, pollVotes);

    return res.status(200).send(formattedPoll);
  } catch (error) {
    console.log('Error getting poll.');
    console.debug({ error });
    return res.status(400).send();
  }
}
