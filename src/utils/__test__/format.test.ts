import { formatPoll } from '../format';

const validPoll = {
  id: '123',
  title: 'Test question',
  createdDate: Date(),
  status: 'ACTIVE',
};
const validOptions = [
  { id: '123', pollId: '123', title: 'Yes' },
  { id: '234', pollId: '123', title: 'No' },
];

const validFormattedPoll = {
  id: '123',
  title: 'Test question',
  createdDate: Date(),
  status: 'ACTIVE',
  options: [
    { id: '123', title: 'Yes' },
    { id: '234', title: 'No' },
  ],
};

describe('Format', () => {
  describe('formatPoll', () => {
    it('Should correctly handle a valid unformatted poll.', () => {
      expect(formatPoll(validPoll, validOptions)).toMatchObject(
        validFormattedPoll
      );
    });
    it('Should handle no options.', () => {
      expect(formatPoll(validPoll, [])).toMatchObject({
        ...validPoll,
        options: [],
      });
    });
  });
});
