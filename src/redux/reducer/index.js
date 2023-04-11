import { teacherReducer } from "./teacherReducer";
import { groupReducer } from "./groupReducer";
import { studentReducer } from "./studentReducer";
import { combineReducers } from "redux";

export default combineReducers({
  teachers: teacherReducer,
  groups: groupReducer,
  students: studentReducer,
});
