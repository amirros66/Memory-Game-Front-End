import axios from "axios";
import { API_BASE_URL } from "../.env";
import { setDisplaySequences } from "./slice";

export const getDisplaySequencesThunk = (game_id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/display-sequences?game_id=${game_id}`
      );
      dispatch(setDisplaySequences(response.data));
      console.log("Response data:", response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };
};
