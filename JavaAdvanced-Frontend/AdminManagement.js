console.log("Account Management");
var listAccount = [];
var listDepartment = [];
var listPosition = [];

// Khai báo biến dùng trong phân trang
var currentPage = 1;
var currentSize = 10;
// Khai báo biến điều khiển sort dữ liệu
var sortField = "id";
var sortDirection = true;
//Hàm hiển thị danh sách Account
getListAccount();
getListDepartment();
getListPosition();

function getListAccount() {
  //   // http://localhost:8080/api/v1/accounts?size=20&sort=id,asc&page=1&search=kỹ thuật
  var v_url = `http://localhost:8080/api/v1/accounts?size=${currentSize}&page=${currentPage}&sort=${sortField},${
    sortDirection ? "asc" : "desc"
  }`;

  var v_search = $("#id_Search").val();
  // console.log("v_search: ", v_search);
  if (v_search) {
    v_url += `&search=${v_search}`;
  }

  // Bước 1: Call API để lấy dữ liệu danh sách Account
  $.ajax({
    type: "GET",
    url: v_url, // 5 bản ghi đầu tiên trong DB
    // data: "data",
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader(
        "Authorization",
        "Basic " +
          btoa(
            localStorage.getItem("username") +
              ":" +
              localStorage.getItem("password")
          )
      );
    },
    success: function (response) {
      // response: dữ liệu nhận được sau khi call API
      console.log("response Account: ", response); //5 bản ghi
      listAccount = response.content;
      $("#result_tb").empty();
      // Bước 2: Đổ dữ liệu vào bảng hiển thị
      for (let index = 0; index < listAccount.length; index++) {
        $("#result_tb").append(
          ` <tr>
                <td>${listAccount[index].id}</td>
                <td>${listAccount[index].email}</td>
                <td>${listAccount[index].username}</td>
                <td>${listAccount[index].fullname}</td>
                <td>${listAccount[index].department}</td>
                <td>${listAccount[index].position}</td>
                <td>${listAccount[index].createDate}</td>
                <td>
                  <button type="button" class="btn btn-warning" onclick="editAcocunt(${index})">Edit</button>
                </td>
                <td>
                  <button type="button" class="btn btn-danger" onclick="deleteAcocunt(${listAccount[index].id})">Delete</button>
                </td>
              </tr>`
        );
      }
      // Hiển thị bảng phân trang

      // Lấy tổng số trang
      var totalPage = response.totalPages; ///3
      pagingTable(totalPage);

      //
    },
  });
}
// Phân trang
function pagingTable(totalPage) {
  $("#pagination_Id").empty();
  // Previous
  if (currentPage > 1) {
    $("#pagination_Id").append(`
      <li class="page-item" onclick=(handlePrevious())>
            <a class="page-link" href="#">Previous</a>
          </li>
      `);
  }

  // 1 2 3
  for (let index = 1; index <= totalPage; index++) {
    if (index == currentPage) {
      $("#pagination_Id").append(`
       <li class="active" onclick=(handleChangePage(${index}))><a href="#">${index}</a></li>
        `);
    } else {
      $("#pagination_Id").append(`
       <li onclick=(handleChangePage(${index}))><a href="#"  >${index}</a></li>
      `);
    }
  }

  // Next
  if (currentPage < totalPage) {
    $("#pagination_Id").append(`
      <li class="page-item" onclick=(handleNext())><a class="page-link" href="#" >Next</a></li>
      `);
  }
}
// Hàm xử lý handleChangePage
function handleChangePage(pageParam) {
  // console.log("pageParam: ", pageParam);
  if (pageParam != currentPage) {
    currentPage = pageParam;
    getListAccount();
  }
}

//
function handlePrevious() {
  currentPage--;
  getListAccount();
}

//
function handleNext() {
  currentPage++;
  getListAccount();
}

// Hàm xử lý Sort dữ liệu

function handleChangeSort(field_param) {
  console.log("log field_param: ", field_param);
  if (sortField != field_param) {
    sortField = field_param;
    sortDirection = true;
  } else {
    sortDirection = !sortDirection;
  }

  getListAccount();
}
// Hàm xử lý Search dữ liệu
$("#id_btn_search").click(function (e) {
  // http://localhost:8080/api/v1/accounts?size=20&sort=id,asc&page=1&search=kỹ thuật
  getListAccount();
});

// Hàm hiển thị phòng ban
function getListDepartment(params) {
  // Call API để lấy danh sách phòng ban
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/api/v1/departments",
    // data: "data",
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader(
        "Authorization",
        "Basic " +
          btoa(
            localStorage.getItem("username") +
              ":" +
              localStorage.getItem("password")
          )
      );
    },
    success: function (response) {
      console.log("response Department: ", response);
      listDepartment = response;
      for (let index = 0; index < listDepartment.length; index++) {
        $("#Department_ID").append(
          `<option value="${listDepartment[index].id}">${listDepartment[index].name}</option>
          `
        );
      }
    },
  });
}

// Hàm hiển thị vị trí position
function getListPosition(params) {
  // Call API để lấy danh sách Position
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/api/v1/positions",
    // data: "data",
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader(
        "Authorization",
        "Basic " +
          btoa(
            localStorage.getItem("username") +
              ":" +
              localStorage.getItem("password")
          )
      );
    },
    success: function (response) {
      console.log("response Position: ", response);
      listPosition = response;
      for (let index = 0; index < listPosition.length; index++) {
        $("#Position_ID").append(
          `<option value="${listPosition[index].id}">${listPosition[index].name}</option>
          `
        );
      }
    },
  });
}

