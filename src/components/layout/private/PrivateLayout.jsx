import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../private/Header";
import UseAuth from "../../../hooks/UseAuth";

export const PrivateLayout = () => {
  const { auth, loading } = UseAuth();

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <>
      <Header></Header>

      <section className="layout__content">
        {auth.id ? <Outlet></Outlet> : <Navigate to="/login" />}
      </section>
    </>
  );
};
