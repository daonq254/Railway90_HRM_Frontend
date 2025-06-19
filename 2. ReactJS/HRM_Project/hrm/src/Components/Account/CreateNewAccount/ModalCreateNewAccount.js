import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import InputForm from "./InputForm";
import { useSelector } from "react-redux";

function ModalCreateNewAccount(props) {
  let {
    // showForm,
    onHandleCloseModal,
    onHandleCreateNewAccount,
    listDepartment,
    listPosition,
  } = props;
  // Khai báo hook useSelector: hỗ trợ trong việc kết nối lên store redux để lấy state về sử dụng
  let stateRedux = useSelector((state) => state);
  let showForm = stateRedux.formReducer.showForm;

  // Khai báo hàm xử lý sự kiện khi nhấn nút Close
  let handleCloseModal = () => {
    onHandleCloseModal();
  };
  return (
    <>
      <Modal isOpen={showForm}>
        <ModalHeader>
          <h3>Create New Account</h3>
        </ModalHeader>
        <ModalBody>
          <InputForm
            onHandleCreateNewAccount={onHandleCreateNewAccount}
            listDepartment={listDepartment}
            listPosition={listPosition}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleCloseModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalCreateNewAccount;
