import { CLOSE_INPUT_FORM, SHOW_INPUT_FORM } from "../Constants/ActionType";

// Khai báo các State cần quản lý
let initialstate = {
  isShowInputForm: false,
};

// Khai báo reducer
export let formReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SHOW_INPUT_FORM:
      return {
        ...state,
        isShowInputForm: true,
      };

    case CLOSE_INPUT_FORM:
      return {
        ...state,
        isShowInputForm: false,
      };

    default:
      return { ...state };
  }
};
