import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Cloud, Mail, BarChart3, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Database,
    title: "Data Solutions",
    description: "Comprehensive data management, analytics, and integration services to unlock the full potential of your business data.",
    features: ["Data Warehousing", "ETL Processes", "Data Migration", "Database Optimization"],
    details: "Our data solutions help businesses transform raw data into actionable insights. We specialize in building robust data warehouses, implementing efficient ETL processes, seamless data migration, and optimizing database performance for maximum efficiency. Whether you're dealing with structured or unstructured data, our team ensures your data infrastructure is scalable, secure, and ready for the future."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services designed to enhance performance, security, and flexibility.",
    features: ["Cloud Migration", "AWS/Azure/GCP", "DevOps Integration", "Cloud Security"],
    details: "Transform your infrastructure with our cloud solutions. We provide end-to-end cloud migration services across AWS, Azure, and GCP platforms. Our DevOps integration ensures seamless deployment and continuous delivery, while our cloud security measures protect your assets. Experience improved scalability, reduced costs, and enhanced performance with our tailored cloud strategies."
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Strategic email marketing campaigns that drive engagement, conversions, and customer loyalty at scale.",
    features: ["Campaign Design", "Automation", "Analytics & Reporting", "List Management"],
    details: "Maximize your email marketing ROI with our strategic campaigns. From eye-catching campaign designs to sophisticated automation workflows, we help you reach the right audience at the right time. Our comprehensive analytics and reporting provide insights into campaign performance, while our list management ensures your messages reach engaged subscribers who convert."
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Transform complex data into intuitive, interactive visualizations that drive informed business decisions.",
    features: ["Dashboard Design", "BI Tools Integration", "Custom Reports", "Real-time Analytics"],
    details: "Make data-driven decisions with confidence using our visualization solutions. We create stunning, interactive dashboards that transform complex datasets into clear, actionable insights. Our BI tools integration connects your data sources seamlessly, while custom reports deliver the metrics that matter most to your business. Real-time analytics keep you informed and ahead of the competition."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16 animate-fade-in max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive IT solutions tailored to drive your business forward. We combine cutting-edge technology with industry expertise to deliver exceptional results.
              </p>
            </div>

            {/* Services Grid */}
            <div className="space-y-16 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:shadow-elegant group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all">
                        <service.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-3xl mb-3">{service.title}</CardTitle>
                        <CardDescription className="text-lg">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.details}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-4 text-lg">Key Features:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg bg-background/50">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tools & Technologies Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Tools & <span className="bg-gradient-primary bg-clip-text text-transparent">Technologies Used</span>
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  We leverage cutting-edge tools and platforms to deliver exceptional results
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { name: "AWS", category: "Cloud" },
                  { name: "Azure", category: "Cloud" },
                  { name: "Google Cloud", category: "Cloud" },
                  { name: "Terraform", category: "DevOps" },
                  { name: "Docker", category: "DevOps" },
                  { name: "Kubernetes", category: "DevOps" },
                  { name: "MySQL", category: "Database" },
                  { name: "PostgreSQL", category: "Database" },
                  { name: "MongoDB", category: "Database" },
                  { name: "Apache Spark", category: "Big Data" },
                  { name: "Python", category: "Analytics" },
                  { name: "Tableau", category: "Visualization" },
                  { name: "Power BI", category: "Visualization" },
                  { name: "HubSpot", category: "Email Marketing" },
                  { name: "SendGrid", category: "Email Marketing" },
                  { name: "Elastic Email", category: "Email Marketing" },
                  { name: "Zoho", category: "CRM Tools" },
                  { name: "Salesforce", category: "CRM Tools" },
                  { name: "Apollo", category: "CRM Tools" },
                ].map((tech, idx) => (
                  <Card 
                    key={idx} 
                    className="bg-card/30 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:shadow-elegant group text-center p-6"
                  >
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {tech.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">{tech.category}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 p-12 rounded-2xl bg-gradient-primary relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMjQgMThjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6TTEyIDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02em0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02em0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-20" />
              <div className="relative z-10 text-center text-primary-foreground">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  Let's discuss how our services can help you achieve your business goals
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us Today
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
