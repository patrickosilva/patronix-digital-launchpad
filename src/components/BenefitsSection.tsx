import { motion } from "framer-motion";
import { Code2, Globe, Workflow, BrainCircuit, ShieldCheck, Lightbulb } from "lucide-react";

const services = [
  { icon: Code2, title: "Desenvolvimento de Sistemas", desc: "Sistemas sob medida, robustos e escaláveis para a operação da sua empresa." },
  { icon: Globe, title: "Desenvolvimento Web", desc: "Sites institucionais, landing pages e plataformas modernas com alta performance." },
  { icon: Workflow, title: "Automação de Processos", desc: "Reduza tarefas manuais e ganhe produtividade com fluxos automatizados sob medida." },
  { icon: BrainCircuit, title: "Inteligência Artificial", desc: "Soluções de IA aplicadas para análise, atendimento e tomada de decisão." },
  { icon: ShieldCheck, title: "Cibersegurança", desc: "Proteção contínua de dados, sistemas e infraestrutura digital da sua empresa." },
  { icon: Lightbulb, title: "Consultoria Tecnológica", desc: "Estratégia digital orientada a resultados, eficiência e transformação tecnológica." },
];

const BenefitsSection = () => (
  <section id="servicos" className="relative py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-16"
      >
        <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Nossos Serviços</p>
        <h2 className="font-display text-3xl sm:text-5xl font-bold mb-5">
          Soluções tecnológicas <span className="purple-text">de ponta a ponta</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Combinamos engenharia de software, segurança e inteligência artificial para entregar resultados
          mensuráveis para a sua empresa.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-card-hover p-8 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-6 group-hover:bg-primary/25 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
