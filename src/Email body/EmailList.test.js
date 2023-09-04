import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import EmailList from "./EmailList"; // Adjust the import path accordingly
import "@testing-library/jest-dom/extend-expect";
import { useGetAllEmailQuery } from "../Services/Email/EmailApi";

test("displays correct label when trash value changes", () => {
  const initialTrashValue = false;
  render(<EmailList trash={initialTrashValue} />);
  expect(screen.getByText("Inbox")).toBeInTheDocument();
  const updatedTrashValue = true;
  render(<EmailList trash={updatedTrashValue} />);
  expect(screen.getByText("Trash")).toBeInTheDocument();
});
jest.mock("../Services/Email/EmailApi");

test("Fetch Api value", async()=>{
  const mockApiResponse = {
    data: {
      data: [],
      totalcount: 19,
      unreadcount: 15,
    },
    isLoading: false,
    isError: false,
  };
  useGetAllEmailQuery.mockReturnValueOnce(mockApiResponse);
  render(<EmailList trash={false} EmailListData={mockApiResponse.data}/>);
  console.log(screen.debug());
  const totalCountElement = screen.getByTestId("total-count");
  console.log(totalCountElement.innerHTML); // Print the inner HTML
  console.log(totalCountElement.textContent); // Print the text content
  expect(totalCountElement).toHaveTextContent("19 Message");
})




