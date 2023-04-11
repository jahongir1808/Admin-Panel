import { v4 as uuidv4 } from "uuid";
import { TEACHERS } from "../../const";
import {
  ADDTEACHER,
  DELETETEACHER,
  EDITTEACHER,
  // FILTERALLTEACHERS,
  // FILTERFIELDTEACHER,
} from "../types";

const initialState = JSON.parse(localStorage.getItem(TEACHERS)) || [];

export const teacherReducer = (state = initialState, action) => {
  let newState = [...state];
  switch (action.type) {
    case ADDTEACHER:
      newState.push({ ...action.data, groups: [], id: uuidv4() });
      break;
    case EDITTEACHER:
      newState = newState.map((t) => {
        if (t.id === action.data.id) {
          return { ...t, ...action.data };
        } else {
          return t;
        }
      });
      break;
    case DELETETEACHER:
      newState = newState.filter((t) => t.id !== action.data);
      break;
    // case FILTERALLTEACHERS:
    //   [{ ...newState }];
    //   break;
    // case FILTERFIELDTEACHER:
    //   console.log(action.data);
    //   // newState = newState.filter((t) => {
    //   //   if(t.field === action.field) {
    //   //   }
    //   // }
    //   break;
    default:
  }
  localStorage.setItem(TEACHERS, JSON.stringify(newState));
  return newState;
};
