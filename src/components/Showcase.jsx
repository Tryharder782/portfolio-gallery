import { motion } from 'framer-motion';
import { ExternalLink, Github, Box, Activity } from 'lucide-react';

const ProjectCard = ({ title, tags, description, demoLink, codeLink, image, delay }) => (
   <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-accent-green/50 transition-all duration-300"
   >
      {/* Visual Placeholder */}
      <div className="h-64 bg-black/50 flex items-center justify-center relative overflow-hidden group-hover:bg-black/40 transition-colors">
         <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
         />

         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />

         <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-10">
            {tags.map((tag, i) => (
               <span key={i} className="text-xs font-mono font-bold px-2 py-1 bg-white/10 text-white rounded backdrop-blur-md border border-white/5">
                  {tag}
               </span>
            ))}
         </div>
      </div>

      {/* Content */}
      <div className="p-6">
         <h3 className="text-2xl font-mono font-bold mb-2 text-white group-hover:text-accent-green transition-colors">
            {title}
         </h3>
         <p className="text-gray-400 font-sans mb-6 text-sm leading-relaxed">
            {description}
         </p>

         <div className="flex gap-4">
            {demoLink && (
               <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white font-mono text-sm font-bold hover:text-accent-green transition-colors"
               >
                  <Box size={16} />
                  [ Play Demo ]
               </a>
            )}
            {codeLink && (
               <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-500 font-mono text-sm font-bold hover:text-white transition-colors"
               >
                  <Github size={16} />
                  [ Source Code ]
               </a>
            )}
         </div>
      </div>
   </motion.div>
);

const Showcase = () => {
   return (
      <section id="projects" className="py-20 px-6 md:px-20 bg-background relative">
         <div className="max-w-7xl mx-auto">
            <div className="mb-16">
               <span className="text-accent-green font-mono text-sm tracking-wider mb-2 block">01. WORK</span>
               <h2 className="text-3xl md:text-5xl font-mono font-bold">Selected Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <ProjectCard
                  title="The Juicy Donut"
                  image="/assets/donut-demo.png"
                  tags={['Three.js', 'R3F', '1.2 MB', 'Single File']}
                  description="Hypercasual Playable Ad Prototype. Physics-based interaction with squash & stretch mechanics. Optimized for high CTR and low-end devices."
                  demoLink="https://donut-playable-ad-demo.vercel.app"
                  codeLink="https://github.com/Tryharder782/donut-playable-ad-demo"
                  delay={0.1}
               />
               <ProjectCard
                  title="Anatomical Viewer"
                  image="/assets/skull-viewer.png"
                  tags={['WebGL', 'Optimization', 'Medical Tech']}
                  description="High-Load WebGL Architecture. Complex 3D model rendering with stable 60 FPS. Demonstrates raycasting, asset management, and performance tuning."
                  demoLink="https://cgma-1.onrender.com/"
                  codeLink="https://github.com/Tryharder782/cgma"
                  delay={0.2}
               />
               <ProjectCard
                  title="Casino Coin Clicker"
                  image="/assets/casino-demo.png"
                  tags={['Three.js', 'Particles', 'Interactive', '1.3 MB']}
                  description="Engaging playable ad with particle effects and 3D coin interaction. Optimized for mobile performance and high engagement metrics."
                  demoLink="https://casino-demo-pa.vercel.app"
                  codeLink="https://github.com/Tryharder782/casino-demo-PA"
                  delay={0.3}
               />
            </div>
         </div>
      </section>
   );
};

export default Showcase;
