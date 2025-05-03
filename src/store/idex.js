import { createStore } from "redux";
import { oneCourseReducer } from "./oneCourseReducer";

export const store = createStore(oneCourseReducer);
