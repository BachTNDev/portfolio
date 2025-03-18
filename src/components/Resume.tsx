import React, { useEffect } from 'react';
import { 
  ArrowLeft, Download, Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Award, MessageSquare 
} from 'lucide-react';

interface ResumeProps {
  toggleResume: () => void;
  navigateToContact: () => void;
}

const Resume: React.FC<ResumeProps> = ({ toggleResume, navigateToContact }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadResume = () => {
    const pdfUrl = new URL('/Bach_Nguyen_Resume.pdf', window.location.origin).href;
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={toggleResume}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
          
          <div className="flex gap-4">
            <button
              onClick={navigateToContact}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <MessageSquare size={20} />
              Contact Me
            </button>
            
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Download size={20} />
              View Resume PDF
            </button>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Bach Nguyen</h1>
            <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-4">Computer Science Student</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Mail size={18} className="text-gray-500 dark:text-gray-400" />
                <span>bach.tnguyen@outlook.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Phone size={18} className="text-gray-500 dark:text-gray-400" />
                <span>(925) 255-6528</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <MapPin size={18} className="text-gray-500 dark:text-gray-400" />
                <span>Long Beach, CA</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Globe size={18} className="text-gray-500 dark:text-gray-400" />
                <span>
                  <a href="https://github.com/BachTNDev" className="text-blue-600 dark:text-blue-400 hover:underline">
                    github.com/BachTNDev
                  </a> | 
                  <a href="https://www.linkedin.com/in/bachtn/" className="text-blue-600 dark:text-blue-400 hover:underline">
                    linkedin.com/in/bachtn
                  </a>
                </span>
              </div>
            </div>
          </div>
          
          {/* Education Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <GraduationCap size={20} className="text-blue-600 dark:text-blue-400" />
              Education
            </h3>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">California State University Long Beach</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Bachelor of Science, Computer Science | Minor: Applied Mathematics</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">GPA: 3.90 | Expected Graduation: May 2026</p>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li><strong>Programming Languages:</strong> Python, R, C++, C, TypeScript, JavaScript</li>
              <li><strong>Data Analytics:</strong> Pandas, NumPy, Scikit-Learn, TensorFlow, PyTorch, Matplotlib, Tableau</li>
              <li><strong>Frameworks/Libraries:</strong> React.js, Next.js, Tailwind CSS</li>
              <li><strong>Tools/Environments:</strong> VS Code, Git, GitHub, Windows, Linux</li>
            </ul>
          </div>

          {/* Projects Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Projects</h3>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">ProMatch Analyzer</h4>
              <p className="text-blue-600 dark:text-blue-400">Scikit-Learn, Pandas, Next.js, Tailwind CSS</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Developed a League of Legends match prediction tool using machine learning.</li>
                <li>Optimized backend with FastAPI and Redis caching to improve response times by 80%.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">AI Research Assistant Web App</h4>
              <p className="text-blue-600 dark:text-blue-400">Next.js, Tailwind CSS, Python, Flask</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Built an AI-powered article summarization tool using HuggingFace API.</li>
                <li>Improved keyword extraction accuracy by 30% through optimized algorithms.</li>
              </ul>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Experience</h3>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">AI Research on Mobile Optimization</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">California State University, Long Beach</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">January 2025 - March 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
