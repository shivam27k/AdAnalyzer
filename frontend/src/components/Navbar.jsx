import { Link } from "react-router-dom";
// import "./styles.css";

const Navbar = () => {
    return (
        <nav className="">
            <h2 className="">Ad Performance Analyzer</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/upload">Upload</Link>
            </div>
        </nav>
    );
};

export default Navbar;
