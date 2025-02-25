import _ from 'lodash';

import { createPollSchema } from '../schema';

const validPoll = {
  title: 'Hello World',
  options: ['Hello world', 'Hello World 2'],
};

describe('Testing schemas', () => {
  describe('Testing createPollSchema', () => {
    it('Should accept a valid poll object', async () => {
      const res = await createPollSchema.safeParseAsync({ body: validPoll });
      expect(res.success).toBe(true);
    });
    it('Should fail if there is less than 2 options', async () => {
      const res = await createPollSchema.safeParseAsync({
        body: { ...validPoll, options: ['Hello world'] },
      });
      expect(res.success).toBe(false);
    });
    it('Should fail if there is more than 7 options', async () => {
      const res = await createPollSchema.safeParseAsync({
        body: {
          ...validPoll,
          options: _.times(8, (idx) => `Hello World ${idx}`),
        },
      });
      expect(res.success).toBe(false);
    });
    it('Should fail if there is no poll name', async () => {
      const res = await createPollSchema.safeParseAsync({
        body: {
          options: validPoll.options,
        },
      });
      expect(res.success).toBe(false);
    });
  });
});
