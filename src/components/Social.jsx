import { FiGithub, FiLinkedin, FiMail} from "react-icons/fi";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-6">
      <a
        href="https://github.com/PavanPawar12"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-slate-800 hover:bg-black hover:text-white transition"
      >
        <FiGithub size={20} />
      </a>

      <a
        href="https://www.linkedin.com/in/pavan-pawar-312631286/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-slate-800 hover:text-white transition"
      >
        <FiLinkedin size={20} />
      </a>

      <a
        href="mailto:pavanpawar9923100@gmial.com"
        className="p-3 rounded-full bg-slate-800 hover:text-white transition"
      >
        <FiMail size={20} />
      </a>  
      
    </div>
  );
};

export default SocialLinks;
