import { Linkedin, Instagram, Youtube } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import logoImage from "@/assets/goaurex-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logoImage} alt="GOAUREX Logo" className="h-16 mb-4" />
            <p className="text-gray-400 text-sm">
              Transforming businesses through innovative IT solutions and cutting-edge technology.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-primary transition-colors">Data Solutions</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Cloud Solutions</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Email Marketing</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Data Visualization</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="/careers" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/goaurex" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/goaurex" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-white">
                <BsTwitterX className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/goaurex" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@goaurex" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} GoAurex. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</a>
            <a href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
