import React from "react";
import { ArrowDown, Eye } from "lucide-react";

const Hero: React.FC = () => {
  // Scroll function for Hire Me and Projects buttons
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Adjust navHeight to match your navbar height (in pixels)
      const navHeight = 64;
      window.scrollTo({
        top: element.offsetTop - navHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" />

      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="mb-8 flex justify-center mt-16 md:mt-0">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
              alt="Developer portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1
          className="inline-block text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-400 dark:to-red-400 leading-tight overflow-visible"
          style={{ animationDelay: "0.2s", paddingBottom: "0.15em" }}
        >
          Bach Nguyen
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Turning data into intelligent solutions. Passionate about AI, machine
          learning, and building real-world applications that make an impact.
        </p>
        <div
          className="flex flex-row justify-center gap-3 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium w-36"
          >
            <span>Hire Me</span>
            <ArrowDown size={20} className="hidden md:inline" />
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-300 dark:border-gray-600 w-36"
          >
            <span>Projects</span>
            <Eye size={20} className="hidden md:inline" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
