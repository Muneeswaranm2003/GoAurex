import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";
const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0" style={{
      transform: `translateY(${scrollY * 0.5}px)`
    }}>
        <img src={heroImage} alt="Tech visualization background showcasing AI and cloud solutions" className="w-full h-full object-cover opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/5" />
      </div>

      {/* Animated Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
      backgroundImage: `linear-gradient(hsl(24 95% 53% / 0.15) 1.5px, transparent 1.5px),
                           linear-gradient(90deg, hsl(24 95% 53% / 0.15) 1.5px, transparent 1.5px)`,
      backgroundSize: '60px 60px',
      animation: 'pulse 4s ease-in-out infinite'
    }} />

      {/* Floating Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-float-slow" style={{
        animationDelay: "2s"
      }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-float" style={{
        animationDelay: "1s"
      }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="text-left space-y-8 animate-fade-in">
            {/* Badge with shimmer effect */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 backdrop-blur-sm shadow-lg shadow-primary/5">
              <Sparkles className="w-5 h-5 text-primary animate-float" />
              <span className="text-sm font-semibold text-primary">AI-Powered Solutions</span>
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-[1.1] tracking-tight" style={{
                animationDelay: "0.1s"
              }}>
                Elevate Your Business with
                <span className="block text-primary mt-3 drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]">Gen AI Solution</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-xl animate-fade-in" style={{
              animationDelay: "0.2s"
            }}>
              Transform your operations with cutting-edge AI technology, cloud solutions, and data-driven insights that drive real business results.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-2 animate-fade-in" style={{
              animationDelay: "0.3s"
            }}>
              {[{
                icon: Zap,
                text: "Lightning Fast",
                color: "from-primary/20 to-primary/10"
              }, {
                icon: Shield,
                text: "Enterprise Secure",
                color: "from-secondary/20 to-secondary/10"
              }, {
                icon: TrendingUp,
                text: "Proven Results",
                color: "from-primary/20 to-primary/10"
              }].map((feature, index) => (
                <div key={index} className={`flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${feature.color} border border-primary/20 hover:border-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group`}>
                  <feature.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-scale-in" style={{
              animationDelay: "0.4s"
            }}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 px-10 py-7 group text-lg font-semibold rounded-xl">
                <a href="#services" className="flex items-center">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary hover:scale-105 transition-all duration-300 text-lg px-10 py-7 font-semibold rounded-xl backdrop-blur-sm">
                <a href="/contact">Schedule Consultation</a>
              </Button>
            </div>
          </div>

          {/* Right Column - Stats & Visual Elements */}
          <div className="relative animate-fade-in lg:pl-8" style={{
            animationDelay: "0.5s"
          }}>
            <div className="grid grid-cols-2 gap-5">
              {/* Stat Card 1 */}
              <div className="group relative bg-gradient-to-br from-card to-card/50 backdrop-blur-xl border-2 border-border/50 rounded-3xl p-8 hover:border-primary/50 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-black text-primary mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">Projects Delivered</div>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="group relative bg-gradient-to-br from-card to-card/50 backdrop-blur-xl border-2 border-border/50 rounded-3xl p-8 hover:border-primary/50 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 mt-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-black text-primary mb-3 group-hover:scale-110 transition-transform duration-300">98%</div>
                  <div className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">Client Satisfaction</div>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="group relative bg-gradient-to-br from-card to-card/50 backdrop-blur-xl border-2 border-border/50 rounded-3xl p-8 hover:border-primary/50 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-black text-primary mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">Expert Support</div>
                </div>
              </div>

              {/* Stat Card 4 */}
              <div className="group relative bg-gradient-to-br from-card to-card/50 backdrop-blur-xl border-2 border-border/50 rounded-3xl p-8 hover:border-primary/50 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 mt-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-black text-primary mb-3 group-hover:scale-110 transition-transform duration-300">10+</div>
                  <div className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 blur-3xl rounded-full animate-glow-pulse"></div>
            </div>
            
            {/* Accent circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/20 rounded-full blur-2xl animate-float-slow"></div>
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