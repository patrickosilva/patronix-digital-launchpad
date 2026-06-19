import { motion } from "framer-motion";
import { Code2, ShieldCheck, Workflow, Sparkles } from "lucide-react";

const focus = [
  { icon: Code2, title: "Engenharia de Software", desc: "Sistemas robustos com qualidade técnica." },
  { icon: ShieldCheck, title: "Cibersegurança", desc: "Proteção integrada por padrão." },
  { icon: Workflow, title: "Automação", desc: "Processos eficientes e escaláveis." },
  { icon: Sparkles, title: "Transformação Digital", desc: "Evolução tecnológica com propósito." },
];

const AboutSection = () => (
  <section id="sobre" className="relative py-28">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Sobre a Patronix</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6 leading-tight">
            Tecnologia com <span className="purple-text">propósito</span> e <span className="purple-text">segurança</span>.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5 text-lg">
            A Patronix é uma empresa de tecnologia focada em entregar soluções modernas, seguras e
            escaláveis para negócios que buscam crescer com inteligência.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Atuamos em engenharia de software, cibersegurança, automação de processos e transformação
            digital, conectando estratégia, tecnologia e resultado em cada projeto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {focus.map((f) => (
            <div key={f.title} className="glass-card-hover p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-display font-semibold mb-1">{f.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
