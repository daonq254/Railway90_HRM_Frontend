import {
  ADD_ACCOUNT,
  DELETE_ACCOUNT,
  GETALL_ACCOUNT,
  UPDATE_ACCOUNT,
} from "../Constants/ActionType";

// Khai báo các State cần quản lý
let initialstate = {
  listAccount: [],
  // accountABC: "abc",
};

// Khai báo reducer
export let accountReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      let accountNew = action.account;
      //   console.log("accountNew: ", accountNew);
      return {
        ...state,
        listAccount: [...state.listAccount, accountNew],
      };

    case DELETE_ACCOUNT:
      let id_del = action.id;
      return {
        ...state,
        listAccount: state.listAccount.filter(
          (account) => account.id !== id_del
        ),
      };

    case UPDATE_ACCOUNT:
      let accountUpdate = action.account;
      return {
        ...state,
        listAccount: state.listAccount.map((account) =>
          account.id === accountUpdate.id ? accountUpdate : account
        ),
      };

    case GETALL_ACCOUNT:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};
