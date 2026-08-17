import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Hls from 'hls.js';
import { 
  Cpu, 
  User, 
  GraduationCap, 
  Bot, 
  Code, 
  Mail,
  Zap,
  Wrench,
  Dumbbell
} from 'lucide-react';

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const videoSrc = "https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8";

    if (video) {
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = videoSrc;
      } else if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
      }
    }
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-50"
      />
    </div>
  );
};

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 z-50 px-6 py-6 w-full"
    >
      <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <Cpu className="w-6 h-6 text-white" />
          <span className="text-white font-semibold text-lg">Tanmay Gupta</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium">
          <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-white transition-colors duration-300">Skills & Interests</a>
          <a href="#goals" className="hover:text-white transition-colors duration-300">Goals</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default function App() {
  return (
    <main className="relative bg-black min-h-screen w-full flex flex-col selection:bg-white selection:text-black font-sans text-white">
      <BackgroundVideo />
      <Navbar />

      <div className="relative z-10 w-full flex flex-col pb-24">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-screen flex flex-col items-center justify-center px-6">
          <div className="text-center max-w-5xl mx-auto flex flex-col items-center justify-center w-full gap-8">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase mb-2"
            >
              Computer Science Student • AI/ML Enthusiast • Builder
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-[80px] font-medium tracking-[-0.01em] leading-[1.1] bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent font-['Instrument_Serif']"
            >
              Hi, I'm Tanmay Gupta.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-white/70 text-lg"
            >
              I am a B.Tech CSE student specializing in AI & ML who enjoys coding, robotics, and experimenting with technology.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-4 mt-4"
            >
              <a href="#about" className="liquid-glass rounded-full px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
                Explore My Journey
              </a>
              <a href="#projects" className="border border-white/20 rounded-full px-8 py-3 text-sm font-medium hover:bg-white/5 transition-colors">
                View My Projects
              </a>
              <a href="#contact" className="text-white/80 hover:text-white text-sm underline underline-offset-4 ml-2 transition-colors">
                Contact Me
              </a>
            </motion.div>
          </div>
        </section>

        {/* ABOUT & EDUCATION SECTION */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-3xl p-8 flex flex-col gap-4"
          >
            <User className="w-8 h-8 text-white/80" />
            <h2 className="text-2xl font-medium font-['Instrument_Serif'] tracking-wide">About Me</h2>
            <p className="text-white/70 leading-relaxed text-sm">
              I am a curious and technology-focused student who enjoys experimenting, building things, and learning by doing. I like solving programming problems and understanding how things work rather than simply using them. My main interests are Computer Science, AI/ML, robotics and technology. I want to continuously improve my programming skills and eventually build useful and innovative technology.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="liquid-glass rounded-3xl p-8 flex flex-col gap-4"
          >
            <GraduationCap className="w-8 h-8 text-white/80" />
            <h2 className="text-2xl font-medium font-['Instrument_Serif'] tracking-wide">Education</h2>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-white/90">B.Tech — Computer Science and Engineering</span>
              <span className="text-white/60 text-sm">Specialization in AI & ML</span>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-1">
              <span className="text-white/80">MirAI School of Technology</span>
              <span className="text-white/50 text-sm">Jagannath University, Jaipur</span>
            </div>
          </motion.div>
        </section>

        {/* SKILLS & HOBBIES SECTION */}
        <section id="skills" className="max-w-5xl mx-auto px-6 py-24 w-full">
          <h2 className="text-3xl font-medium font-['Instrument_Serif'] text-center mb-12">Skills, Interests & Hobbies</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="liquid-glass rounded-2xl p-6 flex flex-col items-center text-center gap-3">
              <Code className="w-6 h-6 text-white/70" />
              <span className="text-sm font-medium">Programming & Coding</span>
            </div>
            <div className="liquid-glass rounded-2xl p-6 flex flex-col items-center text-center gap-3">
              <Bot className="w-6 h-6 text-white/70" />
              <span className="text-sm font-medium">AI & Machine Learning</span>
            </div>
            <div className="liquid-glass rounded-2xl p-6 flex flex-col items-center text-center gap-3">
              <Cpu className="w-6 h-6 text-white/70" />
              <span className="text-sm font-medium">Robotics & Drones</span>
            </div>
            <div className="liquid-glass rounded-2xl p-6 flex flex-col items-center text-center gap-3">
              <Wrench className="w-6 h-6 text-white/70" />
              <span className="text-sm font-medium">Hardware Tinkering</span>
            </div>
            <div className="liquid-glass rounded-2xl p-6 flex flex-col items-center text-center gap-3">
              <Zap className="w-6 h-6 text-white/70" />
              <span className="text-sm font-medium">Learning New Tech</span>
            </div>
            <div className="liquid-glass rounded-2xl p-6 flex flex-col items-center text-center gap-3">
              <Dumbbell className="w-6 h-6 text-white/70" />
              <span className="text-sm font-medium">Fitness</span>
            </div>
          </div>
        </section>

        {/* GOALS SECTION */}
        <section id="goals" className="max-w-5xl mx-auto px-6 py-12 w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-3xl p-10 flex flex-col items-center text-center gap-8"
          >
            <h2 className="text-3xl font-medium font-['Instrument_Serif']">Career Interests</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['Software Development', 'Artificial Intelligence', 'Machine Learning', 'Robotics', 'Computer Science', 'Automation', 'Emerging Technologies'].map((goal) => (
                <span key={goal} className="glass-pill px-5 py-2.5 text-sm font-medium tracking-wide">
                  {goal}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center w-full">
          <h2 className="text-4xl font-medium font-['Instrument_Serif'] mb-6">Let's Build Something Together</h2>
          <p className="text-white/60 mb-8 max-w-md">
            Whether you want to collaborate on an AI project, talk robotics, or just say hi, my inbox is always open.
          </p>
          <a href="tanmaygupta337@gmil.com" className="liquid-glass rounded-full px-8 py-4 flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Mail className="w-5 h-5" />
            <span className="font-medium">Get In Touch</span>
          </a>
        </section>
        
      </div>
    </main>
  );
}
