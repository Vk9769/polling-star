import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Camera, 
  Bell, 
  CheckCircle, 
  BarChart, 
  Users,
  ArrowRight,
  Building2,
  AlertTriangle,
  Zap,
  Award
} from "lucide-react";
import citypulseHero from "@/assets/citypulse-hero.jpg";

const problems = [
  "Frequent road closures, traffic congestion, sewage overflow",
  "Citizens don't get real-time updates",
  "No single platform to view ongoing projects",
  "Officials struggle with report management",
  "Duplicate reports & no clear verification",
  "Lack of analytics to identify repeating issues"
];

const coreFeatures = [
  {
    icon: MapPin,
    title: "Interactive City Map",
    description: "A live map showing ongoing projects, hazards, traffic congestion, and citizen-reported issues with color-coded pins."
  },
  {
    icon: Camera,
    title: "Citizen Reporting System",
    description: "Citizens can quickly report problems by uploading a photo, entering details, and letting GPS auto-detect the location."
  },
  {
    icon: Bell,
    title: "Real-Time Push Alerts",
    description: "Smart notifications for road closures, power outages, and water supply issues only to citizens within affected radius."
  },
  {
    icon: Users,
    title: "Authority Dashboard",
    description: "Officials review, verify, or reject citizen reports, update project statuses, and manage announcements from a central dashboard."
  },
  {
    icon: CheckCircle,
    title: "Status Tracking",
    description: "Each report follows a clear lifecycle (Pending → Verified → Resolved), ensuring transparency and citizen visibility."
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Identify repeating issues, monthly trends, and export reports to PDF/Excel for data-driven urban planning."
  },
];

const citizenFlow = [
  { step: "Login", desc: "Email / Phone / OTP" },
  { step: "City Map", desc: "View projects & hazards" },
  { step: "Report", desc: "Photo + auto GPS" },
  { step: "Track", desc: "Status updates" },
  { step: "Alerts", desc: "Smart notifications" },
  { step: "Earn", desc: "CityPoints rewards" },
];

const officialFlow = [
  { step: "Dashboard", desc: "Department login" },
  { step: "Review", desc: "Verify/reject reports" },
  { step: "Update", desc: "Status management" },
  { step: "Analyze", desc: "Trends & insights" },
  { step: "Alert", desc: "Auto notifications" },
  { step: "Export", desc: "Reports & data" },
];

const impact = [
  { icon: Zap, title: "Faster Resolution", desc: "50% reduction in issue resolution time" },
  { icon: Users, title: "Citizen Participation", desc: "5x increase in civic engagement" },
  { icon: CheckCircle, title: "Transparency", desc: "100% visible issue tracking" },
  { icon: BarChart, title: "Data-Driven", desc: "Smart urban planning insights" },
  { icon: Award, title: "Safer Cities", desc: "Proactive hazard management" },
];

const CityPulse = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={citypulseHero} alt="CityPulse" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent mb-8">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-medium">Smart City Platform</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              CityPulse
              <span className="text-accent block mt-2">Smart Urban Governance</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              A unified system to track city issues, improve transparency, and empower citizens. Transform how citizens report, how officials respond, and how cities evolve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="citypulse" size="xl" asChild>
                <Link to="/contact">
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-destructive font-semibold text-sm uppercase tracking-wider">
                The Challenge
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
                Urban Infrastructure Problems
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Cities face numerous challenges in managing infrastructure, citizen complaints, and public services efficiently.
              </p>
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                <ul className="space-y-3">
                  {problems.map((problem) => (
                    <li key={problem} className="flex items-start gap-3 text-foreground/80">
                      <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-success/5 border border-success/20 rounded-xl p-8">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-success" />
                CityPulse Solution
              </h3>
              <p className="text-muted-foreground mb-6">
                A smart-city platform for citizens + authorities featuring:
              </p>
              <ul className="space-y-4">
                {[
                  "Live interactive city map",
                  "Citizen reporting system (Photo + GPS)",
                  "Real-time alerts & notifications",
                  "Admin dashboard for verification",
                  "AI-powered clustering & analytics",
                ].map((solution) => (
                  <li key={solution} className="flex items-center gap-3 text-foreground">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-success" />
                    </div>
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Core Features
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
              Everything for Smart City Management
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature) => (
              <div key={feature.title} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Flows */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
              User Journeys
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Citizen Flow */}
            <div className="bg-accent/5 rounded-2xl p-8 border border-accent/20">
              <h3 className="font-display font-bold text-xl text-foreground mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-accent" />
                Citizen Flow
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {citizenFlow.map((item, index) => (
                  <div key={item.step} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold mx-auto mb-2">
                      {index + 1}
                    </div>
                    <p className="font-semibold text-sm text-foreground">{item.step}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Flow */}
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="font-display font-bold text-xl text-foreground mb-6 flex items-center gap-3">
                <Building2 className="w-6 h-6 text-primary" />
                Authority Flow
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {officialFlow.map((item, index) => (
                  <div key={item.step} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mx-auto mb-2">
                      {index + 1}
                    </div>
                    <p className="font-semibold text-sm text-foreground">{item.step}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-6">
              Transforming Urban Governance
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {impact.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-display font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-primary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-accent to-warning text-accent-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Smart City. Smart People. Smart Future.
          </h2>
          <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Join municipalities and urban bodies that are transforming their cities with CityPulse.
          </p>
          <Button variant="default" size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link to="/contact">
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CityPulse;
