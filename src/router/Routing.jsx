import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { PublicLayout } from "../components/layout/public/PublicLayout";
import { Login } from "../components/user/Login";
import { Register } from "../components/user/Register";
import { PrivateLayout } from "../components/layout/private/PrivateLayout";

import { Inicio } from "../components/layout/public/Inicio";
import { AuthProvider } from "../context/AuthProvider";
import { Logout } from "../components/user/Logout";
import { Ventas } from "../administracion/Ventas";
import { ComprasPage } from "../components/products/ComprasPage";
import { ProductosProvider } from "../context/ProductosProvider";
import { CarritoProvider } from "../context/CarritoProvider";
import { Carrito } from "../carrito/Carrito";
import { PanelControl } from "../Panel/PanelControl";
import { Control } from "../Panel/Control";
import { Crear } from "../Panel/Crear";
import { Editar } from "../Panel/Editar";
import { Borrar } from "../Panel/Borrar";
import { EditarForm } from "../Panel/EditarForm";

export const Routing = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<PublicLayout />}>
                <Route index element={<Inicio />} />
                <Route path="login" element={<Login />} />
                <Route path="registro" element={<Register />} />
                <Route path="productos" element={<ComprasPage />} />
                <Route path="carrito" element={<Carrito />} />
              </Route>
              <Route path="/admin" element={<PrivateLayout />}>
                <Route index element={<PanelControl />} />
                <Route path="panel" element={<PanelControl />} />
                <Route path="logout" element={<Logout />} />
                <Route path="ventas" element={<Ventas />} />
                <Route path="control" element={<Control />} />
                <Route path="crear" element={<Crear />} />
                <Route path="editar" element={<Editar />} />
                <Route path="edicion/:id" element={<EditarForm />} />
                <Route path="borrar" element={<Borrar />} />
              </Route>
              <Route
                path="*"
                element={
                  <>
                    <p>
                      <h1>Error 404</h1>
                      <Link to="/">Volver al inicio</Link>
                    </p>
                  </>
                }
              />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </CarritoProvider>
    </ProductosProvider>
  );
};
