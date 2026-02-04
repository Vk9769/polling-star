import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  BarChart3, 
  ClipboardList, 
  Megaphone, 
  Share2, 
  FileText,
  Users,
  MapPin,
  Calendar,
  ArrowRight,
  Check
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Political Strategy",
    description: "Win more voters through comprehensive political strategy that analyzes, plans, and executes winning campaigns.",
    details: [
      "Party in power & opposition analysis",
      "Candidate profiling and competitive analysis",
      "Pre-election and post-election assessments",
      "Goal setting and campaign planning",
      "Continuous monitoring and optimization"
    ]
  },
  {
    icon: BarChart3,
    title: "Election Management",
    description: "End-to-end election management with ground-level execution and resource optimization.",
    details: [
      "Ground surveys (2-3 times)",
      "Issue and voter data collection",
      "Campaign segmentation by demographics",
      "Influencer & community leader management",
      "Local media coordination"
    ]
  },
  {
    icon: ClipboardList,
    title: "Survey & Research",
    description: "Comprehensive surveys to understand ground reality and voter mindset.",
    details: [
      "Pre-election surveys (voter mindset)",
      "Post-election analysis (voting factors)",
      "Telephonic and door-to-door surveys",
      "Social media sentiment analysis",
      "Village/Ward detailed reports"
    ]
  },
  {
    icon: Megaphone,
    title: "Campaign Design & Execution",
    description: "Design, strategize and execute high-impact campaigns with targeted messaging.",
    details: [
      "Thorough research & message crafting",
      "Target voter analysis",
      "Manifesto drafting (10-pointer vision)",
      "Mega campaigns & conventions",
      "D2D & Yatra planning"
    ]
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Complete social media strategy - 50% of elections are fought online.",
    details: [
      "Narrative setting & positioning",
      "Audio/Video content creation",
      "Media and public relations",
      "Digital marketing campaigns",
      "Memes, VoxPop & viral content"
    ]
  },
  {
    icon: FileText,
    title: "Media & Public Relations",
    description: "Comprehensive media solutions for maximum reach and impact.",
    details: [
      "Press releases & media coverage",
      "SMS/IVR services",
      "Local & regional media coordination",
      "Crisis communication",
      "Spokesperson training"
    ]
  },
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Research & Analysis",
    duration: "Week 1-2",
    items: ["Assembly constituency analysis", "Grassroots issue identification", "Competitor analysis", "Influencer identification"]
  },
  {
    phase: "Phase 2",
    title: "Strategy Development",
    duration: "Week 3-4",
    items: ["Campaign message crafting", "10-pointer manifesto", "Urban/Rural vision documents", "Resource planning"]
  },
  {
    phase: "Phase 3",
    title: "Campaign Launch",
    duration: "Week 5-6",
    items: ["Mega convention", "Pratigya card distribution", "D2D campaign kickoff", "Social media blitz"]
  },
  {
    phase: "Phase 4",
    title: "Ground Execution",
    duration: "Week 7-10",
    items: ["10-day extensive outreach", "3 public meetings/day", "Booth-level coordination", "Real-time monitoring"]
  },
  {
    phase: "Phase 5",
    title: "Polling Day",
    duration: "Election Day",
    items: ["Booth management", "Voter turnout tracking", "Agent coordination", "Live analytics"]
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-sidebar-accent text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Political Consulting
              <span className="text-accent block mt-2">Excellence</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We provide comprehensive political consulting by constantly working in the electoral arena to create a better relationship between voters and politicians.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all group"
              >
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <service.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Roadmap */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Campaign Roadmap
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
              Your Path to Victory
            </h2>
            <p className="text-lg text-muted-foreground">
              Our proven 5-phase roadmap takes you from research to polling day success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {roadmap.map((phase, index) => (
              <div key={phase.phase} className="relative">
                <div className="bg-card rounded-xl p-6 shadow-soft h-full">
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    {phase.phase}
                  </div>
                  <div className="pt-4">
                    <h4 className="font-display font-bold text-lg text-foreground mb-2">{phase.title}</h4>
                    <p className="text-sm text-accent font-medium mb-4">{phase.duration}</p>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < roadmap.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
                Experience That Delivers Results
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With over a decade of experience in political consulting, we combine traditional ground-level expertise with cutting-edge technology.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, value: "500+", label: "Campaigns" },
                  { icon: MapPin, value: "28+", label: "States" },
                  { icon: BarChart3, value: "95%", label: "Success Rate" },
                  { icon: Calendar, value: "10+", label: "Years" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-secondary/50 rounded-xl p-6 text-center">
                    <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-sidebar-accent rounded-2xl p-10 text-primary-foreground">
              <h3 className="font-display font-bold text-2xl mb-6">Get Started Today</h3>
              <p className="text-primary-foreground/80 mb-8">
                Ready to transform your election campaign? Our team of experts is ready to help you win.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Free initial consultation",
                  "Customized campaign strategy",
                  "Dedicated account manager",
                  "24/7 election day support"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <Link to="/contact">
                  Request Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
