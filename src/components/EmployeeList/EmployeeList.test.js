import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import EmployeeList from "./EmployeeList";

describe("<EmployeeList/> testing user interaction", () => {

  it("should go to next page once > button is clicked", () => {
    render(<EmployeeList />);
    
  });
  
  it("should go to previous page once < button is clicked", () => {
    render(<EmployeeList />);
  });

  it("should go to first page once << button is clicked", () => {
    render(<EmployeeList />);

  })
  userEvent.click(button)
  });

  it("should go to last page once >> button is clicked", () => {
    render(<EmployeeList />);
  });



});

