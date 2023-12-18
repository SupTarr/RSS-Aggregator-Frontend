import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Test() {
  const [name, setName] = useState("Tata");
  const [count, setCount] = useState(0);

  const handleNameChange = (): void => {
    const names: string[] = ["Bob", "Kevin", "Dave"];
    const index: number = Math.floor(Math.random() * 3);
    setName(names[index]);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.target);
  };

  return (
    <>
      <div className="flex">
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 justify-center"
        >
          <img src={viteLogo} className="logo justify-center" alt="Vite logo" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 justify-center"
        >
          <img
            src={reactLogo}
            className="logo react justify-center"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2 className="my-3">Hello! {name}</h2>
        <button
          className="btn btn-primary mb-3"
          type="submit"
          onClick={(e) => {
            handleNameChange();
            handleClick(e);
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Test;
