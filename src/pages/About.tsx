import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Users, Target, Award, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const benefits = [
  "AI-powered solutions with advanced machine learning capabilities",
  "Tailored solutions designed for your unique business needs",
  "24/7 dedicated support and maintenance",
  "Trusted by 500+ businesses leveraging AI transformation",
  "Cutting-edge technology and best practices",
  "Transparent pricing with no hidden costs"
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to helping businesses harness the power of AI and technology to achieve their goals and drive sustainable growth."
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our success. We prioritize understanding your unique challenges and delivering solutions that exceed expectations."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We stay ahead of the curve, constantly exploring new technologies and methodologies to bring you cutting-edge solutions."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Quality is non-negotiable. We maintain the highest standards in everything we do, from code to customer service."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  About <span className="bg-gradient-primary bg-clip-text text-transparent">GoAurex</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  We're a team of passionate technologists dedicated to transforming businesses through innovative AI and IT solutions. With years of experience and hundreds of successful projects, we bring expertise, creativity, and commitment to every partnership.
                </p>
              </div>

              {/* Story Section */}
              <Card className="mb-16 bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      GoAurex was founded with a simple yet powerful vision: to make advanced technology accessible and beneficial for businesses of all sizes. What started as a small team of AI enthusiasts has grown into a comprehensive technology partner serving over 500 clients worldwide.
                    </p>
                    <p>
                      We combine technical excellence with business insight to deliver solutions that truly make a difference. Our approach is collaborative, transparent, and results-focused. We don't just implement technology – we help you understand it, leverage it, and use it to gain a competitive advantage.
                    </p>
                    <p>
                      Today, we're proud to be at the forefront of AI innovation, helping businesses automate processes, gain insights from their data, and create exceptional digital experiences for their customers.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Values Section */}
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Our <span className="bg-gradient-primary bg-clip-text text-transparent">Values</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <Card 
                      key={index} 
                      className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:shadow-elegant group"
                    >
                      <CardContent className="p-8">
                        <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all">
                          <value.icon className="h-7 w-7 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">GoAurex</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors"
                    >
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="p-12 rounded-2xl bg-gradient-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMjQgMThjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6TTEyIDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02em0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02em0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-20" />
                <div className="relative z-10 text-center text-primary-foreground">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                    Let's discuss how our solutions can drive your success
                  </p>
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
