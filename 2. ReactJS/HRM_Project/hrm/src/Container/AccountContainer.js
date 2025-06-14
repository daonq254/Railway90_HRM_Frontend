import React, { useEffect, useState } from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import Axios from "axios";
import { addAccountNewAPI, getListAccount } from "../API/AccountApi";
import { getListDepartmentAPI } from "../API/DepartmentAPI";
import { getListPositionAPI } from "../API/PositionAPI";

function AccountContainer(props) {
  // Khai baos state showForm quản lý việc ẩn hiện của modal
  let [showForm, setShowForm] = useState(false);
  // State lưu dữ danh sách Account
  let [listAccount, setListAccount] = useState([]);
  // Khai báo State để quản lý danh sách Account trên hệ thống
  let [listDepartment, setListDepartment] = useState([]);
  // Khai báo State để quản lý danh sách Account trên hệ thống
  let [listPosition, setListPosition] = useState([]);

  // Khai báo hàm callback khi người dùng nhấn vào nút Create New Account
  let onHandleCreateButtuon = () => {
    setShowForm(true);
  };

  // Hàm Callback xử lý khi nhấn nút Close ở Modal
  let onHandleCloseModal = () => {
    setShowForm(false);
  };
  //
  let fetchListAccount = () => {
    getListAccount().then((listAccountAPI) => {
      setListAccount(listAccountAPI);
    });
  };

  // Hàm Callback xử lý thêm mới Account
  let onHandleCreateNewAccount = (accountNew) => {
    // console.log("accountNew:", accountNew);
    // setListAccount(listAccount.push(accountNew));

    // Lưu dữ liệu ở LocalStorage
    // localStorage.setItem("listAccount", JSON.stringify(listAccount));
    // Lưu dữ liệu API
    let AccountNew = {
      email: accountNew.email,
      username: accountNew.username,
      fullname: accountNew.fullname,
      departmentId: accountNew.department,
      positionId: accountNew.position,
    };
    console.log("AccountNew: ", AccountNew);

    addAccountNewAPI(AccountNew).then((response) => {
      fetchListAccount();
    });

    setShowForm(false);
  };

  // Load dữ liệu từ localStorage
  useEffect(() => {
    // if (localStorage && localStorage.getItem("listAccount")) {
    //   let listAccount_LocalStorage = JSON.parse(
    //     localStorage.getItem("listAccount")
    //   );
    //   // console.log("listAccount_LocalStorage: ", listAccount_LocalStorage);
    //   setListAccount(listAccount_LocalStorage);
    // }
    // Load dữ liệu từ API cho Account
    // Axios.get("http://localhost:8080/api/v1/accounts").then((response) => {
    //   // console.log("response: ", response.data);
    //   let listAccount_API = response.data;
    //   setListAccount(listAccount_API);
    // });
    fetchListAccount();
    // Load dữ liệu từ API cho Department
    // Axios.get("http://localhost:8080/api/v1/departments").then((response) => {
    //   setListDepartment(response.data);
    // });
    getListDepartmentAPI().then((listDepartmentAPI) => {
      setListDepartment(listDepartmentAPI);
    });
    // Load dữ liệu từ API cho Position
    // Axios.get("http://localhost:8080/api/v1/possitions").then((response) => {
    //   setListPosition(response.data);
    // });

    getListPositionAPI().then((listPositionAPI) => {
      setListPosition(listPositionAPI);
    });
    //
  }, []);
  return (
    <>
      <CreateButton onHandleCreateButtuon={onHandleCreateButtuon} />
      <ModalCreateNewAccount
        showForm={showForm}
        onHandleCloseModal={onHandleCloseModal}
        onHandleCreateNewAccount={onHandleCreateNewAccount}
        listDepartment={listDepartment}
        listPosition={listPosition}
      />
      <ResultForm listAccount={listAccount} />
    </>
  );
}

export default AccountContainer;
