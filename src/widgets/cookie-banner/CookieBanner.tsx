import { Link } from "react-router-dom";
import { useCookieConsent } from "@/features/cookie-consent/useCookieConsent";

export function CookieBanner() {
  const { isVisible, accept, reject } = useCookieConsent();

  return (
    <div className={`cookie-banner${isVisible ? " is-visible" : ""}`} aria-live="polite">
      <div className="cookie-banner__content">
        <p className="cookie-banner__title">Política de cookies</p>

        <p className="cookie-banner__text">
          Este sitio web utiliza cookies técnicas necesarias para su correcto funcionamiento. También
          puede utilizar cookies propias y de terceros para analizar la navegación, mejorar la
          experiencia de usuario y mostrar contenido externo, siempre que el usuario haya dado su
          consentimiento. Puedes aceptar, rechazar o configurar el uso de cookies. Más información en
          la <Link to="/cookies">Política de Cookies</Link>.
        </p>

        <div className="cookie-banner__actions">
          <button
            className="cookie-banner__button cookie-banner__button--secondary"
            type="button"
            onClick={reject}
          >
            Rechazar todas
          </button>

          <button
            className="cookie-banner__button cookie-banner__button--primary"
            type="button"
            onClick={accept}
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
