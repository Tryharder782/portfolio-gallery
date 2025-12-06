import { motion } from 'framer-motion';

const Hero = () => {
   return (
      <section className="h-screen w-full flex flex-col justify-center items-start px-6 md:px-20 relative overflow-hidden bg-background">
         {/* Background decoration or visual */}
         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-purple/20 blur-[120px] rounded-full pointer-events-none" />

         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl z-10"
         >
            <span className="text-accent-green font-mono text-sm tracking-wider mb-4 block">
               &lt;System.Init /&gt;
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter mb-6 leading-tight">
               High-Performance WebGL <br className="hidden md:block" />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  & Playable Ads Developer
               </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 font-sans max-w-2xl mb-8 leading-relaxed">
               I build single-file HTML5 experiences under <span className="text-white font-bold">2MB</span> that load instantly and convert.
            </h2>

            <div className="flex gap-4">
               <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-black font-bold font-mono text-lg hover:bg-gray-200 transition-colors"
               >
                  [ View Projects ]
               </motion.a>

               <motion.a
                  href="mailto:semetei.arkabaev@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/20 text-white font-bold font-mono text-lg hover:bg-white/10 transition-colors"
               >
                  [ Contact Me ]
               </motion.a>
            </div>
         </motion.div>
      </section>
   );
};

export default Hero;
