import { Loading, Size } from "../components/Loading.tsx";

const PageLoading = () => {
  return (
    <section className="page-loading min-h-screen flex flex-col flex-wrap justify-center content-center">
      <Loading size={Size.Large} />
    </section>
  );
};

export default PageLoading;