// Thêm mới Account
// function handleClick(params) {
//   alert("Bạn vừa click vào nút Save!!");
// }
$("#save_btn").click(function (e) {
  //  Lấy dữ liệu từ Form nhập liệu
  var v_id = $("#ID_ID").val();
  var v_Email_ID = $("#Email_ID").val();
  var v_Username_ID = $("#Username_ID").val();
  var v_Fullname_ID = $("#Fullname_ID").val();
  var v_Department_ID = $("#Department_ID").val();
  var v_Position_ID = $("#Position_ID").val();
  var v_Cretate_Date_ID = $("#Cretate_Date_ID").val();

  // console.log("v_id: ", v_id);
  // console.log("v_Email_ID: ", v_Email_ID);
  // console.log("v_Username_ID: ", v_Username_ID);
  // console.log("v_Fullname_ID: ", v_Fullname_ID);
  // console.log("v_Department_ID: ", v_Department_ID);
  // console.log("v_Position_ID: ", v_Position_ID);
  // console.log("v_Cretate_Date_ID: ", v_Cretate_Date_ID);
  //
  var accountNew = {
    email: v_Email_ID,
    username: v_Username_ID,
    fullname: v_Fullname_ID,
    departmentId: v_Department_ID, // Giám đốc ==> 2
    positionId: v_Position_ID,
  };

  // Call API về BE để tạo mới Account
  $.ajax({
    type: "POST",
    url: "http://localhost:8080/api/v1/accounts",
    data: JSON.stringify(accountNew),
    contentType: "application/json; charset=UTF-8",
    beforeSend: function (xhr) {
      xhr.setRequestHeader(
        "Authorization",
        "Basic " +
          btoa(
            localStorage.getItem("username") +
              ":" +
              localStorage.getItem("password")
          )
      );
    },
    success: function (response) {
      //
      getListAccount();
      alert("Create Successfully!!");
    },
  });
});

// Xóa Account
function deleteAcocunt(idAccount) {
  // confirm("Bạn có chắc chắn muốn xóa Account này không??");
  // console.log("idAccount: ", idAccount);
  $.ajax({
    type: "DELETE",
    url: "http://localhost:8080/api/v1/accounts/" + idAccount,
    data: "data",
    beforeSend: function (xhr) {
      xhr.setRequestHeader(
        "Authorization",
        "Basic " +
          btoa(
            localStorage.getItem("username") +
              ":" +
              localStorage.getItem("password")
          )
      );
    },
    // dataType: "dataType",
    success: function (response) {
      getListAccount();
    },
  });
}

// Hàm Edit Account

function editAcocunt(index_account) {
  console.log("index_account: ", index_account);
  console.log("Deaprtment: ", listAccount[index_account].department);
  // id?
  var v_DepId;
  for (let index = 0; index < listDepartment.length; index++) {
    if (listDepartment[index].name === listAccount[index_account].department) {
      v_DepId = listDepartment[index].id;
    }
  }

  // Tìm ra id của Position
  var v_PosId;
  for (let index = 0; index < listPosition.length; index++) {
    if (listPosition[index].name === listAccount[index_account].position) {
      v_PosId = listPosition[index].id;
    }
  }

  $("#ID_ID").val(listAccount[index_account].id);
  $("#Email_ID").val(listAccount[index_account].email);
  $("#Username_ID").val(listAccount[index_account].username);
  $("#Fullname_ID").val(listAccount[index_account].fullname);
  $("#Department_ID").val(v_DepId);
  $("#Position_ID").val(v_PosId);
  $("#Cretate_Date_ID").val(listAccount[index_account].createDate);
}

//  Hàm xử lý nút Update
$("#update_btn").click(function (e) {
  // alert("Update");
  var v_ID_ID = $("#ID_ID").val();
  var v_Fullname_ID = $("#Fullname_ID").val();
  var v_Department_ID = $("#Department_ID").val();
  var v_Position_ID = $("#Position_ID").val();

  var account_update = {
    fullname: v_Fullname_ID,
    departmentId: v_Department_ID,
    positionId: v_Position_ID,
  };

  // console.log("v_ID_ID: ", v_ID_ID);
  // console.log("account_update: ", account_update);
  $.ajax({
    type: "PUT",
    // url: "http://localhost:8080/api/v1/accounts/" + v_ID_ID,
    url: `http://localhost:8080/api/v1/accounts/${v_ID_ID}`,
    data: JSON.stringify(account_update),
    contentType: "application/json; charset=UTF-8",
    beforeSend: function (xhr) {
      xhr.setRequestHeader(
        "Authorization",
        "Basic " +
          btoa(
            localStorage.getItem("username") +
              ":" +
              localStorage.getItem("password")
          )
      );
    },
    success: function (response) {
      getListAccount();
    },
  });
});

// Xử lý nút Login trên trang Login
$("#btn_Login_id").click(function (e) {
  // Bước 1: Lấy dữ liệu người dùng nhập: Username, Password
  var v_username = $("#Email_Login_id").val();
  var v_password = $("#Password_Login_id").val();

  // console.log("v_username: ", v_username);
  // console.log("v_password: ", v_password);
  // Bước 2: Call API Login
  //
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/api/v1/login",
    // data: "data",
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader(
        "Authorization",
        "Basic " + btoa(v_username + ":" + v_password)
      );
    },
    success: function (response) {
      // alert("Login");
      // console.log("response: ", response);
      // Lưu thông tin username password vào Local Storage
      localStorage.setItem("username", v_username);
      localStorage.setItem("password", v_password);
      localStorage.setItem("id", response.id);
      localStorage.setItem("id", response.id);
      localStorage.setItem("fullname", response.fullname);
      window.location.replace("AdminManagement.html");
    },
  });

  //
});
