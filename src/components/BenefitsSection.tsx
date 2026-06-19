import { motion } from "framer-motion";
import { Code2, Globe, LayoutGrid, Workflow, ShieldCheck, Bug, FileSearch, Lock } from "lucide-react";

const pillars = [
  {
    label: "Desenvolvimento",
    title: "Software sob medida para a sua operação",
    desc: "Construímos sistemas, sites e aplicações pensados para resolver problemas reais do seu negócio.",
    items: [
      { icon: Code2, title: "Sistemas Sob Medida", desc: "Plataformas internas e ERPs desenvolvidos para o seu fluxo." },
      { icon: Globe, title: "Sites Profissionais", desc: "Presença digital moderna, rápida e otimizada para conversão." },
      { icon: LayoutGrid, title: "Aplicações Web", desc: "SaaS, painéis e portais escaláveis com tecnologia atual." },
      { icon: Workflow, title: "Automação de Processos", desc: "Integrações e fluxos que eliminam tarefas manuais." },
    ],
  },
  {
    label: "Cibersegurança",
    title: "Proteção digital contínua para a sua empresa",
    desc: "Identificamos vulnerabilidades, reduzimos riscos e fortalecemos a segurança da sua operação.",
    items: [
      { icon: Bug, title: "Pentest", desc: "Testes de intrusão controlados para encontrar falhas antes dos atacantes." },
      { icon: FileSearch, title: "Análise de Vulnerabilidades", desc: "Diagnóstico técnico de sistemas, redes e aplicações." },
      { icon: ShieldCheck, title: "Consultoria em Segurança", desc: "Orientação estratégica para elevar a maturidade em segurança." },
      { icon: Lock, title: "Proteção Digital", desc: "Hardening, monitoramento e boas práticas aplicadas continuamente." },
    ],
  },
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
          Dois pilares. <span className="purple-text">Uma única missão</span>: crescer com segurança.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Unimos desenvolvimento de software e cibersegurança para entregar soluções modernas, eficientes
          e protegidas desde a origem.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {pillars.map((pillar, pi) => (
          <motion.div
            key={pillar.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: pi * 0.1 }}
            className="premium-border rounded-2xl p-8"
          >
            <p className="text-xs font-semibold text-primary mb-3 tracking-wider uppercase">{pillar.label}</p>
            <h3 className="font-display text-2xl font-bold mb-3">{pillar.title}</h3>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">{pillar.desc}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {pillar.items.map((s) => (
                <div key={s.title} className="glass-card-hover p-5 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-display text-base font-semibold mb-1.5">{s.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
