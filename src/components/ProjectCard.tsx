import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
}

const ProjectCard = ({ title, description, githubUrl, demoUrl, technologies }: ProjectCardProps) => {
  return (
    <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all animate-fade-in">
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
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
          className="flex items-center text-white hover:text-accent transition-colors"
        >
          <Github className="w-5 h-5 mr-2" />
          Code
        </a>
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-accent transition-colors"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;