import React, { useState } from "react";
import employeeData from "../../assets/employeeData";
import "./EmployeeList.scss";
import magnifyingGlass from "../../assets/images/magnifying-glass.png";
import filter from "../../assets/images/Filter.png";

const EmployeeList = () => {
  const [page, setPage] = useState(0);
  let rowsPerPage = 9;
  let numberOfPages = Math.ceil(employeeData.length / rowsPerPage);
  const firstPageHandler = () => {
    setPage(0);
  };

  const downHandler = () => {
    setPage(page - 1);
  };

  const upHandler = () => {
    setPage(page + 1);
  };
  const lastPageHandler = () => {
    setPage(numberOfPages - 1);
  };

  return (
    <div className="pageContent">
      <button className="top-buttons">
        <img src={filter} alt="filter" /> Filters
      </button>
      
      <input
      type="text"
      placeholder="Search employee..."
      className="search-employee"
    />
      <h1 className="title">Employee List</h1>
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
                  <img className="circle" alt=""/>
                </td>
                <td className="employee-name">{employee.name}</td>
                <td>{employee.User_Type}</td>
                <td>{employee.Department}</td>
                <td>{employee.jobTitle}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <button
        className="pagination-button"
        data-testid="firstPageButton"
        disabled={page === 0}
        onClick={firstPageHandler}
      >
        &lt;&lt;
      </button>
      <button
        className="pagination-button"
        data-testid="pageDownButton"
        disabled={page === 0}
        onClick={downHandler}
      >
        &lt;
      </button>
      <span data-testid="page">Page: {page + 1} </span>
      <button
        className="pagination-button"
        data-testid="pageUpButton"
        disabled={page === numberOfPages - 1}
        onClick={upHandler}
      >
        &gt;
      </button>
      <button
        className="pagination-button"
        data-testid="lastPageButton"
        disabled={page === numberOfPages - 1}
        onClick={lastPageHandler}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default EmployeeList;
