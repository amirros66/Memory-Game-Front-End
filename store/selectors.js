export const selectIsGameReady = (reduxState) => reduxState.game.users;

export const selectActiveGameID = (reduxState) => reduxState.game.game_id;

export const selectDisplaySequences = (reduxState) =>
  reduxState.game.display_sequences;
