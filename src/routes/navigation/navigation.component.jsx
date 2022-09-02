import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.css';

const Navigation = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-logo-container">
          <Link to="/">Logo/Home</Link>
        </div>
        <div className="nav-links-container">
          <ul className="nav-links-list">
            <li>
              <Link to="/browse">Browse</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
