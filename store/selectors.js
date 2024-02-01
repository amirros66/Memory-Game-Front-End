export const selectIsGameReady = (reduxState) => reduxState.game.users;

export const selectActiveGameID = (reduxState) => reduxState.game.game_id;

export const selectDisplaySequences = (reduxState) =>
  reduxState.game.display_sequences;

export const selectResults = (reduxState) => reduxState.game.results;

export const selectLoading = (reduxState) => reduxState.game.loading;

export const selectFinalResults = (reduxState) => reduxState.game.finalResults;
