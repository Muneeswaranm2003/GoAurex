import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import iconDataSolutions from "@/assets/icon-data-solutions.png";
import iconCloudSolutions from "@/assets/icon-cloud-solutions.png";
import iconEmailMarketing from "@/assets/icon-email-marketing.png";
import iconDataVisualization from "@/assets/icon-data-visualization.png";
const services = [{
  icon: iconDataSolutions,
  title: "Data Solutions",
  description: "Comprehensive data management, analytics, and integration services to unlock the full potential of your business data.",
  features: ["Data Warehousing", "ETL Processes", "Data Migration", "Database Optimization"]
}, {
  icon: iconCloudSolutions,
  title: "Cloud Solutions",
  description: "Scalable cloud infrastructure and migration services designed to enhance performance, security, and flexibility.",
  features: ["Cloud Migration", "AWS/Azure/GCP", "DevOps Integration", "Cloud Security"]
}, {
  icon: iconEmailMarketing,
  title: "Email Marketing",
  description: "Strategic email marketing campaigns that drive engagement, conversions, and customer loyalty at scale.",
  features: ["Campaign Design", "Automation", "Analytics & Reporting", "List Management"]
}, {
  icon: iconDataVisualization,
  title: "Data Visualization",
  description: "Transform complex data into intuitive, interactive visualizations that drive informed business decisions.",
  features: ["Dashboard Design", "BI Tools Integration", "Custom Reports", "Real-time Analytics"]
}];
const Services = () => {
  return <section id="services" className="py-20 lg:py-32 relative bg-muted/30">
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
          {services.map((service, index) => <Card key={index} className="bg-card backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in-up" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <CardHeader>
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                  <img src={service.icon} alt={`${service.title} icon`} className="w-full h-full object-contain rounded-lg" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" onClick={() => window.location.href = '/services'}>Explore More</Button>
        </div>
      </div>
    </section>;
};
export default Services;