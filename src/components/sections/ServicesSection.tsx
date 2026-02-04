import { 
  Target, 
  BarChart3, 
  ClipboardList, 
  Megaphone, 
  Share2, 
  FileText 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Political Strategy",
    description: "Win more voters through data-driven analysis, goal setting, decision making, monitoring and execution.",
    items: ["Party Analysis", "Candidate Profiling", "Pre/Post Election Assessment"]
  },
  {
    icon: BarChart3,
    title: "Election Management",
    description: "End-to-end election management with ground-level surveys and demographic campaign segmentation.",
    items: ["Ground Surveys", "Issue Collection", "Influencer Management"]
  },
  {
    icon: ClipboardList,
    title: "Survey & Research",
    description: "Comprehensive surveys to understand voter mindset and analyze voting factors.",
    items: ["Pre-Election Survey", "Door-to-Door Survey", "Social Media Survey"]
  },
  {
    icon: Megaphone,
    title: "Campaign Design",
    description: "Design, strategize and execute planned campaigns with targeted messaging.",
    items: ["Campaign Research", "Target Voter Analysis", "Message Development"]
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Complete social media strategy - 50% of the election battle is fought online.",
    items: ["Narrative Setting", "Content Creation", "Digital Marketing"]
  },
  {
    icon: FileText,
    title: "Media & Public Relations",
    description: "Comprehensive media solutions including audio/video, IVR services, and public outreach.",
    items: ["Audio/Video Solutions", "SMS/IVR Services", "VoxPop & Memes"]
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Political Consulting Excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide comprehensive political consulting by constantly working in the electoral arena to create a better relationship between voters and politicians.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Items */}
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
