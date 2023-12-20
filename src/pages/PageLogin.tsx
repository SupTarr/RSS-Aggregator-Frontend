import LoginContainer from "../containers/LoginContainer.tsx";

const PageLogin = () => {
  return (
    <section className="page-login flex min-h-screen flex-col flex-wrap justify-center bg-neutral-content">
      <div className="card mx-5 bg-base-100 drop-shadow-2xl sm:card-side">
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
