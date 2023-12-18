import React, { ReactElement, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loading, Size } from "./components/Loading.tsx";
import "./App.css";

const PageLogin = lazy(() => import("./pages/PageLogin.tsx"));

const App: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading size={Size.Large} />}>
        <Routes>
          <Route path="/" Component={PageLogin} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
