import { query } from '../utils/db';
import { formatPoll } from '../utils/format';
import { IPoll, IPollOption } from '../utils/types';

export async function getPollHandler(req: any, res: any) {
  try {
    const { pollId } = req.params;

    const pollQueryResponse: IPoll = await query(`
      select * from poll where id = "${pollId}";
    `);

    if (!pollQueryResponse) {
      throw Error('Unable to get polls.');
    }

    const optionQueryResponse: IPollOption[] = await query(`
      select * from poll_option where pollId = "${pollId}"
    `);

    if (!optionQueryResponse) {
      throw Error('Unable to get options for poll.');
    }

    const formattedPoll = formatPoll(pollQueryResponse, optionQueryResponse);

    return res.status(200).send(formattedPoll);
  } catch (error) {
    console.log('Error getting poll.');
    console.debug({ error });
    return res.status(400).send();
  }
}
