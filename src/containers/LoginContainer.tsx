import React, { ReactElement, useReducer } from "react";
import { Link } from "react-router-dom";
import { Register } from "../Links.tsx"

type LoginAction =
  | {
      type: "setUsername";
      username: string;
    }
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
    },
  );

  return (
    <form className="login-container flex flex-col content-center flex-wrap">
      <label className="form-control w-full max-w-md">
        <div className="label">
          <span className="label-text">Username</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full max-w-md"
          onChange={(e) =>
            dispatch({ type: "setUsername", username: e.target.value })
          }
        />
      </label>
      <label className="form-control w-full max-w-md">
        <div className="label">
          <span className="label-text">Password</span>
        </div>
        <input
          type="password"
          className="input input-bordered w-full max-w-md"
          onChange={(e) =>
            dispatch({ type: "setPassword", password: e.target.value })
          }
        />
      </label>
      <Link className="link link-primary mt-5 text-center" to={Register}>Register</Link>
    </form>
  );
};

export default LoginContainer;
