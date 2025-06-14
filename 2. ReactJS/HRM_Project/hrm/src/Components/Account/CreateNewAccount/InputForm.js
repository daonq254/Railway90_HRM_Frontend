import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
function InputForm({ listDepartment, listPosition, onHandleCreateNewAccount }) {
  console.log("listDepartment: ", listDepartment);
  console.log("listPosition: ", listPosition);
  // Khai báo ra các state để quản lý dữ liệu Form
  let [Email, SetEmail] = useState("");
  let [Username, SetUsername] = useState("");
  let [Fullname, SetFullname] = useState("");
  let [Department, SetDepartment] = useState("");
  let [Postion, SetPostion] = useState("");

  // Khai báo hàm xử lý sự kiện khi nhấn nút Create
  let handleCreate = () => {
    // console.log("Email:", Email);
    // console.log("Username:", Username);
    // console.log("Fullname:", Fullname);
    // console.log("Email:", Email);
    // console.log("Department:", Department);
    // console.log("Postion:", Postion);
    // Tạo mới 1 account
    let accountNew = {
      id: 1,
      email: Email,
      username: Username,
      fullname: Fullname,
      department: Department,
      position: Postion,
      createDate: "2025-06-05",
    };
    //
    onHandleCreateNewAccount(accountNew);
  };
  // Hiển thị cho Department
  let depItems = listDepartment.map((department, index) => {
    return (
      <option value={department.id} key={index}>
        {department.name}
      </option>
    );
  });
  // Hiển thị cho Department
  let posItems = listPosition.map((position, index) => {
    return (
      <option value={position.id} key={index}>
        {position.name}
      </option>
    );
  });
  return (
    <>
      <Form>
        {/* Email */}
        <FormGroup>
          <Label for="Email">Email: </Label>
          <Input
            id="Email"
            name="Email"
            placeholder="Input Email"
            type="email"
            value={Email}
            onChange={(event) => {
              SetEmail(event.target.value);
            }}
          />
        </FormGroup>

        {/* Username */}
        <FormGroup>
          <Label for="Username">Username: </Label>
          <Input
            id="Username"
            name="Username"
            placeholder="Input Username"
            type="text"
            value={Username}
            onChange={(event) => {
              SetUsername(event.target.value);
            }}
          />
        </FormGroup>

        {/* Fullname */}
        <FormGroup>
          <Label for="Fullname">Fullname: </Label>
          <Input
            id="Fullname"
            name="Fullname"
            placeholder="Input Fullname"
            type="text"
            value={Fullname}
            onChange={(event) => {
              SetFullname(event.target.value);
            }}
            q
          />
        </FormGroup>

        {/* Department */}
        <FormGroup>
          <Label for="Department">Select a Department: </Label>
          <Input
            id="Department"
            name="Department"
            type="select"
            value={Department}
            onChange={(event) => {
              SetDepartment(event.target.value);
            }}
          >
            {depItems}
            {/* <option value={"Bán hàng"}>Bán hàng</option>
            <option value={"Bảo vệ"}>Bảo vệ</option>
            <option value={"Giám đốc"}>Giám đốc</option>
            <option value={"Kỹ thuật"}>Kỹ thuật</option>
            <option value={"Marketing"}>Marketing</option> */}
          </Input>
        </FormGroup>

        {/* Postion */}
        <FormGroup>
          <Label for="Postion">Select a Postion: </Label>
          <Input
            id="Postion"
            name="Postion"
            type="select"
            value={Postion}
            onChange={(event) => {
              SetPostion(event.target.value);
            }}
          >
            {posItems}
            {/* <option value={"Dev"}>Dev</option>
            <option value={"Test"}>Test</option>
            <option value={"Scrum_Master"}>Scrum_Master</option>
            <option value={"PM"}>PM</option> */}
          </Input>
        </FormGroup>
      </Form>
      {/* Nút xử lý */}
      <Button color="primary" onClick={handleCreate}>
        Create
      </Button>
      <Button color="danger">Reset</Button>
    </>
  );
}

export default InputForm;
