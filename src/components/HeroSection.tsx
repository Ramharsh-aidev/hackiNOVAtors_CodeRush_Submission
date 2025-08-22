import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import HeroScene from './HeroScene';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    filter: 'blur(10px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cosmic-bg">
      {/* 3D Background Scene */}
      <HeroScene />
      
      {/* Content Overlay */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-glow"
          variants={itemVariants}
        >
          Beyond the
          <span className="block text-transparent bg-gradient-cosmic bg-clip-text text-glow-purple">
            Textbook
          </span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-card-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Unlock the universe of science with interactive{' '}
          <span className="text-primary font-semibold">AR/VR simulations</span>{' '}
          that bring complex concepts to life
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <Button 
            size="lg" 
            className="glass-button text-lg px-12 py-6 hover:shadow-glow transition-all duration-300"
          >
            Start Exploring
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="glass-card border-white/20 text-white hover:bg-white/10 text-lg px-12 py-6"
          >
            Watch Demo
          </Button>
        </motion.div>
        
        {/* Floating Stats */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          variants={containerVariants}
        >
          <motion.div 
            className="glass-card p-6 text-center animate-float"
            variants={itemVariants}
            style={{ animationDelay: '0s' }}
          >
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-card-foreground">Students Learning</div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 text-center animate-float"
            variants={itemVariants}
            style={{ animationDelay: '2s' }}
          >
            <div className="text-3xl font-bold text-secondary mb-2">50+</div>
            <div className="text-card-foreground">Virtual Labs</div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 text-center animate-float"
            variants={itemVariants}
            style={{ animationDelay: '4s' }}
          >
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-card-foreground">Satisfaction Rate</div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-card-foreground text-sm">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}