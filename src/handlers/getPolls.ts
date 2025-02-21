import { getPolls } from '../services/poll';
import { getPollOptions } from '../services/pollOption';
import { formatPoll } from '../utils/format';

export async function getPollsHandler(req: any, res: any) {
  try {
    const polls = await getPolls();
    const pollOptions = await getPollOptions(polls);

    const formattedPolls = polls.map((poll) => formatPoll(poll, pollOptions));

    return res.status(200).send(formattedPolls);
  } catch (error) {
    console.log('Error getting polls.');
    console.debug({ error });
    return res.status(400).send();
  }
}
