import logo from "@/shared/assets/images/logo.svg";

interface LogoProps {
  href?: string;
}

export function Logo({ href = "#home" }: LogoProps) {
  return (
    <a href={href} className="logo" aria-label="Ir al inicio">
      <img className="logo__icon" src={logo} alt="" aria-hidden="true" />
      <span className="logo__text">Manel Navarro</span>
    </a>
  );
}
