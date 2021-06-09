export const actionsType = {
  ON_MESSAGE: 'ON_MESSAGE',
  ON_RESPONSE: 'ON_RESPONSE',
  INIT: "INIT"
};

export const SendMessage = (content, key) => ({
  type: actionsType.ON_MESSAGE,
  payload: { content, key }
});

export const SendResponse = (message, key) => ({
  type: actionsType.ON_RESPONSE,
  payload: { message, key }
});

export const Init = () => ({
  type: actionsType.INIT});
