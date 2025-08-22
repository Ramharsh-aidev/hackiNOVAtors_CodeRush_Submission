// src/components/SubjectsSection.jsx

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Atom, Dna, Zap } from 'lucide-react';
import { Link } from 'react-router-dom'; // <-- 1. IMPORT Link

const subjects = [
  {
    icon: Atom,
    title: 'Physics',
    path: '/physics', // <-- Added path
    description: 'Explore quantum mechanics, relativity, and electromagnetic fields in stunning 3D environments.',
    bgClass: 'from-blue-600/20 to-purple-600/20',
    glowColor: 'shadow-blue-500/30',
  },
  {
    icon: Dna,
    title: 'Biology', 
    path: '/biology', // <-- Added path
    description: 'Journey through cellular structures, DNA sequences, and ecological systems with unprecedented detail.',
    bgClass: 'from-green-600/20 to-teal-600/20',
    glowColor: 'shadow-green-500/30',
  },
  {
    icon: Zap,
    title: 'Chemistry',
    path: '/chemistry', // <-- Added path
    description: 'Manipulate molecular structures, witness reactions, and understand chemical bonds interactively.',
    bgClass: 'from-orange-600/20 to-red-600/20',
    glowColor: 'shadow-orange-500/30',
  },
];

const cardVariants = {
  hidden: { 
    opacity: 0,
    rotateX: 45,
    y: 100,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function SubjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* ... (rest of the background and header code is unchanged) ... */}
      <motion.div 
        className="absolute inset-0 cosmic-bg"
        style={{ y, opacity }}
      />
      
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-glow-purple">
            What You'll Learn
          </h2>
          <p className="text-xl text-card-foreground max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the fundamental sciences with our comprehensive curriculum
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;
            
            return (
              // <-- 2. WRAP the entire motion.div with the Link component -->
              // We move the 'key' to the outermost element, which is now the Link.
              <Link to={subject.path} key={subject.title}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.3 }}
                  className="group perspective-1000"
                >
                  {/* The 'cursor-pointer' is now handled by the Link (<a> tag) so it can be removed, but leaving it does no harm */}
                  <div className="relative h-96 transform-gpu transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-105">
                    {/* ... (The entire inner structure of the card remains the same) ... */}
                    <div className={`absolute inset-0 glass-card bg-gradient-to-br ${subject.bgClass} transition-all duration-700 group-hover:${subject.glowColor} group-hover:shadow-2xl`}>
                      <div className="relative p-8 h-full flex flex-col justify-between">
                        <div className="text-center">
                          <div className="relative mb-6">
                            <div className="absolute inset-0 bg-white/10 rounded-full blur-xl animate-pulse" />
                            <div className="relative w-24 h-24 mx-auto glass-card rounded-full flex items-center justify-center">
                              <Icon className="w-12 h-12 text-white" />
                            </div>
                          </div>
                          <h3 className="text-3xl font-bold mb-4 text-white">
                            {subject.title}
                          </h3>
                        </div>
                        <div>
                          <p className="text-card-foreground leading-relaxed mb-6">
                            {subject.description}
                          </p>
                          <div className="w-full glass-button text-center justify-center group-hover:bg-white/20 transition-all duration-300">
                            Explore {subject.title}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-cosmic opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-700" />
                    </div>
                    <div className="absolute inset-0 bg-black/20 rounded-2xl transform translate-y-4 translate-x-4 -z-10 group-hover:translate-y-8 group-hover:translate-x-8 transition-transform duration-700" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
        
        {/* ... (rest of the CTA code is unchanged) ... */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Start Your Scientific Journey Today
            </h3>
            <p className="text-card-foreground mb-6">
              Join thousands of students already exploring the universe of science
            </p>
            <button className="glass-button hover:shadow-glow">
              Begin Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}