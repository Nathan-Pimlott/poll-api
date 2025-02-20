import { v4 as uuid } from 'uuid';

import { query } from '../utils/db';
import { IPoll, IPollToCreate } from '../utils/types';

export async function getPolls() {
  const pollQueryResponse: IPoll[] = await query(`
      select * from poll;
    `);

  if (!pollQueryResponse) {
    throw Error('Unable to get polls.');
  }

  return pollQueryResponse;
}

export async function getPollById(pollId: string) {
  const pollQueryResponse: IPoll[] = await query(`
    select * from poll where id = "${pollId}";
  `);

  if (!pollQueryResponse) {
    throw Error('Unable to get polls.');
  }

  return pollQueryResponse[0];
}

export async function createPoll(poll: IPollToCreate) {
  const pollId = uuid();
  const createPollResponse = await query(`
    insert into poll(id, title, createdDate, status) 
    values(
      "${pollId}", "${poll.title}", current_timestamp(), "ACTIVE"
    );
  `);

  if (poll.options) {
    await Promise.all(
      poll.options?.map(async (option) => {
        await query(`
        insert into poll_option(id, pollId, title) values(
          uuid(), "${pollId}", "${option.title}"
        );
      `);
      })
    );
  }

  if (!createPollResponse) {
    throw Error('Unable to get polls.');
  }

  return true;
}
