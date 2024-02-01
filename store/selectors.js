export const selectIsGameReady = (reduxState) => reduxState.game.users;

export const selectActiveGameID = (reduxState) => reduxState.game.game_id;

export const selectDisplaySequences = (reduxState) =>
  reduxState.game.display_sequences;

export const selectUserId = (reduxState) => reduxState.game.user_id;

export const selectDisplaySequencesById = (reduxState) =>
  reduxState.game.display_sequences.id;
