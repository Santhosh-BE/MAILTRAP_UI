import { render } from "@testing-library/react";
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
