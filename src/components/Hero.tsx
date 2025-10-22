import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Tech visualization background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
      backgroundImage: `linear-gradient(hsl(217 91% 60% / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(217 91% 60% / 0.1) 1px, transparent 1px)`,
      backgroundSize: '50px 50px'
    }} />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-primary bg-clip-text text-transparent mt-2">
              Cutting-Edge IT Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">GoAurex harnesses the power of Artificial Intelligence to transform your data management, automate cloud operations, and deliver hyper-personalized customer engagement.</p>

          

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
            {[{
            value: "500+",
            label: "Clients"
          }, {
            value: "98%",
            label: "Satisfaction"
          }, {
            value: "24/7",
            label: "Support"
          }, {
            value: "15+",
            label: "Years Experience"
          }].map((stat, index) => <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;