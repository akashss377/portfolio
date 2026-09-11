import {
    FaGithub,
    FaLinkedinIn,
    FaArrowRight,
    FaDownload
} from "react-icons/fa";

function Hero() {
    return (
        <section className="hero" id="home">

            <div className="container">

                <div className="row align-items-center min-vh-100">

                    <div className="col-lg-7 hero-content">

                        <div className="hero-badge">
                            <span></span>
                            AVAILABLE FOR WORK
                        </div>

                        <p className="hero-small-title">
                            PYTHON FULL STACK DEVELOPER
                        </p>

                        <h1>
                            Hi, I'm
                            <br />
                            <span className="gradient-text">
                                Akash S S
                            </span>
                        </h1>

                        <h2>
                            I build modern web applications
                            with <span>Python</span>, <span> Django</span> & <span>React</span>.
                        </h2>

                        <p className="hero-description">
                            I'm a passionate full stack developer focused
                            on creating clean, responsive and user-friendly
                            web applications using modern technologies.
                        </p>

                        <div className="hero-buttons">

                            <a
                                href="#projects"
                                className="btn-primary-custom"
                            >
                                View My Work
                                <FaArrowRight />
                            </a>

                            <a
                                href="#contact"
                                className="btn-outline-custom"
                            >
                                Contact Me
                            </a>

                        </div>

                        <div className="hero-social">

                            <a
                                href="https://github.com/akashss377"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/akash-ss-4a4682352?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>

                            <a
                                href="https://drive.google.com/file/d/1WcmWFCZhemAsjl3nv8LPa5i8yFTo0KTc/view?usp=drivesdk"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Download Resume"
                            >
                                <FaDownload />
                            </a>

                        </div>

                    </div>

                    <div className="col-lg-5">

                        <div className="hero-image-area">

                            <div className="hero-glow"></div>

                            <div className="hero-image">

                                <img
                                    src="/images/profile.PNG"
                                    alt="Akash S S"
                                />

                            </div>

                            <div className="floating-card card-one">
                                <strong>Python</strong>
                                <small>Backend</small>
                            </div>

                            <div className="floating-card card-two">
                                <strong>React</strong>
                                <small>Frontend</small>
                            </div>

                            <div className="floating-dot dot-one"></div>

                            <div className="floating-dot dot-two"></div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;