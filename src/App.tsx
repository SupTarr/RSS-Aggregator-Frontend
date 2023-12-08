import React, { ReactElement, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const Test = lazy(() => import("./Test.tsx"));

const App: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" Component={Test} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;