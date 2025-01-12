import { Github, ExternalLink, Code } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
}

const ProjectCard = ({ title, description, githubUrl, demoUrl, technologies }: ProjectCardProps) => {
  return (
    <div className="backdrop-blur-sm bg-black/50 rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all animate-fade-in border border-blue-500/20">
      <div className="flex items-center mb-4">
        <Code className="text-blue-400 mr-2" />
        <h3 className="text-xl font-semibold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
          {title}
        </h3>
      </div>
      <p className="text-gray-400 mb-4 font-mono">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-lg text-sm hover:bg-violet-500/20 transition-colors border border-blue-500/20 font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-400 hover:text-violet-400 transition-all transform hover:scale-105 bg-blue-500/10 px-4 py-2 rounded-lg border border-blue-500/20"
        >
          <Github className="w-5 h-5 mr-2" />
          <span className="font-mono">Code</span>
        </a>
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:text-violet-400 transition-all transform hover:scale-105 bg-blue-500/10 px-4 py-2 rounded-lg border border-blue-500/20"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            <span className="font-mono">Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;