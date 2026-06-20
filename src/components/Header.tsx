import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/patronix-logo.png";

const whatsappLink = `https://wa.me/5521920086201?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento com a Patronix.")}`;

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Soluções", href: "#solucoes" },
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
        if (el && el.getBoundingClientRect().top <= 140) {
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
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo("#inicio")} className="flex items-center gap-3">
          <img src={logo} alt="Patronix" className="w-9 h-9 object-contain" />
          <span className="font-display text-xl font-bold tracking-wide brand-text">PATRONIX</span>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === link.href.slice(1) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex btn-primary text-sm !px-5 !py-2.5">
          Solicitar Orçamento
        </a>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 pb-6 pt-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`block w-full text-left py-3 text-sm font-medium transition-colors ${
                activeSection === link.href.slice(1) ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs mt-5 w-full !py-2 !px-4">
            Solicitar Orçamento
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
