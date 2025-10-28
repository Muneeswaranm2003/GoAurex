import { TrendingUp, Users, Award, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
    description: "Businesses transformed"
  },
  {
    icon: Award,
    value: "98%",
    label: "Success Rate",
    description: "Project completion"
  },
  {
    icon: TrendingUp,
    value: "250%",
    label: "Average ROI",
    description: "Client performance boost"
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Support",
    description: "Always here for you"
  }
];

const Stats = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proven results that speak for themselves
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-subtle border border-border hover:border-primary transition-all duration-300 hover:shadow-elegant group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-5xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                {stat.value}
              </h3>
              
              <p className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </p>
              
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
