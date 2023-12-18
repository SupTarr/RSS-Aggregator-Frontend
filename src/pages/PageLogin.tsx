import React, { ReactElement } from "react";
import LoginContainer from "../containers/LoginContainer.tsx";

const PageLogin: React.FC = (): ReactElement => {
  return (
    <section className="page-login">
      <LoginContainer />
    </section>
  );
};

export default PageLogin;
