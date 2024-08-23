import logo from "../assets/logo.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="mb-16 mt-32">
      <div className="flex items-center justify-center">
        <a href="#">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={logo}
            width={250}  
            className="my-24"  
            alt="Logo"
          />
        </a>
      </div>
      <div className="flex items-center justify-center gap-10">  
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.5 * index }}
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 hover:text-gray-900"  
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
      <p className="mt-12 text-center text-lg tracking-wide text-gray-400"> 
        &copy; Tarun Pantangi 2024. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
