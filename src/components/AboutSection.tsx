import { motion } from "framer-motion";
import { Target, Lightbulb, ShieldCheck, Rocket } from "lucide-react";

const values = [
  { icon: Target, title: "Foco em Resultados", desc: "Cada pixel é pensado para converter." },
  { icon: Lightbulb, title: "Inovação Constante", desc: "Tecnologias modernas e tendências atuais." },
  { icon: ShieldCheck, title: "Confiança", desc: "Transparência e compromisso em cada entrega." },
  { icon: Rocket, title: "Crescimento", desc: "Estruturas preparadas para escalar." },
];

const AboutSection = () => (
  <section id="sobre" className="relative py-24">
    <div className="section-divider mb-24" />
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Sobre a <span className="neon-text">Patronix</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A Patronix nasceu com a missão de democratizar o acesso a soluções digitais de alto nível.
            Acreditamos que toda empresa, independente do tamanho, merece uma presença online que transmita
            autoridade, profissionalismo e confiança.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Combinamos design estratégico, tecnologia de ponta e uma visão orientada a resultados para
            criar experiências digitais que realmente fazem a diferença no crescimento dos nossos clientes.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <v.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{v.title}</p>
                  <p className="text-xs text-muted-foreground">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "100%", label: "Dedicação ao Cliente" },
              { value: "98%", label: "Satisfação dos Clientes" },
              { value: "24h", label: "Suporte Rápido" },
              { value: "∞", label: "Compromisso com Qualidade" },
            ].map((stat, i) => (
              <div key={stat.label} className="glass-card-hover p-6 text-center">
                <p className="font-display text-3xl font-bold neon-text mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
