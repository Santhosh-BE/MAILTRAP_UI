import { render ,screen, fireEvent} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import Sidebar from "./Sidebar";
import "@testing-library/jest-dom/extend-expect";
test("renders Sidebar component", () => {
  render(
    <MemoryRouter>
      <Sidebar />
    </MemoryRouter>
  );
});
test("renders MailTrap navigation link", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Sidebar />
    </MemoryRouter>
  );
  const mailTrapLink = getByText("MailTrap");
  const inboxLink = getByText("Inbox");
  const trashLink = getByText("Trash");
  expect(mailTrapLink).toBeInTheDocument();
  expect(trashLink).toBeInTheDocument();
  expect(inboxLink).toBeInTheDocument();
});
test('navigates to Inbox when Inbox link is clicked', () => {
  const mockSetSideBarChange = jest.fn();

  render(
    <MemoryRouter>
      <Sidebar setSideBarChange={mockSetSideBarChange} />
    </MemoryRouter>
  );

  const inboxLink = screen.getByText('Inbox');
  fireEvent.click(inboxLink);

  expect(mockSetSideBarChange).toHaveBeenCalledWith('Inbox');
  // Add assertions to test the navigation behavior
});