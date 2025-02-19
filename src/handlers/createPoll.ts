export async function createPollHandler(req: any, res: any) {
  try {
    const poll = req.body;

    // Add logic to create the poll.

    return res.status(201).send({});
  } catch (error) {
    console.log('Error creating poll.');
    console.debug({ error });
    return res.status(400).send();
  }
}
