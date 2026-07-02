import avatar from "@/shared/assets/images/avatar.webp";

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__intro">
        <p className="hero__eyebrow">Hola mi nombre es</p>
        <h1 className="hero__title">
          Manel
          <br />
          <span>Navarro</span>
        </h1>
      </div>

      <div className="hero__avatar">
        <img src={avatar} alt="Avatar de Manel con portátil" />
      </div>

      <div className="hero__content">
        <p className="hero__description">
          Soy programador Junior, graduado en Informática en la UPV y especializado en la rama de
          Ingeniería de Computadores. Me gusta crear soluciones sencillas, limpias y funcionales para
          mi día a día, combinando el uso de micro-controladores, desarrollo web e inteligencia
          artificial. Me apasiona la domótica y desmontar todo aquello que pasa por mis manos.
        </p>

        <a href="#contacto" className="hero__button">
          CONTACTO
        </a>
      </div>
    </section>
  );
}
