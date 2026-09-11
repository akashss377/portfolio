import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaPaperPlane,
    FaArrowRight
} from "react-icons/fa";

import { useState } from "react";

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        const mailSubject =
            subject || "Portfolio Contact";

        const mailBody =
            `Name: ${name}%0D%0A` +
            `Email: ${email}%0D%0A%0D%0A` +
            `Message:%0D%0A${message}`;

        window.location.href =
            `mailto:ssakash377@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${mailBody}`;
    };

    return (
        <section
            className="contact-section"
            id="contact"
        >

            <div className="container">

                <div className="contact-header">

                    <div>

                        <span className="contact-label">
                            GET IN TOUCH
                        </span>

                        <h2>
                            Let's build
                            <br />
                            something
                            <br />
                            <span className="gradient-text">
                                great together.
                            </span>
                        </h2>

                    </div>

                    <p>
                        Have a project in mind, a job opportunity,
                        or just want to connect? I'd love to hear
                        from you.
                    </p>

                </div>

                <div className="row g-4">

                    <div className="col-lg-5">

                        <div className="contact-info glass-card">

                            <div className="availability">

                                <span></span>

                                <div>

                                    <strong>
                                        Available for opportunities
                                    </strong>

                                    <small>
                                        Open to new projects and roles
                                    </small>

                                </div>

                            </div>

                            <div className="contact-details">

                                <a
                                    href="mailto:ssakash377@gmail.com"
                                    className="contact-detail"
                                >

                                    <div className="contact-icon">
                                        <FaEnvelope />
                                    </div>

                                    <div>

                                        <small>
                                            EMAIL
                                        </small>

                                        <strong>
                                            ssakash377@gmail.com
                                        </strong>

                                    </div>

                                    <FaArrowRight
                                        className="contact-arrow"
                                    />

                                </a>

                                <a
                                    href="tel:+919995916594"
                                    className="contact-detail"
                                >

                                    <div className="contact-icon">
                                        <FaPhoneAlt />
                                    </div>

                                    <div>

                                        <small>
                                            PHONE
                                        </small>

                                        <strong>
                                            +91 99959 16594
                                        </strong>

                                    </div>

                                    <FaArrowRight
                                        className="contact-arrow"
                                    />

                                </a>

                                <div className="contact-detail">

                                    <div className="contact-icon">
                                        <FaMapMarkerAlt />
                                    </div>

                                    <div>

                                        <small>
                                            LOCATION
                                        </small>

                                        <strong>
                                            Trivandrum, Kerala, India
                                        </strong>

                                    </div>

                                </div>

                            </div>

                            <div className="contact-social">

                                <span>
                                    OPPORTUNITIES
                                </span>

                                <p>
                                    Open to exciting opportunities and meaningful collaborations.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-7">

                        <div className="contact-form glass-card">

                            <div className="form-heading">

                                <span>
                                    SEND A MESSAGE
                                </span>

                                <h3>
                                    Tell me about your project
                                </h3>

                                <p>
                                    Fill out the form and I'll get
                                    back to you as soon as possible.
                                </p>

                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className="row g-4">

                                    <div className="col-md-6">

                                        <label>
                                            Your Name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            value={name}
                                            onChange={(event) =>
                                                setName(event.target.value)
                                            }
                                            required
                                        />

                                    </div>

                                    <div className="col-md-6">

                                        <label>
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            value={email}
                                            onChange={(event) =>
                                                setEmail(event.target.value)
                                            }
                                            required
                                        />

                                    </div>

                                    <div className="col-12">

                                        <label>
                                            Subject
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Project discussion"
                                            value={subject}
                                            onChange={(event) =>
                                                setSubject(event.target.value)
                                            }
                                            required
                                        />

                                    </div>

                                    <div className="col-12">

                                        <label>
                                            Message
                                        </label>

                                        <textarea
                                            rows="5"
                                            placeholder="Tell me a little about your project..."
                                            value={message}
                                            onChange={(event) =>
                                                setMessage(event.target.value)
                                            }
                                            required
                                        ></textarea>

                                    </div>

                                    <div className="col-12">

                                        <button
                                            type="submit"
                                            className="contact-submit"
                                        >
                                            Send Message

                                            <FaPaperPlane />

                                        </button>

                                    </div>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;