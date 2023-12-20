// import { NavLink } from "react-router-dom";
// import logo1 from "../../../assets/img/Logos/LOGOPOLI.JPG";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";

const settings = ["Profile", "Logout"];
const pages = ["Crear", "Editar", "Borrar", "Ayuda"];
export const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <NavLink
            to="/admin/panel"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Panel
            </Typography>
          </NavLink>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink
                    key={page}
                    to={`/admin/${page.toLowerCase()}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <NavLink
            to="/admin/panel"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <NavLink
              to="/admin/panel"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  mr: 10,
                }}
              >
                Panel
              </Typography>
            </NavLink>
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink
                key={page}
                to={`/admin/${page.toLowerCase()}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="../src/assets/img/Logos/logoRectangular/6.png"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {setting === "Logout" ? (
                    <NavLink
                      to="/admin/logout"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </NavLink>
                  ) : (
                    <Typography textAlign="center">{setting}</Typography>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    // <nav className="navbar__container-lists">
    //   <ul className="container-lists__menu-list">
    //     <li className="menu-list__item">
    //       <NavLink to="/" className="menu-list__link">
    //         <i className="fa-solid fa-house"></i>
    //         <span className="menu-list__title">WebSite</span>
    //       </NavLink>
    //     </li>
    //     <li className="menu-list__item">
    //       <NavLink to="/admin/crear" className="menu-list__link">
    //         <i className="fa-solid fa-plus"></i>
    //         <span className="menu-list__title">Crear</span>
    //       </NavLink>
    //     </li>
    //     <li className="menu-list__item">
    //       <NavLink to="/admin/editar" className="menu-list__link">
    //         <i className="fa-solid fa-list"></i>
    //         <span className="menu-list__title">Editar</span>
    //       </NavLink>
    //     </li>

    //     <li className="menu-list__item">
    //       <NavLink to="/admin/borrar" className="menu-list__link">
    //         <i className="fa-solid fa-trash"></i>
    //         <span className="menu-list__title">Borrar</span>
    //       </NavLink>
    //     </li>

    //     <li className="menu-list__item">
    //       <NavLink to="/admin/ayuda" className="menu-list__link">
    //         <i className="fa-solid fa-circle-question"></i>
    //         <span className="menu-list__title">Ayuda</span>
    //       </NavLink>
    //     </li>
    //   </ul>

    //   <ul className="container-lists__list-end">
    //     <li className="list-end__item">
    //       <a href="/" className="list-end__link-image">
    //         <img src={logo1} className="img-nav" alt="Imagen de perfil" />
    //       </a>
    //     </li>

    //     <li className="list-end__item">
    //       <NavLink to="/admin" className="list-end__link">
    //         <span className="list-end__name">Admin</span>
    //         <i className="fa-solid fa-gear"></i>
    //       </NavLink>
    //     </li>
    //     <li className="list-end__item">
    //       <NavLink to="/admin/logout" className="list-end__link">
    //         <i className="fa-solid fa-arrow-right-from-bracket"></i>
    //         <span className="list-end__name">Cerrar sesión</span>
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>
  );
};
