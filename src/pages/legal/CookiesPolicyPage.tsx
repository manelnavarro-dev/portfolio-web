import { useDocumentTitle } from "@/shared/hooks/useDocumentTitle";
import { LegalPageLayout } from "@/shared/ui/LegalPageLayout";

export function CookiesPolicyPage() {
  useDocumentTitle("Política de Cookies | Manel Navarro");

  return (
    <LegalPageLayout
      eyebrow="Cookies"
      title="Política de Cookies"
      sections={[
        {
          title: "1. ¿Qué son las cookies?",
          content: (
            <p>
              Las cookies son pequeños archivos que se almacenan en el navegador del usuario cuando visita
              determinadas páginas web. Sirven para recordar información sobre la navegación, mejorar el
              funcionamiento del sitio o recopilar información estadística.
            </p>
          ),
        },
        {
          title: "2. Tipos de cookies",
          content: (
            <>
              <p>Este sitio web puede utilizar los siguientes tipos de cookies:</p>
              <p>
                <strong>Cookies técnicas:</strong> necesarias para el correcto funcionamiento del sitio web.
              </p>
              <p>
                <strong>Cookies de preferencias:</strong> permiten recordar decisiones del usuario, como la
                aceptación o rechazo del banner de cookies.
              </p>
              <p>
                <strong>Cookies analíticas:</strong> podrían utilizarse en el futuro para medir visitas y
                mejorar el sitio web.
              </p>
              <p>
                <strong>Cookies de terceros:</strong> podrían ser utilizadas por servicios externos integrados
                en la web.
              </p>
            </>
          ),
        },
        {
          title: "3. Cookies utilizadas actualmente",
          content: (
            <>
              <p>
                Actualmente, este sitio web no utiliza cookies publicitarias ni sistemas de seguimiento
                comercial.
              </p>
              <p>
                El banner de cookies puede guardar localmente la preferencia del usuario para recordar si ha
                aceptado o rechazado las cookies no esenciales.
              </p>
            </>
          ),
        },
        {
          title: "4. Cookies de terceros",
          content: (
            <>
              <p>
                Este sitio web puede utilizar servicios técnicos de terceros relacionados con hosting,
                seguridad, despliegue o gestión de dominio, como Netlify y Cloudflare.
              </p>
              <p>
                En el futuro, si se añaden servicios como analítica web, vídeos incrustados, mapas,
                formularios externos u otros servicios similares, esta política será actualizada.
              </p>
            </>
          ),
        },
        {
          title: "5. Gestión del consentimiento",
          content: (
            <>
              <p>
                El usuario puede aceptar o rechazar las cookies no esenciales mediante el banner de cookies
                mostrado en el sitio web.
              </p>
              <p>
                Las cookies técnicas necesarias no requieren consentimiento, ya que son imprescindibles para
                el correcto funcionamiento del sitio.
              </p>
            </>
          ),
        },
        {
          title: "6. Cómo eliminar o bloquear cookies",
          content: (
            <p>
              El usuario puede configurar su navegador para bloquear, eliminar o limitar el uso de cookies en
              cualquier momento desde las opciones de privacidad del navegador.
            </p>
          ),
        },
        {
          title: "7. Actualizaciones",
          content: (
            <p>
              Esta Política de Cookies puede modificarse en función de cambios técnicos, legales o de los
              servicios utilizados en el sitio web.
            </p>
          ),
        },
      ]}
    />
  );
}
