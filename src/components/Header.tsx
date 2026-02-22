import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/patronix-logo.jfif";

const whatsappLink = `https://wa.me/5521974977175?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento para criação de site com a Patronix.")}`;

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#beneficios" },
  { label: "Planos", href: "#planos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" onClick={() => scrollTo("#inicio")} className="flex items-center gap-2">
          <img src={logoImage} alt="Patronix" className="h-8 w-auto rounded" />
          <span className="font-display text-2xl font-bold neon-text">PATRONIX</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === link.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="neon-btn text-sm !px-6 !py-2.5 inline-block">
            Solicitar Orçamento
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`block w-full text-left py-3 text-sm font-medium transition-colors ${
                activeSection === link.href.slice(1) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="neon-btn text-sm !px-6 !py-2.5 mt-3 w-full inline-block text-center">
            Solicitar Orçamento
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
