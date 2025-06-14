import React from "react";
import { useParams } from "react-router-dom";

function AccountDetail(props) {
  let param = useParams();
  let accountId = param.idParam;
  //   console.log("accountId: ", accountId);

  return (
    <div>
      <h3>Thông tin chi tiết Account có ID: {accountId}</h3>
    </div>
  );
}

export default AccountDetail;
