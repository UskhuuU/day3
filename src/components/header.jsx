import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className="App">
            <Link to="/Products">Products</Link>
            <Link to="/Log_in">Log_in</Link>
            <Link to="/Services">Services</Link>
        </div>
    ); 
};

export default Header;