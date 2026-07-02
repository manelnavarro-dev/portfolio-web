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
        <div className="badge-base LI-profile-badge" data-locale="es_ES" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="manel-navarro-288857419" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://es.linkedin.com/in/manel-navarro-288857419?trk=profile-badge">Manel Navarro</a></div>
      </div>
    </section>
  );
}
