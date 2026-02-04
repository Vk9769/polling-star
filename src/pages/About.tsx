import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Campaigns Managed" },
  { value: "10M+", label: "Voters Engaged" },
  { value: "95%", label: "Success Rate" },
];

const values = [
  {
    icon: Target,
    title: "Data-Driven Approach",
    description: "We believe in making decisions backed by real ground-level data and analytics."
  },
  {
    icon: Users,
    title: "Voter-Centric Focus",
    description: "Every strategy is designed to strengthen the connection between voters and leadership."
  },
  {
    icon: Award,
    title: "Excellence in Execution",
    description: "From planning to polling day, we execute with precision and commitment."
  },
  {
    icon: TrendingUp,
    title: "Innovation & Technology",
    description: "Leveraging cutting-edge technology to modernize election management."
  },
];

const timeline = [
  { year: "2015", title: "Foundation", description: "Started with a vision to modernize political consulting in India." },
  { year: "2017", title: "Polling Star Launch", description: "Launched our flagship election management platform." },
  { year: "2019", title: "Major Elections", description: "Successfully managed 100+ campaigns across multiple states." },
  { year: "2021", title: "CityPulse Integration", description: "Extended to smart city governance with CityPulse platform." },
  { year: "2024", title: "Pan-India Presence", description: "Expanded operations to all major states with 500+ campaigns." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-sidebar-accent text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Building Smarter Campaigns
              <span className="text-accent block mt-2">& Smarter Cities</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We provide end-to-end political consulting by combining data-driven strategy, grassroots surveys, and high-impact campaign execution to connect voters with leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background -mt-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-2xl p-8 text-center shadow-card">
                <p className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
                Bridging the Gap Between Voters & Leaders
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Polling Star & CityPulse was founded with a singular vision: to transform how elections are managed and how cities are governed. We believe that technology, when used right, can create a more transparent, efficient, and participatory democracy.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our integrated platform connects all stakeholders in the electoral process - from voters to candidates, from ground-level campaigners to strategic advisors - creating an ecosystem where data drives decisions and every vote matters.
              </p>
              <ul className="space-y-3">
                {["End-to-end election management", "Smart urban governance", "Data-driven decision making", "Transparent and accountable"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-secondary/50 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
              A Decade of Excellence
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
                    {item.year}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-4" />
                  )}
                </div>
                <div className="pt-3">
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Transform Your Campaign?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join 500+ successful campaigns that trust Polling Star for their election management needs.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
