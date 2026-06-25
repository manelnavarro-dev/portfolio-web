import { useLocation } from "react-router-dom";
import { useMobileNavigation } from "@/features/mobile-navigation/useMobileNavigation";
import { homeNavigation, legalNavigation } from "@/shared/config/navigation";
import { siteConfig } from "@/shared/config/site";
import { Logo } from "@/shared/ui/Logo";

interface HeaderProps {
  variant?: "home" | "legal";
}

export function Header({ variant = "home" }: HeaderProps) {
  const location = useLocation();
  const { isOpen, navRef, toggleRef, toggle, close } = useMobileNavigation();
  const items = variant === "home" ? homeNavigation : legalNavigation;
  const logoHref = variant === "home" ? "#home" : "/#home";

  return (
    <header className="header">
      <Logo href={logoHref} />

      <button
        ref={toggleRef}
        className={`nav-toggle${isOpen ? " is-open" : ""}`}
        type="button"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-controls="main-nav"
        aria-expanded={isOpen}
        onClick={toggle}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        ref={navRef}
        id="main-nav"
        className={`nav${isOpen ? " is-open" : ""}`}
        aria-label={variant === "home" ? "Navegación principal" : "Navegación legal"}
      >
        {items.map((item) => {
          const href =
            variant === "home" && location.pathname !== "/"
              ? `/${item.href}`
              : item.href;

          return (
            <a key={item.href} href={href} onClick={close}>
              {item.label}
            </a>
          );
        })}

        {variant === "home" && (
          <a className="nav__cv" href={siteConfig.cvPath} download onClick={close}>
            Descargar CV
          </a>
        )}
      </nav>
    </header>
  );
}
