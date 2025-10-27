import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-20 lg:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to elevate your business? Contact us today for a free consultation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[{
            icon: Mail,
            title: "Email Us",
            detail: "contact@goaurex.com"
          }, {
            icon: Phone,
            title: "Call Us",
            detail: "+91 63746 29874"
          }, {
            icon: MapPin,
            title: "Visit Us",
            detail: "123 Tech Street, Silicon Valley"
          }].map((item, index) => <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </CardContent>
              </Card>)}
          </div>

          
        </div>
      </div>
    </section>;
};
export default Contact;