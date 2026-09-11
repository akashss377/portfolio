import {
    FaPython,
    FaReact,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaGitAlt,
    FaGithub,
    FaCode,
    
} from "react-icons/fa";

import {
    SiDjango,
    SiMysql,
    SiPostman
} from "react-icons/si";

function Skills() {

    const skills = [
        {
            name: "Python",
            icon: <FaPython />
        },
        {
            name: "Django",
            icon: <SiDjango />
        },
        {
            name: "React",
            icon: <FaReact />
        },
        {
            name: "JavaScript",
            icon: <FaJs />
        },
        {
            name: "HTML5",
            icon: <FaHtml5 />
        },
        {
            name: "CSS3",
            icon: <FaCss3Alt />
        },
        {
            name: "Bootstrap",
            icon: <FaBootstrap />
        },
        {
            name: "MySQL",
            icon: <SiMysql />
        },
        {
            name: "Git",
            icon: <FaGitAlt />
        },
        {
            name: "GitHub",
            icon: <FaGithub />
        },
        {
            name: "Postman",
            icon: <SiPostman />
        },
        {
            name: "REST API",
            icon: <FaCode />
        }
    ];

    return (
        <section
            className="skills-orbit-section"
            id="skills"
        >

            <div className="container">

                <div className="skills-orbit-header">

                    <span>
                        MY TOOLKIT
                    </span>

                    <h2>
                        Technologies I use to
                        <br />
                        <span className="gradient-text">
                            bring ideas to life.
                        </span>
                    </h2>

                    <p>
                        A collection of technologies I use to
                        build modern and scalable web applications.
                    </p>

                </div>


                <div className="orbit-container">

                    <div className="orbit-glow"></div>

                    <div className="orbit orbit-one"></div>

                    <div className="orbit orbit-two"></div>

                    <div className="orbit orbit-three"></div>


                    <div className="orbit-center">

                        <div className="center-icon">
                            <FaCode />
                        </div>

                        <strong>
                            MY
                        </strong>

                        <span>
                            STACK
                        </span>

                        <small>
                            FULL STACK
                        </small>

                    </div>


                    <div className="orbit-skill skill-1">
                        {skills[0].icon}
                        <span>{skills[0].name}</span>
                    </div>

                    <div className="orbit-skill skill-2">
                        {skills[1].icon}
                        <span>{skills[1].name}</span>
                    </div>

                    <div className="orbit-skill skill-3">
                        {skills[2].icon}
                        <span>{skills[2].name}</span>
                    </div>

                    <div className="orbit-skill skill-4">
                        {skills[3].icon}
                        <span>{skills[3].name}</span>
                    </div>

                    <div className="orbit-skill skill-5">
                        {skills[4].icon}
                        <span>{skills[4].name}</span>
                    </div>

                    <div className="orbit-skill skill-6">
                        {skills[5].icon}
                        <span>{skills[5].name}</span>
                    </div>

                    <div className="orbit-skill skill-7">
                        {skills[6].icon}
                        <span>{skills[6].name}</span>
                    </div>

                    <div className="orbit-skill skill-8">
                        {skills[7].icon}
                        <span>{skills[7].name}</span>
                    </div>

                    <div className="orbit-skill skill-9">
                        {skills[8].icon}
                        <span>{skills[8].name}</span>
                    </div>

                    <div className="orbit-skill skill-10">
                        {skills[9].icon}
                        <span>{skills[9].name}</span>
                    </div>

                    <div className="orbit-skill skill-11">
                        {skills[10].icon}
                        <span>{skills[10].name}</span>
                    </div>

                    <div className="orbit-skill skill-12">
                        {skills[11].icon}
                        <span>{skills[11].name}</span>
                    </div>

                </div>


                <div className="skills-orbit-footer">

                    <span>FRONTEND</span>

                    <i></i>

                    <span>BACKEND</span>

                    <i></i>

                    <span>DATABASE</span>

                    <i></i>

                    <span>TOOLS</span>

                </div>

            </div>

        </section>
    );
}

export default Skills;