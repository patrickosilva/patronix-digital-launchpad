import { motion } from "framer-motion";
import { Shield, Zap, Smartphone, Headphones, Palette, BarChart3 } from "lucide-react";

const benefits = [
  { icon: Palette, title: "Design Estratégico", desc: "Layouts pensados para converter visitantes em clientes com identidade visual única." },
  { icon: Zap, title: "Performance", desc: "Sites rápidos e otimizados que carregam em milissegundos e ranqueiam no Google." },
  { icon: Shield, title: "Segurança", desc: "Certificado SSL, proteção contra invasões e infraestrutura segura." },
  { icon: Headphones, title: "Suporte Dedicado", desc: "Acompanhamento próximo durante e após a entrega do seu projeto." },
  { icon: Smartphone, title: "Responsividade", desc: "Experiência perfeita em qualquer dispositivo: desktop, tablet ou mobile." },
  { icon: BarChart3, title: "Profissionalismo", desc: "Código limpo, boas práticas e estrutura preparada para crescer." },
];

const BenefitsSection = () => (
  <section id="beneficios" className="relative py-24">
    <div className="section-divider mb-24" />
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Por que escolher a <span className="neon-text">Patronix</span>?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Combinamos tecnologia de ponta com estratégia digital para entregar resultados reais.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card-hover p-8 group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
