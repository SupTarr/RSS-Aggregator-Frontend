import React, { ReactElement, useReducer } from "react";
import { Link } from "react-router-dom";
import { Textbox, FormType } from "../components/Textbox.tsx";
import { Register } from "../Links.tsx";

type LoginAction =
  | { type: "setUsername"; username: string }
  | { type: "setPassword"; password: string };

type LoginState = {
  username: string;
  password: string;
};

const LoginContainer: React.FC = (): ReactElement => {
  const [state, dispatch] = useReducer(
    (state: LoginState, action: LoginAction): LoginState => {
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
        default:
          return state;
      }
    },
    {
      username: "",
      password: "",
    }
  );

  return (
    <form className="login-container flex flex-col content-center flex-wrap">
      <Textbox
        name="Username"
        onChange={(v: string) => dispatch({ type: "setUsername", username: v })}
      />
      <Textbox
        name="Password"
        type={FormType.Password}
        onChange={(v: string) => dispatch({ type: "setPassword", password: v })}
      />
      <Link className="link link-primary mt-5 text-center" to={Register}>
        Register
      </Link>
    </form>
  );
};

export default LoginContainer;
