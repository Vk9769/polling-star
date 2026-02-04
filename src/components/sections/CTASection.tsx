import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-sidebar-accent relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Ready to Transform Your
            <span className="text-accent block mt-2">Election Campaign?</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join 500+ successful campaigns that have used Polling Star to connect with voters, optimize resources, and maximize winning probability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+919999999999">
                <Phone className="w-5 h-5" />
                Schedule a Call
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10">
            <p className="text-sm text-primary-foreground/60 mb-6">Trusted by leading political parties and candidates</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {/* Placeholder for party/client logos */}
              <div className="w-32 h-12 bg-primary-foreground/10 rounded-lg" />
              <div className="w-32 h-12 bg-primary-foreground/10 rounded-lg" />
              <div className="w-32 h-12 bg-primary-foreground/10 rounded-lg" />
              <div className="w-32 h-12 bg-primary-foreground/10 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
