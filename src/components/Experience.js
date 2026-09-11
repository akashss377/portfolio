import {
    FaBriefcase,
    FaGraduationCap,
    FaCalendarAlt,
    FaCode
} from "react-icons/fa";

function Experience() {
    return (
        <section
            className="experience-section"
            id="experience"
        >
            <div className="container">

                <div className="section-title">
                    <span>MY JOURNEY</span>

                    <h2>
                        Experience &
                        <br />
                        <span className="gradient-text">
                            Education
                        </span>
                    </h2>

                    <p>
                        My learning journey and professional
                        development experience.
                    </p>
                </div>

                <div className="journey-wrapper">

                    <div className="journey-line"></div>

                    <div className="journey-item">

                        <div className="journey-year">
                            2026
                        </div>

                        <div className="journey-icon">
                            <FaBriefcase />
                        </div>

                        <div className="journey-content">

                            <div className="journey-top">
                                <span className="journey-type">
                                    INTERNSHIP
                                </span>

                                <FaCode className="journey-small-icon" />
                            </div>

                            <h3>
                                Full Stack Web Development
                                in Python
                            </h3>

                            <h4>
                                MashupStack
                            </h4>

                            <div className="journey-date">
                                <FaCalendarAlt />
                                <span>2026</span>
                            </div>

                            <p>
                                Gained practical experience in full
                                stack web development using Python,
                                Django, REST APIs, React, JavaScript,
                                Bootstrap and MySQL.
                            </p>

                            <div className="journey-tags">
                                <span>Python</span>
                                <span>Django</span>
                                <span>React</span>
                                <span>REST API</span>
                                <span>MySQL</span>
                            </div>

                        </div>

                    </div>

                    <div className="journey-item">

                        <div className="journey-year">
                            2025
                        </div>

                        <div className="journey-icon">
                            <FaGraduationCap />
                        </div>

                        <div className="journey-content">

                            <div className="journey-top">
                                <span className="journey-type">
                                    EDUCATION
                                </span>

                                <FaGraduationCap className="journey-small-icon" />
                            </div>

                            <h3>
                                BSc Computer Science
                            </h3>

                            <h4>
                                Kerala University
                            </h4>

                            <div className="journey-date">
                                <FaCalendarAlt />
                                <span>2025</span>
                            </div>

                            <p>
                                Built a strong foundation in programming,
                                databases, web development and software
                                development concepts.
                            </p>

                            <div className="journey-tags">
                                <span>Programming</span>
                                <span>Database</span>
                                <span>Web Development</span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Experience;