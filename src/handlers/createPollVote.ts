export async function createPollHandler(req: any, res: any) {
  try {
    const { pollId } = req.params;

    // Add logic to create the poll vote.

    return res.status(201).send({});
  } catch (error) {
    console.log('Error creating poll vote.');
    console.debug({ error });
    return res.status(400).send();
  }
}
