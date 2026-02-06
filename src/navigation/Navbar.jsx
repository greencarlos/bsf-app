import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="center">
      <p>
        {" "}
        <b>FREE SHIPPING WORLDWIDE</b> | 1 (800) - SHO - PNOW
      </p>
      <hr />
      <div className="header">
        <img className="logo" src="https://static.vecteezy.com/system/resources/previews/028/054/913/original/shopping-and-retail-logo-vector.jpg" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/track">Track</NavLink>
        <NavLink>Profile</NavLink>
        <NavLink>Cart</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
