import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-left mb-6 text-gray-900 dark:text-white animate-fade-in">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <p className="text-lg text-gray-700 dark:text-gray-300">
            Hi, I’m Bach Nguyen, a third-year Computer Science student at California State University, Long Beach 
            with a passion for data analytics, machine learning, deep learning, and AI.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
            I enjoy extracting insights from data, building predictive models, and creating AI-driven solutions 
            that improve decision-making. My journey into data science started with a curiosity for understanding 
            patterns in data, which led me to work on projects involving machine learning, real-time data processing, 
            and AI-powered tools.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
            Currently, I’m developing ProMatch Analyzer, a machine learning-powered League of Legends match predictor 
            that leverages Scikit-Learn, FastAPI, and Redis caching for efficient predictions. I’m also exploring 
            deep learning frameworks like TensorFlow and PyTorch to expand my expertise in AI. 
            </p> 
          </div>
          
          <div className="relative animate-fade-in" style={{animationDelay: '0.4s'}}>
            <img
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//258.png"
              alt="Mudkip"
              className="rounded-lg shadow-xl w-5/6 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;