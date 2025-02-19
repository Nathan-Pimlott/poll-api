export async function getPollsHandler(req: any, res: any) {
  try {
    // Add logic to get all polls.

    return res.status(200).send([]);
  } catch (error) {
    console.log('Error getting polls.');
    console.debug({ error });
    return res.status(400).send();
  }
}
