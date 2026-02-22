import { Instagram, MessageCircle } from "lucide-react";

const FooterSection = () => (
  <footer id="contato" className="relative pt-24 pb-8">
    <div className="section-divider mb-16" />
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl font-bold neon-text mb-4">PATRONIX</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Transformando negócios através de soluções digitais inteligentes, seguras e de alto impacto.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display font-semibold mb-4">Navegação</h4>
          <ul className="space-y-2">
            {["Início", "Serviços", "Planos", "Sobre"].map((item) => (
              <li key={item}>
                <button
                  onClick={() =>
                    document
                      .getElementById(item === "Serviços" ? "beneficios" : item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold mb-4">Contato</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <MessageCircle className="w-4 h-4 text-primary" />
              <a href="https://wa.me/5521974977175" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                WhatsApp: (21) 97497-7175
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <Instagram className="w-4 h-4 text-primary" />
              <a href="https://instagram.com/cyberpatronix" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                @cyberpatronix
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="section-divider mb-6" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Patronix. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/cyberpatronix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
