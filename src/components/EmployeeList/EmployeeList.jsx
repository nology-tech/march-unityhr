import React, { useState, useEffect } from "react";
import "./EmployeeList.scss";
import filter from "../../assets/images/Filter.png";
import Search from "./EmployeeSearch/EmployeeSearch";
import employeeData from "../../assets/employeeData";

const EmployeeList = () => {
  const [page, setPage] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearch = searchedName => {
    setSearchTerm(searchedName);
  };

  const getEmployees = async () => {
    try {
      const url = "http://localhost:8080/employees";
      const response = await fetch(url);
      const data = await response.json();
      setEmployees(data);
    } catch {
      setEmployees(employeeData);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const filteredEmployees = employees.filter(employee => {
    if (
      employee.first_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
      employee.last_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    ) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="pageContent">
      <button className="top-buttons">
        <img src={filter} alt="filter" /> Filters
      </button>

      <Search onChange={handleSearch} />
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
          {filteredEmployees.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((employee, id) => (
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
      <button className="pagination-button" data-testid="pageDownButton" disabled={page === 0} onClick={downHandler}>
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
