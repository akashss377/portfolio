import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

function App() {
    return (
        <div className="portfolio">

<div className="galaxy-background">

    <div className="stars stars-one"></div>

    <div className="stars stars-two"></div>

    <div className="stars stars-three"></div>

    <div className="galaxy-cloud"></div>

    <div className="galaxy-core"></div>

    <div className="nebula nebula-one"></div>

    <div className="nebula nebula-two"></div>

    <div className="nebula nebula-three"></div>

</div>

            <Navbar />

            <main>
                <Hero />
                <Skills />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </main>

            <footer className="footer">
                <div className="container">

                    <div className="footer-content">

                        <a href="#home" className="footer-logo">
                            Akash S S
                        </a>

                        <p>
                            Building modern web experiences with
                            Python, Django & React.
                        </p>

                        <div className="footer-links">
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact</a>
                        </div>

                    </div>

                    <div className="footer-bottom">

                        <p>
                            © 2026 Akash S S. All Rights Reserved.
                        </p>

                        <p>
                            Designed & Built with React
                        </p>

                    </div>

                </div>
            </footer>

        </div>
    );
}

export default App;