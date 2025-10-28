import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones } from "lucide-react";
const Contact = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 lg:py-32 relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Ready to elevate your business? Contact us today for a free consultation and let's discuss how we can help you achieve your goals.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[{
                icon: Mail,
                title: "Email Us",
                detail: "contact@goaurex.com",
                subdetal: "We'll respond within 24 hours"
              }, {
                icon: Phone,
                title: "Call Us",
                detail: "+1 (555) 123-4567",
                subdetal: "Mon-Fri 9am-6pm EST"
              }, {
                icon: MapPin,
                title: "Visit Us",
                detail: "123 Tech Street",
                subdetal: "Silicon Valley, CA 94025"
              }].map((item, index) => <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:shadow-elegant group">
                    <CardContent className="pt-6 text-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all">
                        <item.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                      <p className="text-foreground font-medium mb-1">{item.detail}</p>
                      <p className="text-sm text-muted-foreground">{item.subdetal}</p>
                    </CardContent>
                  </Card>)}
              </div>

              {/* Additional Info Cards */}
              

              {/* Contact Form */}
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-2 text-center">Send Us a Message</h2>
                  <p className="text-muted-foreground text-center mb-8">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="John Doe" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <input type="email" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="john@company.com" required />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Company</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Your Company Name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <input type="tel" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="How can we help you?" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <textarea rows={6} className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none" placeholder="Tell us about your project or question..." required />
                    </div>
                    <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all py-6 text-lg">
                      Send Message
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Map or Additional CTA */}
              <div className="mt-12 p-12 rounded-2xl bg-gradient-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMjQgMThjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6TTEyIDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02em0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02em0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-20" />
                <div className="relative z-10 text-center text-primary-foreground">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Prefer to Schedule a Call?
                  </h3>
                  <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                    Book a free 30-minute consultation to discuss your project needs
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Contact;