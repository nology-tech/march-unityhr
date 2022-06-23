import React, { useState, useEffect } from "react";
// import employeeData from "../../assets/employeeData";
import "./EmployeeList.scss";
import magnifyingGlass from "../../assets/images/magnifying-glass.png";
import filter from "../../assets/images/Filter.png";

const EmployeeList = () => {
  const url = "http://localhost:8080/employees";
  const [page, setPage] = useState(0);
  const [employees, setEmployees] = useState([]);
  let rowsPerPage = 9;
  let numberOfPages = Math.ceil(employees.length / rowsPerPage);
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

  const getEmployees = async () => {
    let finalUrl = url;
    const response = await fetch(finalUrl);
    const data = await response.json();
    setEmployees(data);
  };

  useEffect(() => {
    getEmployees(employees);
  }, [employees]);

  return (
    <div className="pageContent">
      <button className="top-buttons">
        <img src={filter} alt="filter" /> Filters
      </button>
      <button className="top-buttons">
        <img src={magnifyingGlass} alt="magnifying glass" />
      </button>
      <h1 className="title">Employee List</h1>
      <br></br>
      <table className="employeeTable">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>User Type</th>
            <th>Department</th>
            <th>Job Title</th>
            <th>Email Address</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {employees
            .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
            .map((employee, id) => (
              <tr key={employee + id}>
                <td>
                  <img className="circle" alt="user profile" />
                </td>
                <td className="employee-name">{employee.first_name}</td>
                <td className="employee-name">{employee.last_name}</td>
                <td>{employee.user_type}</td>
                <td>{employee.job_title}</td>
                <td>{employee.department}</td>
                <td>{employee.email_address}</td>
                <td>{employee.mobile_number}</td>
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
