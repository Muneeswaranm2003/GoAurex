import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/goaurex-logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={logoImage} alt="GOAUREX Logo" className="h-20" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            
            <Button asChild className="bg-gradient-primary hover:shadow-glow transition-all">
              <a href="/contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground transition-transform hover:scale-110" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button asChild className="bg-gradient-primary hover:shadow-glow transition-all w-full">
                <a href="/contact">Get Started</a>
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;