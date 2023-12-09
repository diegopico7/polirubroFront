import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import HomeIcon from "@mui/icons-material/Home";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [state, setState] = React.useState({
    top: false,
    Menu: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        {[
          {
            text: "Inicio",
            icon: <HomeIcon style={{ color: "1756cc" }} />,
            link: "/",
          },
          {
            text: "Carrito",
            icon: <ShoppingCartIcon style={{ color: "1756cc" }} />,
            link: "/carrito",
          },
          {
            text: "Productos",
            icon: <StoreIcon style={{ color: "1756cc" }} />,
            link: "/productos",
          },
          {
            text: "Admin",
            icon: <BuildCircleIcon style={{ color: "1756cc" }} />,
            link: "/admin",
          },
        ].map(({ text, icon, link }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    to={link}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {text}
                  </Link>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="navv">
      {["Menu"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
