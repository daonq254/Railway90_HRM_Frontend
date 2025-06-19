import { CLOSE_INPUT_FORM, SHOW_INPUT_FORM } from "../Constant/ActionType";

export let actionShowInputForm = () => {
  return { type: SHOW_INPUT_FORM };
};

export let actionCloseInputForm = () => {
  return { type: CLOSE_INPUT_FORM };
};
