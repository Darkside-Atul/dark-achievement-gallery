import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 py-4 border-b border-blue-500/20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 flex items-center">
          <Terminal className="w-6 h-6 mr-2 text-blue-400" />
          Atul Kumar
        </a>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-400 hover:text-violet-400 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-blue-400 hover:text-violet-400 transition-colors font-mono"
            >
              {item.name}
            </a>
          ))}
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm md:hidden border-b border-blue-500/20">
            <div className="flex flex-col items-center space-y-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-blue-400 hover:text-violet-400 transition-colors font-mono"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;