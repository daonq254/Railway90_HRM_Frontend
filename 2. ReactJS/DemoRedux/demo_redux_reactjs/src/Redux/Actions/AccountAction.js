import {
  ADD_ACCOUNT,
  DELETE_ACCOUNT,
  UPDATE_ACCOUNT,
} from "../Constants/ActionType";
// export let actionAddAccount1 = {
//   type: ADD_ACCOUNT,
//   account: {
//     id: 1,
//     username: "daonq1",
//     fullname: "Nguyen Dao 1",
//   },
// };

// export let actionAddAccount2 = {
//   type: ADD_ACCOUNT,
//   account: {
//     id: 2,
//     username: "daonq2",
//     fullname: "Nguyen Dao 2",
//   },
// };

export let actionAddAccount = (accountInput) => {
  return {
    type: ADD_ACCOUNT,
    account: accountInput,
  };
};

export let actionDeleteAccount = (idInput) => {
  return {
    type: DELETE_ACCOUNT,
    id: idInput,
  };
};

export let actionUpdateAccount = (accountInput) => {
  return {
    type: UPDATE_ACCOUNT,
    account: accountInput,
  };
};
