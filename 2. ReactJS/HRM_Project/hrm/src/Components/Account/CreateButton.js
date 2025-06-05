import React from "react";
import { Button } from "reactstrap";

function CreateButton(props) {
  let { onHandleCreateButtuon } = props;
  // Hàm xử lý sự kiện khi nhấn nút Create New Account
  let handelCreateNewButton = () => {
    onHandleCreateButtuon();
  };
  return (
    <>
      <Button color="primary" onClick={handelCreateNewButton}>
        Create New Account
      </Button>
    </>
  );
}

export default CreateButton;
