import React, { useRef } from "react";
import Button from "../buton/Button";
import Textfield from "../input/Textfield";

type Props = {};

const Form = (props: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // log values in console
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      nameRef.current?.value,
      emailRef.current?.value,
      passwordRef.current?.value
    );
  };

  // focus specifc field
  const focusField = (name: "name" | "email" | "password") => {
    switch (name) {
      case "name":
        nameRef.current?.focus();
        break;
      case "email":
        emailRef.current?.focus();
        break;
      case "password":
        passwordRef.current?.focus();
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex gap-4 flex-col w-2/5">
      <div className="flex gap-3">
        <Textfield
          name="name"
          type="text"
          placeholder="name"
          ref={nameRef}
          required
          data-testid="nameField"
        />
        <Textfield
          name="email"
          type="email"
          placeholder="email"
          ref={emailRef}
          required
          data-testid="emailField"
        />
        <Textfield
          name="password"
          type="password"
          placeholder="password"
          ref={passwordRef}
          required
          data-testid="passwordField"
        />
      </div>
      <div className="flex gap-2">
        <Button onClick={() => focusField("name")} data-testid="fcsNameBtn">
          Focus Name Input
        </Button>
        <Button onClick={() => focusField("email")} data-testid="fcsEmailBtn">
          Focus Email Input
        </Button>
        <Button
          onClick={() => focusField("password")}
          data-testid="fcsPasswordBtn"
        >
          Focus Password Input
        </Button>
      </div>
      <div className="flex gap-2">
        <Button type="submit" data-testid="submitBtn">
          Submit
        </Button>
        <Button type="reset" data-testid="resetBtn">
          Reset
        </Button>
      </div>
    </form>
  );
};

export default Form;
