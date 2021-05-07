export const actionsType = {
  ON_MESSAGE: 'ON_MESSAGE'
};

export const SendMessage = (content, key) => ({
  type: actionsType.ON_MESSAGE,
  payload: { content, key }
});
