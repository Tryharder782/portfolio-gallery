import { motion } from 'framer-motion';
import { Zap, Hexagon, Layers } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
   <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-accent-green/50 transition-colors group"
   >
      <div className="mb-4 text-accent-green w-fit origin-left group-hover:scale-110 transition-transform duration-300">
         <Icon size={40} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-mono font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 font-sans leading-relaxed text-sm md:text-base">
         {description}
      </p>
   </motion.div>
);

const WhyMe = () => {
   return (
      <section className="py-20 px-6 md:px-20 bg-background relative border-t border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
               <div>
                  <span className="text-accent-green font-mono text-sm tracking-wider mb-2 block">02. WHY ME?</span>
                  <h2 className="text-3xl md:text-5xl font-mono font-bold">Technical Advantage</h2>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <FeatureCard
                  icon={Zap}
                  title="Optimization First"
                  description="I don't rely on heavy engines. I write clean code to keep builds under 2MB limits for AppLovin/Mintegral. Every kilobyte counts."
                  delay={0.1}
               />
               <FeatureCard
                  icon={Layers}
                  title="Technical Art"
                  description="I bridge the gap between code and design. Custom shaders, particle systems, and buttery smooth animations that feel 'juicy' and premium."
                  delay={0.2}
               />
               <FeatureCard
                  icon={Hexagon}
                  title="Reliability"
                  description="Single-file delivery systems. No missing assets, no 404s. Tested to work flawlessly even on unstable 3G networks."
                  delay={0.3}
               />
            </div>
         </div>
      </section>
   );
};

export default WhyMe;
