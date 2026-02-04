import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Camera, Bell, CheckCircle, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import citypulseHero from "@/assets/citypulse-hero.jpg";

const features = [
  {
    icon: MapPin,
    title: "Interactive City Map",
    description: "Live map showing ongoing projects, hazards, traffic congestion, and citizen-reported issues."
  },
  {
    icon: Camera,
    title: "Photo + GPS Reporting",
    description: "Citizens quickly report problems by uploading photos with auto-detected GPS location."
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description: "Push notifications for road closures, power outages, and water supply issues in your area."
  },
  {
    icon: CheckCircle,
    title: "Status Tracking",
    description: "Track issue resolution from Pending → Verified → Resolved with full transparency."
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Officials detect systemic problems with monthly trends and exportable reports."
  },
];

export function CityPulseSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${citypulseHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6">
              CityPulse Platform
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
              Smart Urban Infrastructure
              <br />
              <span className="text-accent">& Citizen Reporting</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              A unified system to track city issues, improve transparency, and empower citizens. 
              Transform how citizens report, how officials respond, and how cities evolve.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-primary-foreground/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="citypulse" size="lg" asChild>
              <Link to="/citypulse">
                Explore CityPulse
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={citypulseHero}
                alt="CityPulse Smart City Platform"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-5 rounded-xl shadow-elevated">
              <p className="text-3xl font-bold text-accent">50K+</p>
              <p className="text-sm text-muted-foreground">Issues Resolved</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-card text-card-foreground p-5 rounded-xl shadow-elevated">
              <p className="text-3xl font-bold text-success">24hrs</p>
              <p className="text-sm text-muted-foreground">Avg Resolution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
