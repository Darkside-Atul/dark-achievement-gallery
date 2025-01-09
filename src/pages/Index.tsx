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
    <div className="min-h-screen bg-primary relative overflow-hidden">
      <div className="fixed inset-0 bg-[#1A1F2C]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source
            src="https://cdn.pixabay.com/vimeo/328714798/Neural%20Network%20-%2022567.mp4?width=1280&hash=0c6c5ce7bc2f0669d9851f5671c0b3c2d4b5c677"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-primary to-primary"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[100px] -top-40 -left-20"></div>
          <div className="absolute h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[100px] top-40 right-10"></div>
          <div className="absolute h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-[120px] bottom-40 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <div className="absolute inset-0 backdrop-blur-3xl opacity-20 bg-grid-white/[0.02]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <section id="home" className="min-h-screen flex items-center justify-center pt-16">
          <div className="absolute inset-0 bg-[url('./placeholder.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-accent to-white">
              Hi, I'm Atul Kumar
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-100">
              Full Stack Developer | Computer Science Student
            </p>
            <div className="flex justify-center space-x-6 animate-fade-in delay-200">
              <a
                href="https://github.com/Darkside-Atul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-all transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/atul-kumar-6548362a7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-all transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-accent to-white">About Me</h2>
            <div className="max-w-2xl mx-auto backdrop-blur-sm bg-secondary/30 p-6 rounded-lg shadow-xl animate-fade-in">
              <p className="mb-4 text-gray-300">
                I'm a passionate Computer Science student and Full Stack Developer with a strong
                foundation in web technologies. Currently pursuing my degree, I focus on creating
                efficient and user-friendly web applications.
              </p>
              <p className="mb-4 text-gray-300">
                My technical skills include:
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Python", "Git & GitHub"].map((skill) => (
                  <li key={skill} className="bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full text-center text-accent hover:bg-accent/20 transition-colors">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-accent to-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-accent to-white">Get In Touch</h2>
            <div className="max-w-xl mx-auto backdrop-blur-sm bg-secondary/30 p-8 rounded-lg shadow-xl animate-fade-in">
              <p className="text-gray-300 mb-8">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center text-white hover:text-accent transition-all transform hover:scale-105 bg-secondary/50 px-6 py-3 rounded-full"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
                <a
                  href="https://www.linkedin.com/in/atul-kumar-6548362a7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-accent transition-all transform hover:scale-105 bg-secondary/50 px-6 py-3 rounded-full"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
