import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FlaskConical, Gamepad2, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: FlaskConical,
    title: 'Interactive Labs',
    description: 'Dive into virtual experiments with real-time feedback and unlimited possibilities to explore.',
    delay: 0,
  },
  {
    icon: Gamepad2,
    title: 'Intuitive Controls',
    description: 'Seamless gesture-based navigation in AR/VR environments designed for natural learning.',
    delay: 0.2,
  },
  {
    icon: BarChart3,
    title: 'Insightful Analytics',
    description: 'Track progress with AI-driven insights that adapt to each student\'s learning journey.',
    delay: 0.4,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 aurora-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
            How It Works
          </h2>
          <p className="text-xl text-card-foreground max-w-3xl mx-auto leading-relaxed">
            Experience learning like never before with our cutting-edge platform
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group relative"
              >
                <div className="glass-card p-8 h-full text-center transition-all duration-500 hover:shadow-glow hover:-translate-y-2 hover:scale-105">
                  {/* Icon */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
                    <div className="relative w-20 h-20 mx-auto glass-card rounded-full flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-card-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-cosmic opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg text-card-foreground mb-8">
            Ready to revolutionize your learning experience?
          </p>
          <button className="glass-button hover:shadow-purple-glow">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}