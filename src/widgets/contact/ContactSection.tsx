import { siteConfig } from "@/shared/config/site";
import { SectionHeading } from "@/shared/ui/SectionHeading";

export function ContactSection() {
  return (
    <section id="contacto" className="section contact">
      <div className="section__inner">
        <SectionHeading number="03" title="Contacto" />

        <p className="contact__text">¿Quieres hablar conmigo o ver alguno de mis proyectos?</p>

        <div className="contact__links">
          <a href={`mailto:${siteConfig.email}`}>Email</a>
          <a className="contact__cv" href={siteConfig.cvPath} download>
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
