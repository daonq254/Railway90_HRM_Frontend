// Check Email
async function callAPICheckEmail() {
  console.log("-- Step1: Call API Check Email!!");
  // $.ajax({
  //     url: 'http://localhost:8080/api/v1/checkEmail/',
  //     type: 'GET',
  //     contentType: "application/json",
  //     success: function(data,Status, xhr) {
  let data = false;
  return data;
  //     },
  //     error(jqXHR, textStatus, errorThrown) {
  //         alert("Error when loading data");
  //         console.log(jqXHR);
  //         console.log(textStatus);
  //         console.log(errorThrown);
  //     }
  // });
}

// Check Username
async function callAPICheckUsername() {
  console.log("-- Step1: Call API Check Username!!");
  // $.ajax({
  //     url: 'http://localhost:8080/api/v1/checkUsername/',
  //     type: 'GET',
  //     contentType: "application/json",
  //     success: function(data,Status, xhr) {
  let data = false;
  return data;
  //     },
  //     error(jqXHR, textStatus, errorThrown) {
  //         alert("Error when loading data");
  //         console.log(jqXHR);
  //         console.log(textStatus);
  //         console.log(errorThrown);
  //     }
  // });
}
// Create New Account
async function callAPICreateNewAccount() {
  console.log("-- Step1: Call API Create New Account!!");
  // $.ajax({
  //     url: 'http://localhost:8080/api/v1/checkUsername/',
  //     type: 'GET',
  //     contentType: "application/json",
  //     success: function(data,Status, xhr) {
  let data = false;
  return data;
  //     },
  //     error(jqXHR, textStatus, errorThrown) {
  //         alert("Error when loading data");
  //         console.log(jqXHR);
  //         console.log(textStatus);
  //         console.log(errorThrown);
  //     }
  // });
}
// Sử dụng
async function create_New_Account() {
  let resultCheckEmail = await callAPICheckEmail(); // true false
  if (resultCheckEmail) {
    return;
  } else {
    console.log("Check Email OK");
  }

  let resultCheckUsername = await callAPICheckUsername();
  if (resultCheckUsername) {
    return;
  } else {
    console.log("Check Username OK");
  }

  let resultCreateNewAccount = await callAPICreateNewAccount();
  if (resultCreateNewAccount) {
    console.log("Create New Accounts OK");
  } else {
    return;
  }
}
//  Thực hiện gọi hàm
create_New_Account();
