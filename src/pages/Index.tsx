import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { Github, Linkedin, Mail, Code, Terminal } from "lucide-react";

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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Matrix-like background animation */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(1,65,255,0.15),rgba(1,65,255,0)_40%,rgba(1,65,255,0))]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[100px] -top-40 -left-20"></div>
          <div className="absolute h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[100px] top-40 right-10"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <section id="home" className="min-h-screen flex items-center justify-center pt-16">
          <div className="container mx-auto px-4 text-center relative">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 border-4 border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 border-4 border-violet-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              {"<Atul Kumar />"}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 animate-fade-in delay-100 font-mono">
              Full Stack Developer | Computer Science Student
            </p>
            <div className="flex justify-center space-x-6 animate-fade-in delay-200">
              <a
                href="https://github.com/Darkside-Atul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-violet-400 transition-all transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/atul-kumar-6548362a7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-violet-400 transition-all transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              {"<About />"}
            </h2>
            <div className="max-w-2xl mx-auto backdrop-blur-sm bg-black/50 p-6 rounded-lg border border-blue-500/20 animate-fade-in">
              <div className="flex items-center mb-4">
                <Terminal className="text-blue-400 mr-2" />
                <span className="text-violet-400 font-mono">root@atul:~$</span>
              </div>
              <p className="mb-4 text-gray-400 font-mono">
                I'm a passionate Computer Science student and Full Stack Developer with a strong
                foundation in web technologies. Currently pursuing my degree, I focus on creating
                efficient and user-friendly web applications.
              </p>
              <div className="flex items-center mb-4">
                <Code className="text-blue-400 mr-2" />
                <span className="text-violet-400 font-mono">skills.list</span>
              </div>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Python", "Git & GitHub"].map((skill) => (
                  <li key={skill} className="bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-lg text-center text-blue-400 hover:bg-violet-500/20 transition-colors border border-blue-500/20 font-mono">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              {"<Projects />"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              {"<Contact />"}
            </h2>
            <div className="max-w-xl mx-auto backdrop-blur-sm bg-black/50 p-8 rounded-lg border border-blue-500/20 animate-fade-in">
              <p className="text-gray-400 mb-8 font-mono">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center text-blue-400 hover:text-violet-400 transition-all transform hover:scale-105 bg-blue-500/10 px-6 py-3 rounded-lg border border-blue-500/20"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  <span className="font-mono">Email Me</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/atul-kumar-6548362a7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-violet-400 transition-all transform hover:scale-105 bg-blue-500/10 px-6 py-3 rounded-lg border border-blue-500/20"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  <span className="font-mono">LinkedIn</span>
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