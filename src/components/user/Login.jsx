import { useState } from "react";
import { Global } from "../../helpers/Global";
import { useForm } from "../../hooks/useForm";
import UseAuth from "../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("not sended");
  const { setAuth } = UseAuth();
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    //datos del formulario
    let userToLogin = form;

    //peticion al back
    const request = await fetch(Global.url + "admin/login", {
      method: "POST",
      body: JSON.stringify(userToLogin),
      headers: {
        "content-Type": "application/json",
      },
    });
    const data = await request.json();

    console.log(data.user);
    if (data.status == "success") {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setSaved("login");

      setAuth(data.user);
      //redireccion
      setTimeout(() => {
        navigate("/admin/panel");
      }, 1000);
    } else {
      setSaved("error");
    }
  };

  return (
    <>
      <div className="contenedor-log">
        <div className="cont-aviso">
          {saved == "login" ? (
            <h1 className="ident-correctamente">
              Usuario identificado correctamente!
            </h1>
          ) : (
            ""
          )}
          {saved == "error" ? (
            <strong className="ident-noIdent">
              {" "}
              Usuario no identificado ingrese de nuevo sus datos
            </strong>
          ) : (
            ""
          )}
        </div>
        <div className="inFormBackground">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="inLoginForm">
            <form onSubmit={loginUser} className="formulario-login">
              <div className="title">
                <h3>Login</h3>
              </div>
              <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={changed} />
              </div>
              <div className="inputGroup">
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" onChange={changed} />
              </div>
              <button className="submitForm">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
