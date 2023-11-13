import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello world as a test", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello world", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if button is NOT clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getAllByText("Its good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if button is clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getAllByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render good to see you if button is not clicked", () => {
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).not.toBeNull();
  });
});
