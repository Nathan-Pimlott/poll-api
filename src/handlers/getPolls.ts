import _ from 'lodash';

import { query } from '../utils/db';
import { formatPolls } from '../utils/format';
import { IPoll, IPollOption } from '../utils/types';

export async function getPollsHandler(req: any, res: any) {
  try {
    const pollQueryResponse: IPoll[] = await query(`
      select * from poll
    `);

    if (!pollQueryResponse) {
      throw Error('Unable to get polls.');
    }

    const pollIds = pollQueryResponse.map((poll) => `"${poll.id}"`);
    const optionQueryResponse: IPollOption[] = await query(`
      select * from poll_option where pollId in (${pollIds.join(',')})
    `);

    if (!optionQueryResponse) {
      throw Error('Unable to get options for poll.');
    }

    const formattedPolls = formatPolls(pollQueryResponse, optionQueryResponse);

    return res.status(200).send(formattedPolls);
  } catch (error) {
    console.log('Error getting polls.');
    console.debug({ error });
    return res.status(400).send();
  }
}
