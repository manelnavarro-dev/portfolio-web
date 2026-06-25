import type { ReactNode } from "react";
import { Header } from "@/widgets/header/Header";
import { SectionHeading } from "@/shared/ui/SectionHeading";

interface LegalSection {
  title: string;
  content: ReactNode;
}

interface LegalPageLayoutProps {
  eyebrow: string;
  title: string;
  sections: LegalSection[];
}

export function LegalPageLayout({ eyebrow, title, sections }: LegalPageLayoutProps) {
  return (
    <>
      <Header variant="legal" />
      <main>
        <section className="section">
          <div className="section__inner">
            <SectionHeading number={eyebrow} title={title} as="h1" />

            {sections.map((section) => (
              <article className="card" key={section.title}>
                <h3>{section.title}</h3>
                {section.content}
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
