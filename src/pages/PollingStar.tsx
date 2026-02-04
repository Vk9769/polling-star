import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Users, 
  UserCheck, 
  Settings, 
  TrendingUp,
  ArrowRight,
  Check,
  Vote,
  MapPin,
  Bell,
  Camera,
  BarChart3,
  Shield
} from "lucide-react";
import heroImage from "@/assets/hero-election.jpg";
import analyticsImage from "@/assets/analytics-bg.jpg";

const apps = [
  {
    id: "voter",
    icon: Smartphone,
    name: "Voter App",
    tagline: "Stay informed, engaged, and connected",
    description: "Designed for voters to stay informed, engaged, and connected with their representatives.",
    features: [
      "Secure login & profile access",
      "Voting status tracking in real-time",
      "Emergency services access with live map",
      "Polling booth locator with complete info",
      "Daily election-related news updates",
      "Selfie-based vote confirmation"
    ],
    impact: "Improves voter trust and participation"
  },
  {
    id: "campaigner",
    icon: Users,
    name: "Campaigner App",
    tagline: "Ground-level campaign execution",
    description: "Built for ground-level campaign execution and voter outreach.",
    features: [
      "Convert voters using direct communication",
      "Track voter conversion progress",
      "Manage booth-wise voter lists",
      "Real-time field updates",
      "Direct messaging with voters",
      "Issue collection and reporting"
    ],
    impact: "Strengthens voter outreach & influence"
  },
  {
    id: "agent",
    icon: UserCheck,
    name: "Agent App",
    tagline: "Polling booth operations",
    description: "Focused on polling booth operations on election day.",
    features: [
      "Mark voter voting status on polling day",
      "Track booth-level turnout live",
      "Verify 'our' and 'other' voters",
      "Real-time sync with admin",
      "Booth performance metrics",
      "Instant notifications"
    ],
    impact: "Ensures accurate booth-level data"
  },
  {
    id: "admin",
    icon: Settings,
    name: "Admin App",
    tagline: "Central control system",
    description: "Acts as the central control system for election management.",
    features: [
      "Monitor voters, booths, and reports",
      "Manage agents, campaigners, candidates",
      "Broadcast messages and updates",
      "Real-time analytics dashboard",
      "Resource allocation tools",
      "Complete election oversight"
    ],
    impact: "Provides complete election oversight"
  },
  {
    id: "candidate",
    icon: TrendingUp,
    name: "Candidate App",
    tagline: "Strategic decision-making",
    description: "Designed for strategic decision-making with comprehensive analytics.",
    features: [
      "View performance analytics & graphs",
      "Monitor winning probability",
      "Track team and campaign progress",
      "Booth-wise performance analysis",
      "Resource optimization insights",
      "Data-driven winning strategies"
    ],
    impact: "Enables data-driven winning strategies"
  },
];

const workflow = [
  { step: 1, title: "Voter Data Collection", description: "Digitize and organize voter data" },
  { step: 2, title: "Campaign Planning", description: "Strategy & booth allocation" },
  { step: 3, title: "Ground Execution", description: "Campaign rollout with tracking" },
  { step: 4, title: "Real-time Monitoring", description: "Live analytics & insights" },
  { step: 5, title: "Polling Day Operations", description: "Booth-level management" },
  { step: 6, title: "Post-Election Analysis", description: "Reports & learnings" },
];

const PollingStar = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Polling Star" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent mb-8">
              <Vote className="w-4 h-4" />
              <span className="text-sm font-medium">Election Management Platform</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Polling Star
              <span className="text-accent block mt-2">Win Elections with Data</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              A unified digital platform designed to manage, monitor, and optimize the entire election lifecycle. Connect voters, candidates, campaigners, agents, and administrators through purpose-built applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Why Polling Star
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
              Key Solution Components
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Settings, title: "Digitized Operations", desc: "Replace manual processes with secure mobile and admin applications" },
              { icon: BarChart3, title: "Real-Time Analytics", desc: "Track voter turnout, booth performance, and election status live" },
              { icon: Users, title: "Voter Engagement", desc: "Communication tools, issue reporting, and selfie verification" },
              { icon: TrendingUp, title: "Data-Driven Decisions", desc: "Transform ground-level data into actionable insights" },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all text-center">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Ecosystem */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Application Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
              5 Apps, One Unified Platform
            </h2>
            <p className="text-lg text-muted-foreground">
              Each app serves a specific role in ensuring efficient operations, voter engagement, and election success.
            </p>
          </div>

          <div className="space-y-8">
            {apps.map((app, index) => (
              <div
                key={app.id}
                id={app.id}
                className={`bg-card rounded-2xl p-8 shadow-card ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                      <app.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">{app.name}</h3>
                    <p className="text-accent font-medium mb-4">{app.tagline}</p>
                    <p className="text-muted-foreground mb-6">{app.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {app.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="inline-block px-4 py-2 rounded-lg bg-success/10 text-success text-sm font-medium">
                      🎯 {app.impact}
                    </div>
                  </div>
                  <div className={`bg-gradient-to-br from-primary to-sidebar-accent rounded-xl p-8 text-center ${index % 2 === 0 ? "" : "lg:order-1"}`}>
                    <app.icon className="w-32 h-32 text-accent mx-auto mb-4" />
                    <p className="text-primary-foreground font-display font-bold text-xl">{app.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
              Election Workflow Process
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {workflow.map((item) => (
              <div key={item.step} className="relative bg-card rounded-xl p-6 text-center shadow-soft">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-display font-semibold text-sm text-foreground mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={analyticsImage} alt="Analytics" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Ready to Win Your Next Election?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join 500+ successful campaigns that trust Polling Star for data-driven election management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/services">
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PollingStar;
