import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Thompson",
    role: "VP of Operations, GlobalTech",
    content: "The team delivered beyond expectations. Their expertise in cloud infrastructure helped us scale seamlessly while reducing costs by 35%.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  },
  {
    name: "Lisa Anderson",
    role: "Head of Analytics, DataCore",
    content: "Exceptional data solutions! The custom dashboards and analytics platform transformed how we interpret business intelligence.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa"
  },
  {
    name: "James Wilson",
    role: "Digital Marketing Lead, BrandFlow",
    content: "Their email marketing campaigns drove remarkable results. We achieved 3x ROI within the first quarter and continue to see growth.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped transform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/80 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:shadow-elegant group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-6">
                <Quote className="h-10 w-10 text-primary opacity-50" />
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full bg-muted"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
