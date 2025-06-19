import { CLOSE_INPUT_FORM, SHOW_INPUT_FORM } from "../Constants/ActionType";

// export let actionShowInputForm = {
//   type: SHOW_INPUT_FORM,
// };

// export let actionCloseInputForm = {
//   type: CLOSE_INPUT_FORM,
// };

export let actionShowInputForm = () => {
  return { type: SHOW_INPUT_FORM };
};

export let actionCloseInputForm = () => {
  return { type: CLOSE_INPUT_FORM };
};
