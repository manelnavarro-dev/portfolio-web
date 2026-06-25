import { Link } from "react-router-dom";
import { ScrollToTopButton } from "@/features/scroll-to-top/ScrollToTopButton";
import { siteConfig } from "@/shared/config/site";

export function Footer() {
  return (
    <footer className="footer">
      <p>{siteConfig.copyright}</p>

      <div className="footer__legal">
        <Link to="/aviso-legal">Aviso Legal</Link>
        <Link to="/privacidad">Privacidad</Link>
        <Link to="/cookies">Cookies</Link>
      </div>

      <ScrollToTopButton />
    </footer>
  );
}
