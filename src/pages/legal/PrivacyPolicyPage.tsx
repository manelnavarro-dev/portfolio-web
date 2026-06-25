import { useDocumentTitle } from "@/shared/hooks/useDocumentTitle";
import { LegalPageLayout } from "@/shared/ui/LegalPageLayout";

export function PrivacyPolicyPage() {
  useDocumentTitle("Política de Privacidad | Manel Navarro");

  return (
    <LegalPageLayout
      eyebrow="Privacidad"
      title="Política de Privacidad"
      sections={[
        {
          title: "1. Responsable del tratamiento",
          content: (
            <p>
              <strong>Responsable:</strong> Manel Navarro
              <br />
              <strong>Sitio web:</strong> manelnavarro.es
              <br />
              <strong>Correo electrónico:</strong> manel.navarro.torrijos@gmail.com
            </p>
          ),
        },
        {
          title: "2. Datos personales tratados",
          content: (
            <>
              <p>
                Este sitio web no dispone actualmente de formularios de registro, área privada ni sistema
                de comentarios. No obstante, el usuario puede contactar voluntariamente mediante correo
                electrónico.
              </p>
              <p>
                En ese caso, podrán tratarse los datos personales incluidos en la comunicación, como
                nombre, dirección de correo electrónico y cualquier información que el usuario decida
                facilitar.
              </p>
            </>
          ),
        },
        {
          title: "3. Finalidad del tratamiento",
          content: (
            <p>
              Los datos personales serán tratados únicamente para responder solicitudes de contacto,
              mantener comunicaciones profesionales o gestionar consultas enviadas por el usuario.
            </p>
          ),
        },
        {
          title: "4. Base legal",
          content: (
            <p>
              La base legal para el tratamiento de los datos es el consentimiento del usuario, otorgado al
              contactar voluntariamente con el titular mediante correo electrónico u otros medios
              disponibles en el sitio web.
            </p>
          ),
        },
        {
          title: "5. Conservación de los datos",
          content: (
            <p>
              Los datos se conservarán durante el tiempo necesario para atender la solicitud del usuario y,
              en su caso, durante los plazos necesarios para cumplir obligaciones legales.
            </p>
          ),
        },
        {
          title: "6. Comunicación de datos a terceros",
          content: (
            <p>
              No se cederán datos personales a terceros, salvo obligación legal o cuando sea necesario para
              la prestación técnica del servicio.
            </p>
          ),
        },
        {
          title: "7. Servicios de terceros",
          content: (
            <>
              <p>
                Este sitio web puede utilizar servicios técnicos de terceros para su alojamiento,
                seguridad, despliegue o gestión de dominio, como Netlify y Cloudflare.
              </p>
              <p>
                Dichos proveedores podrían tratar datos técnicos, como la dirección IP del usuario, con la
                finalidad de prestar correctamente sus servicios.
              </p>
            </>
          ),
        },
        {
          title: "8. Derechos del usuario",
          content: (
            <>
              <p>
                El usuario puede ejercer sus derechos de acceso, rectificación, supresión, oposición,
                limitación del tratamiento y portabilidad enviando una solicitud al correo electrónico
                indicado en esta política.
              </p>
              <p>
                Asimismo, el usuario tiene derecho a presentar una reclamación ante la Agencia Española de
                Protección de Datos si considera que el tratamiento de sus datos no se ajusta a la
                normativa vigente.
              </p>
            </>
          ),
        },
        {
          title: "9. Seguridad",
          content: (
            <p>
              El titular aplica medidas razonables para proteger la información personal frente a pérdida,
              uso indebido, acceso no autorizado o divulgación.
            </p>
          ),
        },
        {
          title: "10. Cambios en esta política",
          content: (
            <p>
              Esta Política de Privacidad puede actualizarse para adaptarse a cambios técnicos, legales o
              de contenido del sitio web.
            </p>
          ),
        },
      ]}
    />
  );
}
