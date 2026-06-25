import { Header } from "@/widgets/header/Header";
import { useDocumentTitle } from "@/shared/hooks/useDocumentTitle";

export function NotFoundPage() {
  useDocumentTitle("Página no encontrada | Manel Navarro");

  return (
    <>
      <Header variant="legal" />
      <main>
        <section className="section">
          <div className="section__inner">
            <p className="section__number">404</p>
            <h1 className="section__title">Página no encontrada</h1>
            <article className="card">
              <h3>Esta ruta no existe</h3>
              <p>
                Puedes volver al <a href="/#home"><strong>portfolio principal</strong></a>.
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
