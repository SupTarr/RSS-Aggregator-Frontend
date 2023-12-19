import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const PageLoading = lazy(() => import("./pages/PageLoading.tsx"));
const PageLogin = lazy(() => import("./pages/PageLogin.tsx"));
const PageRegister = lazy(() => import("./pages/PageRegister.tsx"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/login" Component={PageLogin} />
          <Route path="/register" Component={PageRegister} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
