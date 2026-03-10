import { AppBar, Toolbar, Typography, Button, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {

  const items = useSelector((state) => state.cart.cartItems);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Startup Store
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Home
        </Button>

        <Button color="inherit" component={Link} to="/projects">
          Products
        </Button>

        <Button color="inherit" component={Link} to="/cart">
          <Badge badgeContent={items.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </Button>

        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;