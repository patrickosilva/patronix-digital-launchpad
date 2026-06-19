import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Zap, Sparkles, LifeBuoy } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, title: "Segurança", desc: "Proteção em todas as camadas, do código à infraestrutura." },
  { icon: TrendingUp, title: "Escalabilidade", desc: "Arquiteturas preparadas para crescer junto com o seu negócio." },
  { icon: Zap, title: "Performance", desc: "Sistemas rápidos, otimizados e prontos para alta demanda." },
  { icon: Sparkles, title: "Inovação", desc: "Aplicação de IA, automação e tecnologias modernas." },
  { icon: LifeBuoy, title: "Suporte", desc: "Acompanhamento próximo, técnico e orientado a resultados." },
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
        <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Por que Patronix</p>
        <h2 className="font-display text-3xl sm:text-5xl font-bold mb-5">
          Construído sobre <span className="purple-text">pilares sólidos</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Cada projeto entregue pela Patronix carrega os mesmos princípios que definem nossa marca.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-card-hover p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto rounded-xl bg-primary/15 flex items-center justify-center mb-4">
              <p.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-base font-semibold mb-2">{p.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PlansSection;
