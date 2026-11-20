import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { WorkSection } from "@/components/work-section";
import { SocialRail } from "@/components/social-rail";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans antialiased">
      <Navbar />
      <SocialRail />
      <Hero />
      <ProjectsSection />
      <WorkSection />
    </main>
  );
}
