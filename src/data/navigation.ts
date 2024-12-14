export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: 'Strona główna', href: '/' },
  { name: 'Produkty', href: '/produkty' },
  { name: 'O nas', href: '/o-nas' },
  { name: 'Kontakt', href: '/kontakt' },
];