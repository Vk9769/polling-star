import { CheckCircle, XCircle } from "lucide-react";

const problems = [
  "Manual & fragmented voter data handling",
  "No real-time voter insights",
  "Poor coordination between campaign teams",
  "Absence of centralized monitoring",
  "Weak booth-level planning",
  "Outdated manual processes",
];

const solutions = [
  "Unified digital election management",
  "Real-time analytics & monitoring",
  "Connected voters, candidates & teams",
  "Centralized admin dashboard",
  "GPS-enabled booth operations",
  "AI-powered decision support",
];

export function ProblemSolutionSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            From Problems to Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Traditional election management leads to inefficient campaigns, wasted resources, and lower winning probability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems */}
          <div className="bg-destructive/5 rounded-2xl p-8 border border-destructive/20">
            <h3 className="font-display font-bold text-xl text-foreground mb-6 flex items-center gap-3">
              <XCircle className="w-6 h-6 text-destructive" />
              Traditional Challenges
            </h3>
            <ul className="space-y-4">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <XCircle className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-foreground/80">{problem}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-destructive/20">
              <p className="text-sm text-destructive font-medium">
                Result: Inefficient campaigns & resource wastage
              </p>
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-success/5 rounded-2xl p-8 border border-success/20">
            <h3 className="font-display font-bold text-xl text-foreground mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-success" />
              Polling Star Solutions
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-success" />
                  </div>
                  <span className="text-foreground/80">{solution}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-success/20">
              <p className="text-sm text-success font-medium">
                ✓ Designed to maximize winning chances
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
