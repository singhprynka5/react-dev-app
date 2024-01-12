
import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [ btnName, setBtnName ] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/">Cart</Link></li>
                    <button className="login"
                        onClick={()=> {
                            let name = btnName === "Login" ? "Logout" : "Login"
                            setBtnName(name);
                        }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;