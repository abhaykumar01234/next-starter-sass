import { TICK } from "../types";

//Initializes clock on server
export const serverRenderClock = () => (dispatch) => {
  dispatch({
    type: TICK,
    payload: { light: false, ts: Date.now() },
  });
};

// Starts Clock on client
export const startClock = () => (dispatch) => {
  setInterval(() => {
    dispatch({ type: TICK, payload: { light: true, ts: Date.now() } });
  }, 1000);
};
