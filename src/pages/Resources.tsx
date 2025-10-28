import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Video, BookOpen, Download } from "lucide-react";

const resources = [
  {
    icon: FileText,
    category: "Whitepapers",
    items: [
      {
        title: "Cloud Migration Best Practices",
        description: "A comprehensive guide to successfully migrating your infrastructure to the cloud.",
        downloadUrl: "#"
      },
      {
        title: "Data Analytics in Modern Business",
        description: "How to leverage data analytics for competitive advantage and growth.",
        downloadUrl: "#"
      },
      {
        title: "Email Marketing ROI Guide",
        description: "Strategies to maximize return on investment from email campaigns.",
        downloadUrl: "#"
      }
    ]
  },
  {
    icon: Video,
    category: "Webinars",
    items: [
      {
        title: "Digital Transformation Workshop",
        description: "Learn how to successfully transform your business with modern IT solutions.",
        downloadUrl: "#"
      },
      {
        title: "Data Visualization Masterclass",
        description: "Master the art of turning complex data into actionable insights.",
        downloadUrl: "#"
      }
    ]
  },
  {
    icon: BookOpen,
    category: "Case Studies",
    items: [
      {
        title: "Enterprise Cloud Migration Success",
        description: "How we helped a Fortune 500 company migrate to cloud infrastructure.",
        downloadUrl: "#"
      },
      {
        title: "E-commerce Data Analytics Transformation",
        description: "Implementing real-time analytics for a leading e-commerce platform.",
        downloadUrl: "#"
      },
      {
        title: "Email Campaign Optimization",
        description: "Achieving 300% ROI increase through strategic email marketing.",
        downloadUrl: "#"
      }
    ]
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Resources & <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of whitepapers, case studies, and webinars to help you make informed decisions about your IT strategy
            </p>
          </div>

          <div className="space-y-12">
            {resources.map((resourceGroup, groupIndex) => (
              <div key={groupIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <resourceGroup.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold">{resourceGroup.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resourceGroup.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-elegant transition-all duration-300 group">
                      <CardHeader>
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" className="w-full" asChild>
                          <a href={item.downloadUrl} download>
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need More Information?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you with any questions or custom resource needs.
            </p>
            <Button size="lg" onClick={() => window.location.href = '/contact'}>
              Contact Our Team
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
