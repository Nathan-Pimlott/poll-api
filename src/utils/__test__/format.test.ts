import { formatPolls } from '../format';

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

const validFormattedPoll = [
  {
    id: '123',
    title: 'Test question',
    createdDate: Date(),
    status: 'ACTIVE',
    options: [
      { id: '123', title: 'Yes' },
      { id: '234', title: 'No' },
    ],
  },
];

describe('Format', () => {
  describe('formatPolls', () => {
    it('Should correctly handle a valid unformatted poll.', () => {
      expect(formatPolls([validPoll], validOptions)).toMatchObject(
        validFormattedPoll
      );
    });
    it('Should handle no options.', () => {
      expect(formatPolls([validPoll], [])).toMatchObject([
        {
          ...validPoll,
          options: [],
        },
      ]);
    });
    it('Should handle no polls.', () => {
      expect(formatPolls([], [])).toMatchObject([]);
    });
  });
});
