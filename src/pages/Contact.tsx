import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "nishantptl99@gmail.com",
    description: "We'll respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 78987891143",
    description: "Mon-Sat 9AM to 6PM IST"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Mumbai, India",
    description: "Head Office"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Sat: 9AM - 6PM",
    description: "Sunday: Closed"
  },
];

const services = [
  "Political Strategy",
  "Election Management",
  "Survey & Research",
  "Campaign Design",
  "Social Media Management",
  "CityPulse Platform",
  "Other"
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      service: "",
      message: ""
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-sidebar-accent text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Let's Build Your
              <span className="text-accent block mt-2">Winning Strategy</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Ready to transform your election campaign or implement smart city solutions? Get in touch with our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background -mt-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{info.title}</h3>
                <p className="text-accent font-medium mb-1">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+91 99999 99999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Organization
                    </label>
                    <Input
                      type="text"
                      placeholder="Party / Organization Name"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select
                    className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Tell us about your requirements..."
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info Panel */}
            <div>
              <div className="bg-gradient-to-br from-primary to-sidebar-accent rounded-2xl p-10 text-primary-foreground h-full">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="w-8 h-8 text-accent" />
                  <h3 className="font-display font-bold text-2xl">Get in Touch</h3>
                </div>

                <p className="text-primary-foreground/80 mb-10 text-lg">
                  Whether you're planning for upcoming elections, need help with campaign strategy, or want to implement smart city solutions - we're here to help.
                </p>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-accent mb-4">What to Expect</h4>
                    <ul className="space-y-3">
                      {[
                        "Free initial consultation call",
                        "Customized proposal within 48 hours",
                        "Dedicated account manager",
                        "Transparent pricing"
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-primary-foreground/80">
                          <span className="w-2 h-2 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-accent mb-4">Our Clients Include</h4>
                    <ul className="space-y-3">
                      {[
                        "National & State Political Parties",
                        "Independent Candidates",
                        "Municipal Corporations",
                        "Urban Local Bodies"
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-primary-foreground/80">
                          <span className="w-2 h-2 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-primary-foreground/20">
                  <p className="text-sm text-primary-foreground/60">
                    Head Office: New Delhi, India
                    <br />
                    Regional Offices: Mumbai, Chennai, Kolkata, Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
