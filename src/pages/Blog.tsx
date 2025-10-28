import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Cloud Computing in 2025",
    author: "Sarah Johnson",
    date: "October 15, 2025",
    category: "Cloud Solutions",
    excerpt: "Explore the latest trends and innovations shaping the future of cloud infrastructure and how businesses can leverage them for growth.",
    readTime: "5 min read"
  },
  {
    title: "Maximizing ROI with Data Analytics",
    author: "Michael Chen",
    date: "October 10, 2025",
    category: "Data Solutions",
    excerpt: "Learn how modern data analytics tools can transform your business intelligence and drive measurable results.",
    readTime: "7 min read"
  },
  {
    title: "Email Marketing Trends for 2025",
    author: "Emily Rodriguez",
    date: "October 5, 2025",
    category: "Email Marketing",
    excerpt: "Discover the latest email marketing strategies that are driving engagement and conversions in today's digital landscape.",
    readTime: "6 min read"
  },
  {
    title: "Building Effective Data Visualizations",
    author: "David Kim",
    date: "September 28, 2025",
    category: "Data Visualization",
    excerpt: "Master the art of creating compelling data visualizations that tell stories and drive business decisions.",
    readTime: "8 min read"
  },
  {
    title: "Cloud Security Best Practices",
    author: "Lisa Anderson",
    date: "September 20, 2025",
    category: "Cloud Solutions",
    excerpt: "Essential security measures every organization should implement when moving to the cloud.",
    readTime: "6 min read"
  },
  {
    title: "AI and Machine Learning in Business",
    author: "James Wilson",
    date: "September 15, 2025",
    category: "Data Solutions",
    excerpt: "How artificial intelligence and machine learning are revolutionizing business operations and decision-making.",
    readTime: "9 min read"
  }
];

const Blog = () => {
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
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
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
            <Button size="lg" onClick={() => window.location.href = '/contact'}>
              Subscribe Now
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
