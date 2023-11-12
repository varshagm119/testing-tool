import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

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
  test("rendering the <p>", () => {
    render(<Greeting />);
    const pEle = screen.getAllByText("Its good to see you", { exact: false });
    expect(pEle).toBeInTheDocument();
  });

  test("rendering the test two", () => {
    render(<Greeting />);
    const pEle = screen.getAllByText("test two", { exact: false });
    expect(pEle).toBeInTheDocument();
  });

  test("rendering a button with text Hi <p>", () => {
    render(<Greeting />);
    const pEle = screen.getByText("Hi", { exact: false });
    //expect(pEle).toBeInTheDocument();
    expect(pEle).toHaveTextContent("Hi");
  });
});
