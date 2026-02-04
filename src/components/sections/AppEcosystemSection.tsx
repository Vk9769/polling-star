import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Users, 
  UserCheck, 
  Settings, 
  TrendingUp,
  ArrowRight,
  Check
} from "lucide-react";
import { Link } from "react-router-dom";

const apps = [
  {
    id: "voter",
    icon: Smartphone,
    name: "Voter App",
    tagline: "Stay informed, engaged, and connected",
    features: [
      "View voting status & polling booth location",
      "Emergency services & live updates",
      "Report issues and participate in CityPulse",
      "Selfie-based vote confirmation"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "campaigner",
    icon: Users,
    name: "Campaigner App",
    tagline: "Ground-level campaign execution",
    features: [
      "Convert voters using direct communication",
      "Track voter conversion progress",
      "Manage booth-wise voter lists",
      "Real-time field updates"
    ],
    color: "from-green-500 to-green-600"
  },
  {
    id: "agent",
    icon: UserCheck,
    name: "Agent App",
    tagline: "Polling booth operations",
    features: [
      "Mark voter voting status on polling day",
      "Track booth-level turnout",
      "Verify voter categories",
      "Real-time sync with admin"
    ],
    color: "from-amber-500 to-orange-500"
  },
  {
    id: "admin",
    icon: Settings,
    name: "Admin App",
    tagline: "Central control system",
    features: [
      "Monitor voters, booths, and reports",
      "Manage agents and campaigners",
      "Broadcast messages and updates",
      "Complete election oversight"
    ],
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "candidate",
    icon: TrendingUp,
    name: "Candidate App",
    tagline: "Strategic decision-making",
    features: [
      "View performance analytics & graphs",
      "Monitor winning probability",
      "Track team and campaign progress",
      "Data-driven winning strategies"
    ],
    color: "from-red-500 to-red-600"
  },
];

export function AppEcosystemSection() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Application Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Purpose-Built Apps for Every Role
          </h2>
          <p className="text-lg text-muted-foreground">
            Polling Star is a multi-application platform where each app serves a specific role in ensuring efficient operations, voter engagement, and election success.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <div
              key={app.id}
              className="app-card bg-card hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Top Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${app.color}`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-5`}>
                <app.icon className="w-7 h-7 text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                {app.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-5">
                {app.tagline}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {app.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <Link to="/polling-star">
              Explore Full Platform
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
