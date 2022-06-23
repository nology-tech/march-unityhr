/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/await-async-utils */
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

import EmployeeList from "./EmployeeList";
import employeeData from "../../assets/employeeData";
const globalFetch = global.fetch;

describe("<EmployeeList/> testing user interaction", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => employeeData }));
  });

  it("should go to next page once > button is clicked", async () => {
    act(() => {
      render(<EmployeeList />);
    });

    await act(async () => {
      const pageUpButton = await screen.findByTestId("pageUpButton");
      userEvent.click(pageUpButton);
    });

    await act(async () => {
      expect(await screen.findByText(/Page: 2/i)).toBeInTheDocument();
    });
  });

  it("should go to previous page once < button is clicked", async () => {
    act(() => {
      render(<EmployeeList />);
    });

    await act(async () => {
      const pageDownButton = await screen.findByTestId("pageDownButton");
      userEvent.click(pageDownButton);
    });

    await act(async () => {
      expect(await screen.findByText(/Page: 1/i)).toBeInTheDocument();
    });
  });

  it("should go to first page once << button is clicked", async () => {
    act(() => {
      render(<EmployeeList />);
    });

    await act(async () => {
      const firstPageButton = await screen.findByTestId("firstPageButton");
      userEvent.click(firstPageButton);
    });

    await act(async () => {
      expect(await screen.findByText(/Page: 1/i)).toBeInTheDocument();
    });
  });

  it("should go to last page once >> button is clicked", async () => {
    await act(() => {
      render(<EmployeeList />);
    });

    await act(async () => {
      const lastPageButton = await screen.findByRole("button", {
        name: />>/i,
      });
      userEvent.click(lastPageButton);
    });

    await act(async () => {
      expect(await screen.findByText(/Page: 25/i)).toBeInTheDocument();
    });
  });

  it("should show the results once a name is entered into the searchbox", async () => {
    act(() => {
      render(<EmployeeList />);
    });

    await act(async () => {
      const searchTermInput = await screen.findByTestId("searchTerm");
      const searchTerm = "yvette waller";
      userEvent.type(searchTermInput, searchTerm);
    });

    waitFor(() => {
      expect(
        screen.getByRole("cell", {
          name: /yvette waller/i,
        })
      ).toBeInTheDocument();
    });
  });
});

afterAll(() => {
  global.fetch = globalFetch;
});
