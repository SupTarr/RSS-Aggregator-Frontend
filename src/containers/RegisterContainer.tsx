import { useReducer } from "react";
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput.tsx";
import PasswordInput from "../components/PasswordInput.tsx";
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

const RegisterContainer = () => {
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
    },
  );

  return (
    <form className="register-container flex flex-col justify-center content-center h-full">
      <h2 className="card-title">Register</h2>
      <p className="my-3 flex-grow-0">{state.username}</p>
      <TextInput
        name="Username"
        onChange={(v: string) => dispatch({ type: "setUsername", username: v })}
      />
      <PasswordInput
        name="Password"
        onChange={(v: string) => dispatch({ type: "setPassword", password: v })}
      />
      <PasswordInput
        name="Confirm Password"
        onChange={(v: string) =>
          dispatch({ type: "setConfirmPassword", confirmPassword: v })
        }
      />
      <button className="btn btn-neutral mt-4" type="submit">
        Register
      </button>
      <p className="flex-grow-0 my-3">
        Already registered?{" "}
        <span className="flex-grow-0">
          <Link className="link" to={Login}>
            Login
          </Link>
        </span>
      </p>
    </form>
  );
};

export default RegisterContainer;
