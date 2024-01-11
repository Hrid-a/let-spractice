import { useState } from "react";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    console.log("body rendered");
    return (
        <header>
            <div className="container">

                <div className="logo">
                    Logo
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>headpones</li>
                        <li>speakers</li>
                        <li>earphones</li>
                        <li className="btn" onClick={() => setLoggedIn(prev => !prev)}>{loggedIn ? "log out" : "log in"}</li>
                    </ul>
                </nav>
            </div >
        </header>)
}

export default Header;

