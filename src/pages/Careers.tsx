import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Clock, MapPin } from "lucide-react";

const jobOpenings = [
  {
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our team to build cutting-edge AI solutions that transform businesses."
  },
  {
    title: "Cloud Solutions Architect",
    department: "Engineering",
    location: "Hybrid",
    type: "Full-time",
    description: "Design and implement scalable cloud infrastructure for enterprise clients."
  },
  {
    title: "Data Visualization Specialist",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create compelling data stories through innovative visualization techniques."
  },
  {
    title: "Business Development Manager",
    department: "Sales",
    location: "On-site",
    type: "Full-time",
    description: "Drive growth by building relationships with enterprise clients."
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground">
              Build the future of AI-powered business solutions with us
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Why GoAurex?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Innovation First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Work with cutting-edge AI and cloud technologies
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Growth Focused</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Continuous learning and career development opportunities
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Work-Life Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Flexible hours and remote work options
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                        <CardDescription className="text-base">{job.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <Button>Apply Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
