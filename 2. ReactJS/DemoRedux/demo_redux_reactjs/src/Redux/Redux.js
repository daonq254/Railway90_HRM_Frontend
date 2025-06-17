// console.log("DEMO REDUX!!");
import { createStore } from "redux";
// Khai báo các State cần quản lý
let initialstate = {
  isShowInputForm: false,
  listAccount: [],
  listDepartment: [],
  //   ...
};

// Khai báo reducer
let reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "SHOW_INPUT_FORM":
      return {
        ...state,
        isShowInputForm: true,
      };

    case "CLOSE_INPUT_FORM":
      return {
        ...state,
        isShowInputForm: false,
      };

    case "ADD_ACCOUNT":
      let accountNew = action.account;
      //   console.log("accountNew: ", accountNew);
      return {
        ...state,
        listAccount: [...state.listAccount, accountNew],
      };

    case "DELETE_ACCOUNT":
      let id_del = action.id;
      return {
        ...state,
        listAccount: state.listAccount.filter(
          (account) => account.id !== id_del
        ),
      };

    case "UPDATE_ACCOUNT":
      let accountUpdate = action.account;
      return {
        ...state,
        listAccount: state.listAccount.map((account) =>
          account.id === accountUpdate.id ? accountUpdate : account
        ),
      };

    case "GET_ALL_ACCOUNT":
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

// Khai báo Store Redux, nhận reducer làm tham số đầu vào
let store = createStore(reducer);

// Khai báo mô phỏng hiển thị form thêm mới
// Khai báo 1 Action: SHOW_INPUT_FORM
let actionShowInputForm = {
  type: "SHOW_INPUT_FORM",
};
//
console.log("Giá trị State ban đầu: ", store.getState());

// Chuyển Action vào trong reducer để xử lý
store.dispatch(actionShowInputForm);
console.log(
  "Giá trị State sau khi dispath action: actionShowInputForm",
  store.getState()
);

//  Khai báo mô phỏng đóng form nhập liệu thêm mới
let actionCloseInputForm = {
  type: "CLOSE_INPUT_FORM",
};
store.dispatch(actionCloseInputForm);
console.log(
  "Giá trị State sau khi dispath action: actionCloseInputForm",
  store.getState()
);

// Khai báo mô phỏng việc thêm 1 Account mới vào State ListAccount
let actionAddAccount1 = {
  type: "ADD_ACCOUNT",
  account: {
    id: 1,
    username: "daonq1",
    fullname: "Nguyen Dao 1",
  },
};

let actionAddAccount2 = {
  type: "ADD_ACCOUNT",
  account: {
    id: 2,
    username: "daonq2",
    fullname: "Nguyen Dao 2",
  },
};
store.dispatch(actionAddAccount1);
store.dispatch(actionAddAccount2);
console.log(
  "Giá trị State sau khi dispath action: actionAddAccount",
  store.getState()
);
// Khai báo mô phỏng xóa Account
let actionDeleteAccount = {
  type: "DELETE_ACCOUNT",
  id: 1,
};
store.dispatch(actionDeleteAccount);
console.log(
  "Giá trị State sau khi dispath action: actionDeleteAccount",
  store.getState()
);
// Khai báo mô phỏng update Account
let actionUpdateAccount = {
  type: "UPDATE_ACCOUNT",
  account: {
    id: 2,
    usename: "daonq UPDATE",
    fullname: "Nguyen Dao UPDATE",
  },
};
store.dispatch(actionUpdateAccount);
console.log(
  "Giá trị State sau khi dispath action: actionUpdateAccount",
  store.getState()
);
