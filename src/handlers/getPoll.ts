export async function getPollHandler(req: any, res: any) {
  try {
    const { pollId } = req.params;

    // Add logic to get the poll.

    return res.status(200).send({});
  } catch (error) {
    console.log('Error getting poll.');
    console.debug({ error });
    return res.status(400).send();
  }
}
