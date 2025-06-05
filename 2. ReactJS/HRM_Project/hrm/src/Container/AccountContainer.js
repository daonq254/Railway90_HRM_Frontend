import React, { useState } from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";

function AccountContainer(props) {
  // Khai baos state showForm quản lý việc ẩn hiện của modal
  let [showForm, setShowForm] = useState(false);
  // State lưu dữ danh sách Account
  let [listAccount, setListAccount] = useState([]);

  // Khai báo hàm callback khi người dùng nhấn vào nút Create New Account
  let onHandleCreateButtuon = () => {
    setShowForm(true);
  };

  // Hàm Callback xử lý khi nhấn nút Close ở Modal
  let onHandleCloseModal = () => {
    setShowForm(false);
  };
  // Hàm Callback xử lý thêm mới Account
  let onHandleCreateNewAccount = (accountNew) => {
    // console.log("accountNew:", accountNew);
    setListAccount(listAccount.push(accountNew));

    // Lưu dữ liệu ở LocalStorage
    localStorage.setItem("listAccount", JSON.stringify(listAccount));

    setShowForm(false);
  };
  return (
    <>
      <CreateButton onHandleCreateButtuon={onHandleCreateButtuon} />
      <ModalCreateNewAccount
        showForm={showForm}
        onHandleCloseModal={onHandleCloseModal}
        onHandleCreateNewAccount={onHandleCreateNewAccount}
      />
      <ResultForm />
    </>
  );
}

export default AccountContainer;
