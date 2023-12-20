import { Outlet } from "react-router-dom";
import { Header } from "../public/Header";
import UseAuth from "../../../hooks/UseAuth";

export const PublicLayout = () => {
  const { auth } = UseAuth();

  return (
    <>
      <Header></Header>

      <section className="layout__content">
        {!auth._id ? <Outlet></Outlet> : <Outlet></Outlet>}
        <div className="hide-print"></div>
      </section>
    </>
  );
};
