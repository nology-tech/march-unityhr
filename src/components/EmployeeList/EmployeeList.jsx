import React from "react";
import employeeData from "../../assets/employeeData";
import "./EmployeeList.scss";

const EmployeeList = () => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Employee Name</th>
          <th>User Type</th>
          <th>Department</th>
          <th>Job Title</th>
          <th>Email Address</th>
          <th>Mobile Number</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default EmployeeList;
