import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
    </nav>
);

export default Navigation;