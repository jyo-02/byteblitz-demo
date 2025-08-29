import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-white/5 border-t border-white/10 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-3 relative text-sm text-white/70 flex flex-col md:flex-row items-center md:justify-between gap-2 md:gap-0">
        
        <div className="text-black dark:text-white text-center md:text-left w-full md:w-auto">
          © 2025 Byteblitz. All rights reserved.
        </div>

        <div className="flex justify-center md:justify-end gap-4 w-full md:w-auto">
          <a
            href="https://github.com/jyo-02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-black dark:text-white transition"
          >
            <Github size={18} />
          </a>
          <a
            href="https://x.com/posiedonincrocs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-black dark:text-white transition"
          >
            <Twitter size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/jyotiskab/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-black dark:text-white transition"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
