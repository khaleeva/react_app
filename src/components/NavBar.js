import React, {useState} from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {

    const [menuActive, setMenuActive] = useState(false);

    const links = [
        {
            name: 'Users',
            link: '/users',
        },
        {
            name: 'Posts',
            link: '/posts',
        },
        {
            name: 'Photo',
            link: '/photos',
        }

    ]
    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LOGO</a>
                <button onClick={toggleMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-end ${menuActive ? "show" : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        {links.map((link, index) =>
                            <li className="nav-item" key={index}>
                                <Link
                                    to={link.link}
                                    className="nav-link active"
                                    aria-current="page"
                                    onClick={toggleMenu}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        )
                        }

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;