import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";
const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0" style={{
      transform: `translateY(${scrollY * 0.5}px)`
    }}>
        <img src={heroImage} alt="Tech visualization background showcasing AI and cloud solutions" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Animated Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.06]" style={{
      backgroundImage: `linear-gradient(hsl(0 0% 20%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(0 0% 20%) 1px, transparent 1px)`,
      backgroundSize: '60px 60px',
      animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
    }} />

      {/* Floating Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] animate-float-slow" style={{
        animationDelay: "1s"
      }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-pulse" style={{
        animationDuration: "8s"
      }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge with shimmer effect */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/30 animate-fade-in shadow-lg shadow-primary/10">
            <Sparkles className="w-4 h-4 text-primary animate-float" />
            <span className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">AI-Powered Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.1] animate-fade-in-up tracking-tight" style={{
          animationDelay: "0.1s"
        }}>
            Elevate Your Business with
            <span className="block bg-gradient-primary bg-clip-text text-transparent mt-3 md:mt-4 bg-[length:200%_auto] animate-gradient-shift" style={{ animationDelay: "0.2s" }}>Gen AI Solutions</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in leading-relaxed" style={{
          animationDelay: "0.2s"
        }}>
            Transform your operations with cutting-edge artificial intelligence and unlock unprecedented growth potential
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center mb-12 animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
            {[{
            icon: Zap,
            text: "Lightning Fast"
          }, {
            icon: Shield,
            text: "Enterprise Secure"
          }, {
            icon: Sparkles,
            text: "AI-Enhanced"
          }].map((feature, index) => <div key={index} className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-card backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/5 hover:shadow-md hover:shadow-primary/10 hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in-up" style={{
            animationDelay: `${0.4 + index * 0.1}s`
          }}>
                <feature.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">{feature.text}</span>
              </div>)}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24 sm:mb-32 md:mb-40 animate-scale-in" style={{
          animationDelay: "0.5s"
        }}>
            <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 px-8 py-6 group text-base sm:text-lg font-semibold">
              <a href="#services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-base sm:text-lg font-semibold px-8 py-6 backdrop-blur-sm bg-card">
              <a href="/contact">Schedule Consultation</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 animate-float z-10">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-float shadow-glow" />
        </div>
      </div>
    </section>;
};
export default Hero;