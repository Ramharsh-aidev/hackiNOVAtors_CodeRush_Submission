// src/pages/SubjectPage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { subjectData } from '../data'; // Import our data
import { ArrowLeft } from 'lucide-react';

// A helper function to get badge color based on difficulty
const getDifficultyColor = (difficulty) => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'bg-green-500/20 text-green-300';
    case 'medium':
      return 'bg-yellow-500/20 text-yellow-300';
    case 'hard':
      return 'bg-red-500/20 text-red-300';
    default:
      return 'bg-gray-500/20 text-gray-300';
  }
};

const SubjectPage = () => {
  // Get the subject name from the URL (e.g., 'physics')
  const { subjectName } = useParams();
  const data = subjectData[subjectName];

  // If the URL is invalid and no data is found
  if (!data) {
    return (
      <div className="min-h-screen cosmic-bg flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Subject Not Found</h1>
        <p className="text-xl mb-8">This area of our lab is still under construction.</p>
        <Link to="/" className="glass-button hover:shadow-glow">
          Return to Home
        </Link>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 20, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen cosmic-bg text-white font-sans"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32">
        {/* Back to Home Link */}
        <Link to="/" className="flex items-center gap-2 text-card-foreground hover:text-white transition-colors mb-12">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${data.accentColor}`}>
            {data.title}
          </h1>
          <p className="text-lg md:text-xl text-card-foreground max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.simulations.map((sim) => (
            <motion.div
              key={sim.id}
              variants={itemVariants}
              className="group perspective-1000"
            >
              <div
                className="glass-card h-full flex flex-col overflow-hidden transform-gpu transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                style={{ '--glow-color': 'rgba(255, 255, 255, 0.1)' }}
              >
                <img src={sim.image} alt={sim.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white">{sim.title}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(sim.difficulty)}`}>
                      {sim.difficulty}
                    </span>
                  </div>
                  <p className="text-card-foreground flex-grow mb-6">{sim.description}</p>
                  <button className="w-full mt-auto glass-button text-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    Launch Simulation
                  </button>
                  <br />
                  <button className="w-full mt-auto glass-button text-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    Launch Test
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SubjectPage;