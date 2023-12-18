import React, { ReactElement } from "react";
import LoginContainer from "../containers/LoginContainer.tsx";

const PageLogin: React.FC = (): ReactElement => {
  return (
    <section className="page-login min-h-screen flex flex-col flex-wrap justify-center bg-neutral-content">
      <div className="card lg:card-side bg-base-100 drop-shadow-2xl mx-5">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <LoginContainer />
        </div>
      </div>
    </section>
  );
};

export default PageLogin;
