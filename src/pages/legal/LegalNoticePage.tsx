import { useDocumentTitle } from "@/shared/hooks/useDocumentTitle";
import { LegalPageLayout } from "@/shared/ui/LegalPageLayout";

export function LegalNoticePage() {
  useDocumentTitle("Aviso Legal | Manel Navarro");

  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Aviso Legal"
      sections={[
        {
          title: "1. Titular del sitio web",
          content: (
            <>
              <p>
                En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y
                Comercio Electrónico, se informa de que el presente sitio web es titularidad de:
              </p>
              <p>
                <strong>Titular:</strong> Manel Navarro
                <br />
                <strong>Sitio web:</strong> manelnavarro.es
                <br />
                <strong>Correo electrónico:</strong> manel.navarro.torrijos@gmail.com
              </p>
            </>
          ),
        },
        {
          title: "2. Finalidad del sitio web",
          content: (
            <p>
              Este sitio web tiene carácter personal y profesional. Su finalidad es mostrar información
              sobre el perfil profesional del titular, sus habilidades técnicas, proyectos, experiencia y
              medios de contacto.
            </p>
          ),
        },
        {
          title: "3. Condiciones de uso",
          content: (
            <p>
              El acceso y navegación por este sitio web atribuye la condición de usuario e implica la
              aceptación del presente Aviso Legal. El usuario se compromete a hacer un uso adecuado de los
              contenidos y a no emplearlos para actividades ilícitas, contrarias a la buena fe o al orden
              público.
            </p>
          ),
        },
        {
          title: "4. Propiedad intelectual e industrial",
          content: (
            <>
              <p>
                Los contenidos de este sitio web, incluyendo textos, imágenes, diseño, código fuente,
                logotipos, gráficos y demás elementos, son titularidad de Manel Navarro o se utilizan con
                autorización o licencia adecuada.
              </p>
              <p>
                Queda prohibida la reproducción, distribución, comunicación pública o transformación de
                dichos contenidos sin autorización expresa del titular.
              </p>
            </>
          ),
        },
        {
          title: "5. Responsabilidad",
          content: (
            <p>
              El titular no se responsabiliza de posibles errores u omisiones en los contenidos,
              interrupciones del servicio, problemas técnicos o daños derivados del uso del sitio web.
            </p>
          ),
        },
        {
          title: "6. Enlaces externos",
          content: (
            <p>
              Este sitio web puede contener enlaces a sitios web de terceros. El titular no se
              responsabiliza del contenido, condiciones de uso o políticas de privacidad de dichos sitios
              externos.
            </p>
          ),
        },
        {
          title: "7. Legislación aplicable",
          content: (
            <p>
              La relación entre el usuario y el titular se regirá por la normativa española y europea
              vigente.
            </p>
          ),
        },
      ]}
    />
  );
}
