import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "Tic Tac Toe Game",
      description: "A simple Tic Tac Toe game built with HTML, CSS, and JavaScript.",
      githubUrl: "https://github.com/Darkside-Atul/Tic-Tac-Toe",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Weather App",
      description: "A weather application that shows current weather conditions.",
      githubUrl: "https://github.com/Darkside-Atul/Weather-App",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
    },
  ];

  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Hi, I'm Atul Kumar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
            Full Stack Developer | Computer Science Student
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Darkside-Atul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/atul-kumar-6548362a7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-2xl mx-auto text-gray-300">
            <p className="mb-4">
              I'm a passionate Computer Science student and Full Stack Developer with a strong
              foundation in web technologies. Currently pursuing my degree, I focus on creating
              efficient and user-friendly web applications.
            </p>
            <p className="mb-4">
              My technical skills include:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>HTML, CSS, JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-primary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center text-white hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/atul-kumar-6548362a7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;