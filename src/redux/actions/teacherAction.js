import { ADDTEACHER, DELETETEACHER, EDITTEACHER } from "../types";

export const editTeacherAction = (data) => {
  return {
    type: EDITTEACHER,
    data,
  };
};

export const addTeacherAction = (data) => {
  return {
    type: ADDTEACHER,
    data,
  };
};

export const deleteTeacherAction = (data) => {
  return {
    type: DELETETEACHER,
    data,
  };
};
