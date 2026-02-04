import { 
  BarChart3, 
  Users, 
  MapPin, 
  Shield, 
  Smartphone, 
  Zap,
  Vote,
  Building2
} from "lucide-react";

const features = [
  {
    icon: Vote,
    title: "Polling Star",
    description: "Complete election management ecosystem connecting voters, candidates, campaigners, and administrators.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Building2,
    title: "CityPulse",
    description: "Smart city platform for citizen reporting, issue tracking, and urban governance transparency.",
    color: "bg-accent/10 text-accent"
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Live dashboards for voter turnout, booth performance, and campaign progress monitoring.",
    color: "bg-success/10 text-success"
  },
  {
    icon: Users,
    title: "Voter Engagement",
    description: "Direct communication tools, issue reporting, and selfie-based vote confirmation.",
    color: "bg-warning/10 text-warning"
  },
  {
    icon: MapPin,
    title: "Booth Management",
    description: "GPS-enabled booth tracking, agent coordination, and real-time status updates.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "End-to-end encryption, secure voter profiles, and data protection compliance.",
    color: "bg-accent/10 text-accent"
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Purpose-built mobile apps for every stakeholder in the election ecosystem.",
    color: "bg-success/10 text-success"
  },
  {
    icon: Zap,
    title: "AI-Powered Insights",
    description: "Predictive analytics, voter behavior analysis, and smart resource allocation.",
    color: "bg-warning/10 text-warning"
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Platform
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Everything You Need to Win
          </h2>
          <p className="text-lg text-muted-foreground">
            Integrated election management and smart city solutions designed to maximize winning probability and citizen satisfaction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-interactive p-6 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`feature-icon ${feature.color} mb-5 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
