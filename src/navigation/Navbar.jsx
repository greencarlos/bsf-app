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
        <img className="logo" src="../public/examplelogo.svg" />
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
