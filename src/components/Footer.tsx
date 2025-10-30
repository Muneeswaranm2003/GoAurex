import { Linkedin, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-card/50 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-3xl font-logo font-black bg-gradient-primary bg-clip-text text-transparent tracking-wider">
              GOAUREX
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming businesses through innovative IT solutions and cutting-edge technology.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@goaurex.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  Data Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  Email Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  Data Visualization
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  Careers
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-lg">Connect With Us</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Follow us on social media for the latest updates
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/company/goaurex" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-full bg-gradient-to-br from-muted to-muted/50 hover:from-primary hover:to-primary-foreground transition-all duration-300 flex items-center justify-center group hover:shadow-glow hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a 
                href="https://twitter.com/goaurex" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-full bg-gradient-to-br from-muted to-muted/50 hover:from-primary hover:to-primary-foreground transition-all duration-300 flex items-center justify-center group hover:shadow-glow hover:scale-110"
                aria-label="Twitter"
              >
                <BsTwitterX className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/goaurex" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-full bg-gradient-to-br from-muted to-muted/50 hover:from-primary hover:to-primary-foreground transition-all duration-300 flex items-center justify-center group hover:shadow-glow hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a 
                href="https://www.youtube.com/@goaurex" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-full bg-gradient-to-br from-muted to-muted/50 hover:from-primary hover:to-primary-foreground transition-all duration-300 flex items-center justify-center group hover:shadow-glow hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GOAUREX. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-conditions" className="hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <a href="/cookie-policy" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
