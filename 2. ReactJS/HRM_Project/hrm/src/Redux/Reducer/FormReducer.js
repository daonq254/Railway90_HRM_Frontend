import { CLOSE_INPUT_FORM, SHOW_INPUT_FORM } from "../Constant/ActionType";

// Khai báo các State cần quản lý
let initialstate = {
  showForm: false,
};

// Khai báo reducer
export let formReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SHOW_INPUT_FORM:
      return {
        ...state,
        showForm: true,
      };

    case CLOSE_INPUT_FORM:
      return {
        ...state,
        showForm: false,
      };

    default:
      return { ...state };
  }
};
