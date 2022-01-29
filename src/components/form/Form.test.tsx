import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Form from "./Form";

describe("form test", () => {
  test("should render input fields", () => {
    render(<Form />);
    // fields
    const nameInput = screen.getByTestId("nameField");
    expect(nameInput).toBeInTheDocument();
    const emailInput = screen.getByTestId("emailField");
    expect(emailInput).toBeInTheDocument();
    const passwordField = screen.getByTestId("passwordField");
    expect(passwordField).toBeInTheDocument();

    // buttons
    const fcsNameBtn = screen.getByTestId("fcsNameBtn");
    expect(fcsNameBtn).toBeInTheDocument();
    const fcsEmailBtn = screen.getByTestId("fcsEmailBtn");
    expect(fcsEmailBtn).toBeInTheDocument();
    const fcsPasswordBtn = screen.getByTestId("fcsPasswordBtn");
    expect(fcsPasswordBtn).toBeInTheDocument();
    const submitBtn = screen.getByTestId("submitBtn");
    expect(submitBtn).toBeInTheDocument();
    const resetBtn = screen.getByTestId("resetBtn");
    expect(resetBtn).toBeInTheDocument();
  });

  describe("should focus on button click", () => {
    test("should focus on name button", async () => {
      render(<Form />);
      const fcsNameBtn = screen.getByTestId("fcsNameBtn");
      const nameInput = screen.getByTestId("nameField");

      userEvent.click(fcsNameBtn);
      expect(nameInput).toHaveFocus();
    });
    test("should focus on email button", async () => {
      render(<Form />);
      const fcsEmailBtn = screen.getByTestId("fcsEmailBtn");
      const emailInput = screen.getByTestId("emailField");

      userEvent.click(fcsEmailBtn);
      expect(emailInput).toHaveFocus();
    });
    test("should focus on password button", async () => {
      render(<Form />);
      const fcsPasswordBtn = screen.getByTestId("fcsPasswordBtn");
      const passwordInput = screen.getByTestId("passwordField");

      userEvent.click(fcsPasswordBtn);
      expect(passwordInput).toHaveFocus();
    });
  });

  test("should type in the fileds", () => {
    render(<Form />);
    // type in name filed
    const nameInput = screen.getByTestId("nameField");
    userEvent.type(nameInput, "aakash");
    expect(nameInput).toHaveValue("aakash");

    // type in email filed
    const emailInput = screen.getByTestId("emailField");
    userEvent.type(emailInput, "aakash@gmail.com");
    expect(emailInput).toHaveValue("aakash@gmail.com");

    // type in password filed
    const passwordField = screen.getByTestId("passwordField");
    userEvent.type(passwordField, "mypassword");
    expect(passwordField).toHaveValue("mypassword");
  });

  test("should reset the form", async () => {
    render(<Form />);

    const nameInput = screen.getByTestId("nameField");
    userEvent.type(nameInput, "aakash");
    expect(nameInput).toHaveValue("aakash");

    const emailInput = screen.getByTestId("emailField");
    userEvent.type(emailInput, "aakash@gmail.com");
    expect(emailInput).toHaveValue("aakash@gmail.com");

    const passwordField = screen.getByTestId("passwordField");
    userEvent.type(passwordField, "mypassword");
    expect(passwordField).toHaveValue("mypassword");

    // click on reset button
    const resetBtn = screen.getByTestId("resetBtn");
    userEvent.click(resetBtn);

    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(passwordField).toHaveValue("");
  });

  test("should submit the form", async () => {
    render(<Form />);

    const consoleSpy = jest.spyOn(console, "log");

    // type in name filed
    const nameInput = screen.getByTestId("nameField");
    userEvent.type(nameInput, "aakash");
    // type in email filed
    const emailInput = screen.getByTestId("emailField");
    userEvent.type(emailInput, "aakash@gmail.com");
    // type in password filed
    const passwordField = screen.getByTestId("passwordField");
    userEvent.type(passwordField, "mypassword");

    // click on submit button
    const submitBtn = screen.getByTestId("submitBtn");
    userEvent.click(submitBtn);

    expect(consoleSpy).toHaveBeenCalledWith(
      "aakash",
      "aakash@gmail.com",
      "mypassword"
    );
  });
});
