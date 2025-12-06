import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
   return (
      <footer className="py-20 px-6 md:px-20 border-t border-white/10 bg-black">
         <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-mono font-bold mb-8">
               Ready to boost your <span className="text-accent-green">ROAS</span>?
            </h2>

            <a
               href="mailto:semetei.arkabaev@gmail.com"
               className="text-xl md:text-2xl font-mono hover:text-accent-purple transition-colors mb-12 border-b border-transparent hover:border-accent-purple pb-1"
            >
               semetei.arkabaev@gmail.com
            </a>

            <div className="flex gap-8 mb-12">
               <a href="https://linkedin.com/in/semetei-arkabaev-342562295" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:-translate-y-1">
                  <Linkedin size={32} />
               </a>
               <a href="https://github.com/Tryharder782" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:-translate-y-1">
                  <Github size={32} />
               </a>
               <a href="mailto:semetei.arkabaev@gmail.com" className="text-gray-400 hover:text-white transition-colors transform hover:-translate-y-1">
                  <Mail size={32} />
               </a>
            </div>

            <div className="text-gray-600 font-mono text-sm">
               &copy; {new Date().getFullYear()} Playable Ads Developer. Built with React & Tailwind.
            </div>
         </div>
      </footer>
   );
};

export default Footer;
