import React, { useState } from "react";
import employeeData from "../../assets/employeeData";
import "./EmployeeList.scss";

const EmployeeList = () => {
  const [page, setPage] = useState(0);
  let rowsPerPage = 9;
  let numberOfPages = Math.ceil(employeeData.length / rowsPerPage);

  const downHandler = () => {
    setPage(page - 1);
  };

  const upHandler = () => {
    setPage(page + 1);
  };

  return (
    <div className="pageContent">
      <h1>Employee List</h1>
      <br></br>
      <table className="employeeTable">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Employee Name</th>
            <th>User Type</th>
            <th>Department</th>
            <th>Job Title</th>
            <th>Email Address</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {employeeData
            .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
            .map((employee, index) => (
              <tr key={index}>
                <td>
                  <img />
                </td>
                <td>{employee.name}</td>
                <td>{employee.User_Type}</td>
                <td>{employee.Department}</td>
                <td>{employee.jobTitle}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <button disabled={page === 0} onClick={downHandler}>
        &lt;
      </button>
      <span>
        Page: {page + 1}{" "}
        <button
          onClick={() => {
            setPage(2);
          }}
        >
          3
        </button>
      </span>
      <button disabled={page === numberOfPages - 1} onClick={upHandler}>
        &gt;
      </button>
    </div>
  );
};

export default EmployeeList;
