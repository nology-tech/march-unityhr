import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import EmployeeList from "./EmployeeList";

describe("<EmployeeList/> testing user interaction", () => {
  it("should go to next page once > button is clicked", () => {
    render(<EmployeeList />);

    const pageUpButton = screen.getByTestId("pageUpButton");
    userEvent.click(pageUpButton);
    const page = screen.getByText(/Page: 2/i);

    expect(page).toBeInTheDocument();
  });

  it("should go to previous page once < button is clicked", () => {
    render(<EmployeeList />);

    const pageDownButton = screen.getByTestId("pageDownButton");
    userEvent.click(pageDownButton);
    const page = screen.getByText(/Page: 1/i);
    expect(page).toBeInTheDocument();
  });

  it("should go to first page once << button is clicked", () => {
    render(<EmployeeList />);

    const firstPageButton = screen.getByTestId("firstPageButton");
    userEvent.click(firstPageButton);

    const page = screen.getByText(/Page: 1/i);

    expect(page).toBeInTheDocument();
  });

  it("should go to last page once >> button is clicked", () => {
    render(<EmployeeList />);

    const lastPageButton = screen.getByTestId("lastPageButton");
    userEvent.click(lastPageButton);

    const page = screen.getByText(/Page: 25/i);

    expect(page).toBeInTheDocument();
  });

  it("should show the results once a name is entered into the searchbox", () => {
    render(<EmployeeList />);

    const searchTermInput = screen.getByTestId("searchTerm");
    const searchTerm = "yvette waller";

    userEvent.type(searchTermInput, searchTerm);

    const output = screen.getByRole("cell", {
      name: /yvette waller/i,
    });

    expect(output).toBeInTheDocument();
  });
});
