import store from '../store';
import { sayHello } from '../components/home/actions/all-bots';
import { SendMessage, Init } from '../components/home/actions';

beforeEach(() => {
  store.dispatch(Init());
});

test('SayHello', () => {
  // Expect the message list to be empty
  const stateBefore = store.getState().chatBot;
  expect(stateBefore.message).toBe(undefined);

  // Calling the function
  sayHello();

  // Expect that all messages contains the word "Hello"
  const { messages } = store.getState().chatBot;
  messages.forEach((message) => {
    expect(message.content).toMatch('Hello');
  });
});

test('sendMessage', () => {
  // Expect the message list to be empty
  const stateBefore = store.getState().chatBot;
  expect(stateBefore.message).toBe(undefined);

  // Calling dispatch
  store.dispatch(SendMessage('test'));

  // Expect the first message is from USER and content is equal to "test"
  const { messages } = store.getState().chatBot;
  expect(messages[0].content).toBe('test');
  expect(messages[0].key).toBe('USER');
});
