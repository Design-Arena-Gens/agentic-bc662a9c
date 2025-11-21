import { Hero } from "@/components/Hero";
import { PedagogicalPillars } from "@/components/PedagogicalPillars";
import { MethodologyMatrix } from "@/components/MethodologyMatrix";
import { ImplementationTimeline } from "@/components/ImplementationTimeline";
import { ResourceLinks } from "@/components/ResourceLinks";
import { InsightHighlights } from "@/components/InsightHighlights";

export default function HomePage() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <Hero />
        <PedagogicalPillars />
        <MethodologyMatrix />
        <InsightHighlights />
        <ImplementationTimeline />
        <ResourceLinks />
      </div>
    </main>
  );
}
