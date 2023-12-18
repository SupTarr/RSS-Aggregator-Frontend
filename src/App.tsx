import React, { ReactElement, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loading, Size } from "./components/Loading.tsx";

const PageLogin = lazy(() => import("./pages/PageLogin.tsx"));
const PageRegister = lazy(() => import("./pages/PageRegister.tsx"));

const App: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading size={Size.Large} />}>
        <Routes>
          <Route path="/login" Component={PageLogin} />
          <Route path="/register" Component={PageRegister} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
