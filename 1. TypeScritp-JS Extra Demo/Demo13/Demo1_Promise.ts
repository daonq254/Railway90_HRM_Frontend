// Check Email
function callAPICheckEmail() {
  let promise = new Promise(function (resolve, reject) {
    console.log("-- Step1: Call API Check Email!!");
    // $.ajax({
    //     url: 'http://localhost:8080/api/v1/checkEmail/',
    //     type: 'GET',
    //     contentType: "application/json",
    //     success: function(data,Status, xhr) {
    let data = false; // Email tồn tại
    if (data) {
      reject("Email này đã tồn tại trên hệ thống!!");
    } else {
      resolve("Check Email OK!");
    }

    //     },
    //     error(jqXHR, textStatus, errorThrown) {
    //         alert("Error when loading data");
    //         console.log(jqXHR);
    //         console.log(textStatus);
    //         console.log(errorThrown);
    //     }
    // });
  });

  return promise;
}

// Check Username
function callAPICheckUsername() {
  let promise = new Promise(function (resolve, reject) {
    console.log("-- Step2: Call API Check Username!!");
    // $.ajax({
    //     url: 'http://localhost:8080/api/v1/checkUsername/',
    //     type: 'GET',
    //     contentType: "application/json",
    //     success: function(data,Status, xhr) {
    let data = false; // Username tồn tại
    if (data) {
      reject("Username này đã tồn tại trên hệ thống!!");
    } else {
      resolve("Check Username OK!");
    }

    //     },
    //     error(jqXHR, textStatus, errorThrown) {
    //         alert("Error when loading data");
    //         console.log(jqXHR);
    //         console.log(textStatus);
    //         console.log(errorThrown);
    //     }
    // });
  });

  return promise;
}

// Create New Account
function callAPICreateNewAccount() {
  let promise = new Promise(function (resolve, reject) {
    console.log("-- Step3: CreateNewAccount!!");
    // $.ajax({
    //     url: 'http://localhost:8080/api/v1/createNewAccount/',
    //     type: 'GET',
    //     contentType: "application/json",
    //     success: function(data,Status, xhr) {
    let status = "success"; // Username tồn tại
    if (status == "success") {
      resolve("Tạo Account thành công");
    } else {
      resolve("Tạo không thành công");
    }

    //     },
    //     error(jqXHR, textStatus, errorThrown) {
    //         alert("Error when loading data");
    //         console.log(jqXHR);
    //         console.log(textStatus);
    //         console.log(errorThrown);
    //     }
    // });
  });

  return promise;
}

// Sử dụng
// callAPICheckEmail();
// callAPICheckUsername();
// callAPICreateNewAccount();
callAPICheckEmail()
  .then(function (msg) {
    console.log(msg);

    return callAPICheckUsername();
  })
  .then(function (msg) {
    console.log(msg);
    return callAPICreateNewAccount();
  })
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (msgError) {
    console.log(msgError);
  });
