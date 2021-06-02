import { handleBot1 } from './bot-1';

it('cat', () => {
  const data = await user.handleBot1('cat');
  expect(data).toBeTruthy();
});
