import { Instagram, MessageCircle, Mail, Globe } from "lucide-react";
import logo from "@/assets/patronix-logo.png";

const FooterSection = () => (
  <footer className="relative pt-20 pb-8 border-t border-border">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Patronix" className="w-9 h-9 object-contain" />
            <span className="font-display text-xl font-bold brand-text">PATRONIX</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-4">
            Desenvolvimento de Software • Cibersegurança • Automação
          </p>
          <p className="text-xs text-muted-foreground max-w-sm leading-relaxed mb-4">
            Empresa de tecnologia especializada em soluções digitais seguras, escaláveis e inteligentes.
          </p>
          <p className="font-display text-sm text-foreground/90 max-w-sm leading-relaxed italic">
            "Desenvolvemos soluções. Protegemos operações. Impulsionamos resultados."
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm">Navegação</h4>
          <ul className="space-y-2.5">
            {[
              { l: "Início", id: "inicio" },
              { l: "Serviços", id: "servicos" },
              { l: "Soluções", id: "solucoes" },
              { l: "Sobre", id: "sobre" },
              { l: "Contato", id: "contato" },
            ].map((i) => (
              <li key={i.id}>
                <button
                  onClick={() => document.getElementById(i.id)?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {i.l}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm">Contato</h4>
          <ul className="space-y-3">
            <li>
              <a href="https://wa.me/5521920086201" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" /> (21) 92008-6201
              </a>
            </li>
            <li>
              <a href="mailto:cyberpatronix@gmail.com" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                <Mail className="w-4 h-4 shrink-0" /> cyberpatronix@gmail.com
              </a>
            </li>
            <li>
              <a href="https://instagram.com/cyberpatronix" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" /> @cyberpatronix
              </a>
            </li>
            <li>
              <a href="https://cyberpatronix.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Globe className="w-4 h-4" /> cyberpatronix.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="section-divider mb-6" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Patronix. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground">
          Tecnologia • Segurança • Inovação
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
