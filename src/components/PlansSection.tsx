import { motion } from "framer-motion";
import { ShieldCheck, Zap, Target, Handshake } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, title: "Segurança em Primeiro Lugar", desc: "Cada projeto é construído com proteção integrada desde a origem." },
  { icon: Zap, title: "Performance e Eficiência", desc: "Sistemas rápidos, otimizados e prontos para escalar com a sua operação." },
  { icon: Target, title: "Soluções Sob Medida", desc: "Nada genérico. Tudo desenhado para o seu contexto e seus objetivos." },
  { icon: Handshake, title: "Atendimento Dedicado", desc: "Um profissional responsável acompanha sua demanda do início ao fim, garantindo comunicação clara, agilidade e um atendimento mais próximo." },
];

const PlansSection = () => (
  <section id="solucoes" className="relative py-28 overflow-hidden">
    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px]" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Diferenciais</p>
        <h2 className="font-display text-3xl sm:text-5xl font-bold mb-5">
          Por que escolher a <span className="purple-text">Patronix</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Quatro princípios que orientam cada projeto que entregamos.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-card-hover p-6"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
              <p.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-base font-semibold mb-2">{p.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 text-center font-display text-xl sm:text-2xl font-medium text-foreground/90 max-w-3xl mx-auto"
      >
        Desenvolvemos soluções. <span className="purple-text">Protegemos operações.</span> Impulsionamos resultados.
      </motion.p>
    </div>
  </section>
);

export default PlansSection;
