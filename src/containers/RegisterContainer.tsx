import React, { ReactElement, useReducer } from "react";
import { Link } from "react-router-dom";
import { Login } from "../Links.tsx"

type RegisterAction =
  | {
      type: "setUsername";
      username: string;
    }
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
      <label className="form-control w-full max-w-md">
        <div className="label">
          <span className="label-text">Confirm Password</span>
        </div>
        <input
          type="password"
          className="input input-bordered w-full max-w-md"
          onChange={(e) =>
            dispatch({ type: "setConfirmPassword", confirmPassword: e.target.value })
          }
        />
      </label>
      <Link className="link link-primary mt-5 text-center" to={Login}>Login</Link>
    </form>
  );
};

export default RegisterContainer;
