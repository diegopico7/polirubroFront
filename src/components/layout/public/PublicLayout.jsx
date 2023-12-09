import { Outlet } from "react-router-dom";
import { Header } from "../public/Header";
import UseAuth from "../../../hooks/UseAuth";
import { WhatsApp } from "../../utilidades/WhatsApp";
import { Footer } from "../../utilidades/Footer";

export const PublicLayout = () => {
  const { auth } = UseAuth();

  return (
    <>
      <Header></Header>
      <WhatsApp />

      <section className="layout__content">
        {!auth._id ? <Outlet></Outlet> : <Outlet></Outlet>}

        <Footer></Footer>
      </section>
    </>
  );
};
