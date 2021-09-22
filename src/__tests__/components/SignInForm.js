import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import SignInForm from "../../components/SignInForm";

describe("SignIn", () => {
  it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<SignInForm onFormSubmit={onSubmit} />);

    fireEvent.changeText(getByTestId("username"), "kalle");
    fireEvent.changeText(getByTestId("password"), "password");
    fireEvent.press(getByTestId("submit"), "kalle", "password");

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);

      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: "kalle",
        password: "password",
      });
    });
  });
});
