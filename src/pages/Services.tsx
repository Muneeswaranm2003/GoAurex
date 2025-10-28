import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Cloud, Mail, BarChart3, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Database,
    title: "Enterprise Data Management",
    description: "End-to-end data solutions that transform raw information into strategic business assets with advanced analytics and AI-powered insights.",
    features: [
      "Data Warehouse Architecture & Implementation",
      "Advanced ETL/ELT Pipeline Development", 
      "Master Data Management (MDM)",
      "Data Quality & Governance",
      "Big Data Processing & Analytics",
      "Data Lake Design & Optimization"
    ],
    details: "Our enterprise data management services empower organizations to harness the full potential of their data assets. We architect and implement scalable data warehouses using industry-leading platforms, design efficient ETL/ELT pipelines for seamless data integration, and establish robust data governance frameworks. From data quality assessment to master data management, we ensure your data is accurate, consistent, and accessible across your organization, enabling data-driven decision-making at every level."
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    description: "Comprehensive cloud solutions with multi-cloud expertise, infrastructure automation, and enterprise-grade security implementations.",
    features: [
      "Multi-Cloud Architecture (AWS, Azure, GCP)",
      "Cloud Migration & Modernization",
      "Infrastructure as Code (IaC)",
      "CI/CD Pipeline Implementation",
      "Container Orchestration (Kubernetes)",
      "Cloud Cost Optimization"
    ],
    details: "Accelerate your digital transformation with our cloud infrastructure and DevOps services. We design and implement secure, scalable cloud architectures across AWS, Azure, and Google Cloud Platform. Our expertise includes containerization with Docker and Kubernetes, infrastructure automation using Terraform and CloudFormation, and building robust CI/CD pipelines. We help organizations reduce operational costs, improve deployment velocity, and enhance system reliability through modern DevOps practices and cloud-native technologies."
  },
  {
    icon: Mail,
    title: "Email Marketing Solutions",
    description: "Comprehensive email marketing services with strategic campaign design, automation workflows, and performance optimization.",
    features: [
      "Email Campaign Strategy & Design",
      "Marketing Automation Workflows",
      "List Segmentation & Personalization",
      "Deliverability & Inbox Optimization",
      "A/B Testing & Performance Analytics",
      "ESP Integration & Management"
    ],
    details: "Transform your email marketing with our end-to-end email solutions. We develop targeted email campaigns that drive engagement and conversions, implement sophisticated automation workflows for lead nurturing, and optimize deliverability to ensure your messages reach the inbox. Our expertise spans major email service providers including SendGrid, HubSpot, and Elastic Email. From list building and segmentation to advanced analytics and compliance management, we help you build meaningful customer relationships and maximize email ROI through data-driven strategies and continuous optimization."
  },
  {
    icon: BarChart3,
    title: "Business Intelligence & Analytics",
    description: "Advanced analytics solutions that transform complex data into actionable insights through interactive dashboards and predictive modeling.",
    features: [
      "Enterprise Dashboard Development",
      "Self-Service BI Implementation",
      "Predictive Analytics & ML Models",
      "Real-Time Data Streaming",
      "Custom Reporting Solutions",
      "Data Storytelling & Visualization"
    ],
    details: "Unlock the power of your data with our business intelligence and analytics services. We build comprehensive BI solutions using leading platforms like Tableau, Power BI, and Looker, creating intuitive dashboards that provide real-time visibility into your business operations. Our analytics experts develop predictive models using machine learning algorithms, implement self-service analytics capabilities for business users, and design custom reporting solutions tailored to your KPIs. From data visualization to advanced analytics, we help you discover insights that drive strategic decisions and competitive advantage."
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
                      <h4 className="font-semibold mb-4 text-lg">Key Capabilities:</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground leading-tight">{feature}</span>
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

            <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
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
                  <div
                    key={idx}
                    className="px-4 py-2 rounded-full bg-card/50 border border-border hover:border-primary hover:bg-card transition-all duration-300 hover:shadow-elegant cursor-default group"
                  >
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </div>
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
