import { useDocumentTitle } from "@/shared/hooks/useDocumentTitle";
import { ContactSection } from "@/widgets/contact/ContactSection";
import { CookieBanner } from "@/widgets/cookie-banner/CookieBanner";
import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";
import { Hero } from "@/widgets/hero/Hero";
import { OrientationLock } from "@/widgets/orientation-lock/OrientationLock";
import { ProjectsSection } from "@/widgets/projects/ProjectsSection";
import { SkillsSection } from "@/widgets/skills/SkillsSection";

export function HomePage() {
  useDocumentTitle("Manel Navarro | Portfolio");

  return (
    <>
      <OrientationLock />
      <Header />
      <main>
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
