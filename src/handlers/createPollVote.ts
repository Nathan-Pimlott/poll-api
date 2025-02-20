import { createPollVote } from '../services/pollVotes';

export async function createPollVoteHandler(req: any, res: any) {
  try {
    const { pollId, optionId } = req.body;

    await createPollVote(pollId, optionId);

    return res.status(201).send();
  } catch (error) {
    console.log('Error creating poll vote.');
    console.debug({ error });
    return res.status(400).send('Failed to create poll vote.');
  }
}
