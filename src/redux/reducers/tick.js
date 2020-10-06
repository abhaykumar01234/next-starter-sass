import { TICK } from "../types";

const initialTimerState = {
  light: false,
  lastUpdate: 0,
};

const timeReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      };
    default:
      return state;
  }
};

export default timeReducer;
