import React, { ReactElement, useReducer } from "react";
import { Link } from "react-router-dom";
import { Textbox, FormType } from "../components/Textbox.tsx";
import { Login } from "../Links.tsx";

type RegisterAction =
  | { type: "setUsername"; username: string }
  | { type: "setPassword"; password: string }
  | { type: "setConfirmPassword"; confirmPassword: string };

type RegisterState = {
  username: string;
  password: string;
  confirmPassword: string;
};

const RegisterContainer: React.FC = (): ReactElement => {
  const [state, dispatch] = useReducer(
    (state: RegisterState, action: RegisterAction): RegisterState => {
      switch (action.type) {
        case "setUsername":
          return {
            ...state,
            username: action.username,
          };
        case "setPassword":
          return {
            ...state,
            password: action.password,
          };
        case "setConfirmPassword":
          return {
            ...state,
            confirmPassword: action.confirmPassword,
          };
        default:
          return state;
      }
    },
    {
      username: "",
      password: "",
      confirmPassword: "",
    }
  );

  return (
    <form className="Register-container flex flex-col content-center flex-wrap">
      <Textbox
        name="Username"
        onChange={(v: string) => dispatch({ type: "setUsername", username: v })}
      />
      <Textbox
        name="Password"
        type={FormType.Password}
        onChange={(v: string) => dispatch({ type: "setPassword", password: v })}
      />
      <Textbox
        name="Confirm Password"
        type={FormType.Password}
        onChange={(v: string) =>
          dispatch({ type: "setConfirmPassword", confirmPassword: v })
        }
      />
      <Link className="link link-primary mt-5 text-center" to={Login}>
        Login
      </Link>
    </form>
  );
};

export default RegisterContainer;
