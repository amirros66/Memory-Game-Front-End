import axios from "axios";
import { API_BASE_URL } from "../.env";
import { setDisplaySequences } from "./slice";

console.log("API_BASE_URL:", API_BASE_URL);

export const getDisplaySequencesThunk = (game_id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/display-sequences?game_id=${game_id}`
      );
      const display_sequences = response.data;
      dispatch(setDisplaySequences(display_sequences));
      console.log("Display Sequences:", display_sequences);
    } catch (error) {
      console.log("Error:", error);
    }
  };
};
