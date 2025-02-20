import { Express } from 'express';
import { healthHandler } from '../handlers/health';
import { middleware } from './middleware';
import { getPollsHandler } from '../handlers/getPolls';
import { getPollHandler } from '../handlers/getPoll';
import { getPollVotesHandler } from '../handlers/getPollVotes';
import { createPollHandler } from '../handlers/createPoll';
import { createPollVoteHandler } from '../handlers/createPollVote';

export function routes(app: Express) {
  middleware(app);
  app.get('/health', healthHandler);
  app.get('/polls', getPollsHandler);
  app.get('/poll/:pollId', getPollHandler);
  app.get('/poll/:pollId/votes', getPollVotesHandler);
  app.post('/vote', createPollVoteHandler);
  app.post('/poll', createPollHandler);
}
