export async function getPollVotesHandler(req: any, res: any) {
  try {
    const { pollId } = req.params;

    // Add logic to get all votes for a poll.

    return res.status(200).send([]);
  } catch (error) {
    console.log('Error getting votes for poll.');
    console.debug({ error });
    return res.status(400).send();
  }
}
