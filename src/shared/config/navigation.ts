export interface NavigationItem {
  label: string;
  href: string;
}

export const homeNavigation: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export const legalNavigation: NavigationItem[] = [
  { label: "Home", href: "/#home" },
  { label: "Aviso Legal", href: "/aviso-legal" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/cookies" },
];
