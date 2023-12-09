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
      <header className="content__header content__header--public">
        <h1 className="content__title">Login</h1>
      </header>
      <div className="content__posts">
        {saved == "login" ? (
          <strong className="alert alert-succes">
            usuario identificado correctamente!
          </strong>
        ) : (
          ""
        )}
        {saved == "error" ? (
          <strong className="alert alert-danger">
            {" "}
            usuario no identificado
          </strong>
        ) : (
          ""
        )}
        <form className="form-login" onSubmit={loginUser}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" onChange={changed} />
          </div>
          <input
            type="submit"
            value="Identificate"
            className="btn btn-succes"
          />
        </form>
      </div>
    </>
  );
};
