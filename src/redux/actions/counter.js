import { INCREMENT, DECREMENT, RESET } from "../types";

export const incrementCount = () => ({ type: INCREMENT });
export const decrementCount = () => ({ type: DECREMENT });
export const resetCount = () => ({ type: RESET });
