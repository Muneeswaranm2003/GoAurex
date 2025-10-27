import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Cloud, Mail, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data Solutions",
    description: "Comprehensive data management, analytics, and integration services to unlock the full potential of your business data.",
    features: ["Data Warehousing", "ETL Processes", "Data Migration", "Database Optimization"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services designed to enhance performance, security, and flexibility.",
    features: ["Cloud Migration", "AWS/Azure/GCP", "DevOps Integration", "Cloud Security"]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Strategic email marketing campaigns that drive engagement, conversions, and customer loyalty at scale.",
    features: ["Campaign Design", "Automation", "Analytics & Reporting", "List Management"]
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Transform complex data into intuitive, interactive visualizations that drive informed business decisions.",
    features: ["Dashboard Design", "BI Tools Integration", "Custom Reports", "Real-time Analytics"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 relative" style={{ backgroundColor: 'hsl(var(--section-light))', color: 'hsl(var(--section-dark))' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to drive your business forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:shadow-elegant group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = '/services'}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
