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
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0" style={{
      transform: `translateY(${scrollY * 0.5}px)`
    }}>
        <img src={heroImage} alt="Tech visualization background showcasing AI and cloud solutions" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Animated Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 animate-pulse" style={{
      backgroundImage: `linear-gradient(hsl(20 100% 50% / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(20 100% 50% / 0.1) 1px, transparent 1px)`,
      backgroundSize: '50px 50px'
    }} />

      {/* Floating Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" style={{
        animationDelay: "1s"
      }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left animate-fade-in">
            {/* Badge with shimmer effect */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary animate-float" />
              <span className="text-sm font-medium bg-gradient-primary bg-clip-text text-transparent">AI-Powered Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{
              animationDelay: "0.1s"
            }}>
              Elevate Your Business with
              <span className="block bg-gradient-primary bg-clip-text text-transparent mt-2 bg-[length:200%_auto] animate-gradient-shift">Gen AI Solution</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{
              animationDelay: "0.2s"
            }}>
              Transform your operations with cutting-edge AI technology, cloud solutions, and data-driven insights that drive real business results.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-8 animate-fade-in" style={{
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
              }].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-scale-in" style={{
              animationDelay: "0.4s"
            }}>
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 px-8 py-6 group text-lg">
                <a href="#services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 text-lg px-8 py-6">
                <a href="/contact">Schedule Consultation</a>
              </Button>
            </div>
          </div>

          {/* Right Column - Stats & Visual Elements */}
          <div className="relative animate-fade-in" style={{
            animationDelay: "0.5s"
          }}>
            <div className="grid grid-cols-2 gap-6">
              {/* Stat Card 1 */}
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary hover:scale-105 transition-all duration-300 hover:shadow-glow">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary hover:scale-105 transition-all duration-300 hover:shadow-glow mt-8">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary hover:scale-105 transition-all duration-300 hover:shadow-glow">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Expert Support</div>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary hover:scale-105 transition-all duration-300 hover:shadow-glow mt-8">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="w-full h-full bg-gradient-primary opacity-10 blur-3xl rounded-full animate-glow-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-float z-10">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2 mx-0 px-[8px]">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-float" />
        </div>
      </div>
    </section>;
};
export default Hero;