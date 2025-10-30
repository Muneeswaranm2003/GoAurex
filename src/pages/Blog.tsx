import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const blogPosts = [
  {
    id: "future-cloud-computing-2025",
    title: "The Future of Cloud Computing in 2025",
    author: "Sarah Johnson",
    date: "October 15, 2025",
    category: "Cloud Solutions",
    excerpt: "Explore the latest trends and innovations shaping the future of cloud infrastructure and how businesses can leverage them for growth.",
    readTime: "5 min read",
    content: `
      <h2>Introduction</h2>
      <p>Cloud computing continues to evolve at a rapid pace, transforming how businesses operate and scale their operations. As we move through 2025, several key trends are emerging that will shape the future of cloud infrastructure.</p>
      
      <h2>Key Trends</h2>
      <p>Multi-cloud strategies are becoming the norm, with organizations leveraging multiple cloud providers to optimize costs and avoid vendor lock-in. Edge computing is also gaining traction, bringing computation closer to data sources for reduced latency.</p>
      
      <h2>Security and Compliance</h2>
      <p>With increased cloud adoption comes heightened focus on security. Zero-trust architectures and AI-powered security tools are becoming essential components of cloud infrastructure.</p>
      
      <h2>Conclusion</h2>
      <p>The future of cloud computing is bright, with innovations in AI, machine learning, and edge computing opening new possibilities for businesses of all sizes.</p>
    `
  },
  {
    id: "maximizing-roi-data-analytics",
    title: "Maximizing ROI with Data Analytics",
    author: "Michael Chen",
    date: "October 10, 2025",
    category: "Data Solutions",
    excerpt: "Learn how modern data analytics tools can transform your business intelligence and drive measurable results.",
    readTime: "7 min read",
    content: `
      <h2>The Power of Data</h2>
      <p>In today's data-driven world, organizations that effectively leverage analytics gain significant competitive advantages. This article explores proven strategies for maximizing return on investment through data analytics.</p>
      
      <h2>Implementing Analytics</h2>
      <p>Start by identifying key performance indicators that align with your business objectives. Invest in the right tools and build a team with the necessary skills to interpret and act on insights.</p>
      
      <h2>Measuring Success</h2>
      <p>Track metrics that matter and continuously refine your approach based on results. Data analytics is an ongoing journey of improvement and optimization.</p>
    `
  },
  {
    id: "email-marketing-trends-2025",
    title: "Email Marketing Trends for 2025",
    author: "Emily Rodriguez",
    date: "October 5, 2025",
    category: "Email Marketing",
    excerpt: "Discover the latest email marketing strategies that are driving engagement and conversions in today's digital landscape.",
    readTime: "6 min read",
    content: `
      <h2>Personalization at Scale</h2>
      <p>Email marketing in 2025 is all about delivering personalized experiences at scale. AI-powered tools enable marketers to create highly targeted campaigns that resonate with individual recipients.</p>
      
      <h2>Interactive Content</h2>
      <p>Static emails are giving way to interactive experiences with embedded videos, surveys, and dynamic content that adapts to user behavior.</p>
      
      <h2>Mobile-First Design</h2>
      <p>With mobile devices accounting for the majority of email opens, responsive design is no longer optional but essential for campaign success.</p>
    `
  },
  {
    id: "building-effective-data-visualizations",
    title: "Building Effective Data Visualizations",
    author: "David Kim",
    date: "September 28, 2025",
    category: "Data Visualization",
    excerpt: "Master the art of creating compelling data visualizations that tell stories and drive business decisions.",
    readTime: "8 min read",
    content: `
      <h2>The Art and Science</h2>
      <p>Effective data visualization combines aesthetic design with analytical rigor. The goal is to make complex data accessible and actionable for decision-makers.</p>
      
      <h2>Best Practices</h2>
      <p>Choose the right chart type for your data, maintain consistency in design elements, and always prioritize clarity over complexity.</p>
      
      <h2>Tools and Techniques</h2>
      <p>Modern BI tools offer powerful visualization capabilities, but success depends on understanding your audience and their needs.</p>
    `
  },
  {
    id: "cloud-security-best-practices",
    title: "Cloud Security Best Practices",
    author: "Lisa Anderson",
    date: "September 20, 2025",
    category: "Cloud Solutions",
    excerpt: "Essential security measures every organization should implement when moving to the cloud.",
    readTime: "6 min read",
    content: `
      <h2>Security First</h2>
      <p>Cloud security requires a comprehensive approach that addresses identity management, data encryption, and network security.</p>
      
      <h2>Key Measures</h2>
      <p>Implement multi-factor authentication, regular security audits, and automated threat detection to protect your cloud infrastructure.</p>
      
      <h2>Compliance</h2>
      <p>Ensure your cloud setup meets industry-specific compliance requirements and maintains proper documentation.</p>
    `
  },
  {
    id: "ai-machine-learning-business",
    title: "AI and Machine Learning in Business",
    author: "James Wilson",
    date: "September 15, 2025",
    category: "Data Solutions",
    excerpt: "How artificial intelligence and machine learning are revolutionizing business operations and decision-making.",
    readTime: "9 min read",
    content: `
      <h2>The AI Revolution</h2>
      <p>Artificial intelligence and machine learning are no longer futuristic concepts but practical tools driving business transformation across industries.</p>
      
      <h2>Applications</h2>
      <p>From predictive analytics to automated customer service, AI is enabling organizations to operate more efficiently and make better decisions.</p>
      
      <h2>Getting Started</h2>
      <p>Begin with clearly defined use cases, invest in quality data, and build cross-functional teams to drive AI adoption.</p>
    `
  }
];

const Blog = () => {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: 'Newsletter Subscriber',
          email: email,
          subject: 'Newsletter Subscription',
          message: `A new user has subscribed to the newsletter with email: ${email}`
        }
      });

      if (error) throw error;

      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter. You'll receive our latest updates in your inbox.",
      });
      setEmail("");
      setIsSubscribeOpen(false);
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Subscription Failed",
        description: "There was an error subscribing. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, trends, and best practices from our team of IT experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 group flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                    <span className="ml-auto text-primary">{post.readTime}</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3 w-fit">
                    {post.category}
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary" onClick={() => window.location.href = `/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest insights, articles, and updates directly in your inbox.
            </p>
            <Button size="lg" onClick={() => setIsSubscribeOpen(true)}>
              Subscribe Now
            </Button>
          </div>
        </div>
      </main>
      
      <Dialog open={isSubscribeOpen} onOpenChange={setIsSubscribeOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Subscribe to Our Newsletter</DialogTitle>
            <DialogDescription>
              Enter your email address to receive our latest blog posts and updates.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubscribe} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe Now"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Blog;
