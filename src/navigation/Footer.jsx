import { NavLink } from "react-router";

function Footer() {
  return (
    <div>
      <nav className="footer">
        <div className="column">
          <h4>Policies and Terms of Service</h4>
          <NavLink to="/FAQ">FAQ</NavLink>
          <br />
          <NavLink to="/privacy">Privacy Policy</NavLink>
          <br />
          <NavLink to="/refund">Refund Policy</NavLink>
          <br />
          <NavLink to="/terms">Refund Policy</NavLink>
          <br />
          <NavLink to="/about">About Us</NavLink>
        </div>
        <div className="column">
          <h4>Retail Store Guarantees</h4>
          <p>24/7 Customer Support</p>
          <p>30 Day Money Back Guarantee</p>
          <p>FREE Shipping Worlwide</p>
        </div>
        <div className="column">
          <h4>Customer Support</h4>
          <p>
            <b>Email:</b> retail@store.com
          </p>
          <p>
            <b>Phone:</b> 1 (800) - SHO - PNOW
          </p>
        </div>
      </nav>
      <hr />
      <div className="row">
        <img className="visa" src="../../public/cards.png" />
      </div>
      <div className="row">
        <p>© [Your store], {new Date().getFullYear()}</p>
        <p>*</p>
        <p>Refund policy</p>
        <p>*</p>
        <p>Privacy policy</p>
        <p>*</p>
        <p>Terms of service</p>
        <p>*</p>
        <p>Shipping policy</p>
        <p>*</p>
        <p>Contact information</p>
      </div>
    </div>
  );
}

export default Footer;
