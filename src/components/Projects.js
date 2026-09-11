import {
    FaGithub,
    FaExternalLinkAlt
} from "react-icons/fa";

function Projects() {

    const projects = [
        {
            number: "01",
            title: "TasteShare",
            subtitle: "Recipe Sharing Platform",
            description:
                "A full-stack recipe sharing platform where users can register, login, create, edit, delete and explore recipes through a modern React interface.",
            technologies: [
                "Python",
                "Django",
                "DRF",
                "React",
                "MySQL"
            ],
            image: "/images/tasteshare.png",
            github: "https://github.com/akashss377/tasteshare",
            
        },
        {
            number: "02",
            title: "VETCARE",
            subtitle: "Veterinary Care Management System",
            description:
                "A veterinary care management system designed for pet owners to explore doctors, services, appointments, pet profiles and emergency veterinary information.",
            technologies: [
                "Python",
                "Django",
                "MySQL",
                "Bootstrap"
            ],
            image: "/images/vetcareee.jpeg",
            github: "https://github.com/akashss377/vetcare",
            
        },
        {
            number: "03",
            title: "Personal Bookmarking",
            subtitle: "Bookmark Management Website",
            description:
                "A responsive bookmarking website that allows users to securely manage bookmarks with authentication, Redux state management and local storage.",
            technologies: [
                "React",
                "Redux",
                "Bootstrap",
                "JavaScript",
                "LocalStorage"
            ],
            image: "/images/bookmarkk.jpeg",
            github: "https://github.com/akashss377/bookmark",
            
        }
    ];

    return (
        <section
            className="projects-section"
            id="projects"
        >
            <div className="container">

                <div className="section-title">

                    <span>MY WORK</span>

                    <h2>
                        Featured
                        <br />
                        <span className="gradient-text">
                            Projects
                        </span>
                    </h2>

                    <p>
                        A selection of projects I have built using
                        modern web technologies.
                    </p>

                </div>

                <div className="projects-wrapper">

                    {projects.map((project, index) => (

                        <div
                            className={
                                index % 2 === 0
                                    ? "project-item"
                                    : "project-item reverse"
                            }
                            key={project.number}
                        >

                            <div className="project-image-wrapper">

                                <div className="project-number">
                                    {project.number}
                                </div>

                                <div className="project-image">

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />

                                    <div className="project-image-overlay">
                                        <FaExternalLinkAlt />
                                    </div>

                                </div>

                            </div>

                            <div className="project-content">

                                <span className="project-label">
                                    FEATURED PROJECT
                                </span>

                                <h3>
                                    {project.title}
                                </h3>

                                <h4>
                                    {project.subtitle}
                                </h4>

                                <p>
                                    {project.description}
                                </p>

                                <div className="project-technologies">

                                    {project.technologies.map(
                                        (technology) => (
                                            <span
                                                key={technology}
                                            >
                                                {technology}
                                            </span>
                                        )
                                    )}

                                </div>

                                <div className="project-buttons">

                                    <a
                                        href={project.github}
                                        className="project-link"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaGithub />
                                        GitHub
                                    </a>

                                  

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;