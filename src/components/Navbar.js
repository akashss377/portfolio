import {
    FaGithub,
    FaLinkedinIn,
    FaBars,
    FaTimes
} from "react-icons/fa";

import { useState } from "react";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar-custom">

            <div className="container">

                <div className="navbar-inner">

                    <a
                        href="#home"
                        className="navbar-logo"
                        onClick={closeMenu}
                    >
                        Akash S S <span>.</span>
                    </a>

                    <div
                        className={
                            menuOpen
                                ? "navbar-links active"
                                : "navbar-links"
                        }
                    >

                        <a href="#home" onClick={closeMenu}>
                            Home
                        </a>

                        <a href="#skills" onClick={closeMenu}>
                            Skills
                        </a>
                         <a href="#about" onClick={closeMenu}>
                            About
                        </a>

                        <a href="#experience" onClick={closeMenu}>
                            Experience
                        </a>

                        <a href="#projects" onClick={closeMenu}>
                            Projects
                        </a>

                        <a href="#contact" onClick={closeMenu}>
                            Contact
                        </a>

                        <div className="mobile-social">

                            <a
                                href="https://github.com/akashss377"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/akash-ss-4a4682352?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>

                        </div>

                    </div>

                    <div className="navbar-right">

                        <a
                            href="https://github.com/akashss377"
                            target="_blank"
                            rel="noreferrer"
                            className="desktop-social"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/akash-ss-4a4682352?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                            target="_blank"
                            rel="noreferrer"
                            className="desktop-social"
                        >
                            <FaLinkedinIn />
                        </a>

                        <button
                            className="menu-button"
                            onClick={() =>
                                setMenuOpen(!menuOpen)
                            }
                        >

                            {menuOpen ? (
                                <FaTimes />
                            ) : (
                                <FaBars />
                            )}

                        </button>

                    </div>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;