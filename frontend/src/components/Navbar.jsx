import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
// import "./styles.css";

const Navbar = () => {
    const location = useLocation()
    
    return (
        <nav className="flex justify-between sticky bg-white z-10 top-0 p-4 md:p-5 lg:p-10 shadow-lg items-center">
            <Link to={'/'} className="text-xl md:text-2xl lg:text-4xl font-bold">Ad Performance Analyzer</Link>
            <div className="flex gap-5">
                <Link to="/" className={`${location.pathname === '/' && 'text-purple-500 font-bold'}`}>Home</Link>
                <Link to="/upload" className={`${location.pathname === '/upload' && 'text-purple-500 font-bold'}`} >Upload</Link>
            </div>
        </nav>
    );
};

export default Navbar;
