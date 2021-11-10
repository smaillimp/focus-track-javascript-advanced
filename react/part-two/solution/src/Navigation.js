import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav>
    <Link className="navigation-link" to="/">
      Home
    </Link>
    <Link className="navigation-link" to="/about">
      About
    </Link>
    <Link className="navigation-link" to="/contact">
      Contact
    </Link>
  </nav>
);

export default Navigation;
