import { motion } from "framer-motion";
import { Check, Lock, Crown, Star, Gem } from "lucide-react";

interface Plan {
  name: string;
  icon: React.ElementType;
  price: string;
  features: string[];
  featured?: boolean;
  locked?: boolean;
  badge?: string;
}

const activePlans: Plan[] = [
  {
    name: "Essencial",
    icon: Star,
    price: "R$ 997",
    features: [
      "Site institucional completo",
      "Design responsivo",
      "WhatsApp integrado",
      "Certificado SSL",
      "Entrega em até 7 dias",
    ],
  },
  {
    name: "Profissional",
    icon: Gem,
    price: "R$ 1.997",
    featured: true,
    badge: "Mais Popular",
    features: [
      "Tudo do Essencial",
      "Página de vendas",
      "SEO básico",
      "Integração com redes sociais",
      "Formulário inteligente",
    ],
  },
  {
    name: "Premium",
    icon: Crown,
    price: "Sob Consulta",
    badge: "Recomendado",
    features: [
      "Tudo do Profissional",
      "Copy estratégica",
      "Otimização avançada de SEO",
      "Performance otimizada",
      "Estrutura para tráfego pago",
    ],
  },
];

const lockedPlans: Plan[] = [
  {
    name: "Proteção Web",
    icon: Lock,
    price: "Em Breve",
    locked: true,
    features: ["Monitoramento de ameaças", "Firewall de aplicação", "Relatórios de segurança"],
  },
  {
    name: "Segurança Empresarial",
    icon: Lock,
    price: "Em Breve",
    locked: true,
    features: ["Proteção contra ataques DDoS", "Segurança para e-commerce", "Backup automático"],
  },
  {
    name: "Auditoria Digital",
    icon: Lock,
    price: "Em Breve",
    locked: true,
    features: ["Análise de vulnerabilidades", "Auditoria completa", "Consultoria de segurança"],
  },
];

const PlanCard = ({ plan, index }: { plan: Plan; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`relative rounded-2xl p-8 flex flex-col ${
      plan.locked
        ? "plan-locked glass-card"
        : plan.featured
        ? "plan-featured glass-card bg-card/70"
        : "glass-card-hover"
    }`}
  >
    {plan.badge && !plan.locked && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold neon-btn !py-1 !px-4">
        {plan.badge}
      </div>
    )}

    {plan.locked && (
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium border border-border">
        🔒 Disponível em breve
      </div>
    )}

    <div className="flex items-center gap-3 mb-4 mt-2">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${plan.locked ? "bg-muted" : "bg-primary/10"}`}>
        <plan.icon className={`w-5 h-5 ${plan.locked ? "text-muted-foreground" : "text-primary"}`} />
      </div>
      <h3 className="font-display text-xl font-bold">{plan.name}</h3>
    </div>

    <div className="mb-6">
      <span className={`font-display text-3xl font-bold ${plan.locked ? "text-muted-foreground" : "neon-text"}`}>
        {plan.price}
      </span>
    </div>

    <ul className="space-y-3 mb-8 flex-1">
      {plan.features.map((f) => (
        <li key={f} className="flex items-start gap-3 text-sm">
          <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.locked ? "text-muted-foreground" : "text-primary"}`} />
          <span className={plan.locked ? "text-muted-foreground" : "text-foreground/80"}>{f}</span>
        </li>
      ))}
    </ul>

    {!plan.locked ? (
      <button className={plan.featured ? "neon-btn w-full" : "neon-btn-outline w-full"}>
        Quero este plano
      </button>
    ) : (
      <button className="w-full py-3 rounded-lg bg-muted text-muted-foreground text-sm font-medium cursor-not-allowed" disabled>
        Em Breve
      </button>
    )}
  </motion.div>
);

const PlansSection = () => (
  <section id="planos" className="relative py-24">
    <div className="section-divider mb-24" />
    {/* Background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Planos sob medida para o <span className="neon-text">seu negócio</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Escolha o pacote ideal para sua empresa e comece a transformar sua presença digital hoje.
        </p>
      </motion.div>

      {/* Active plans */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {activePlans.map((plan, i) => (
          <PlanCard key={plan.name} plan={plan} index={i} />
        ))}
      </div>

      {/* Locked plans */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h3 className="font-display text-2xl font-bold mb-2">
          Segurança Digital — <span className="text-muted-foreground">Em Breve</span>
        </h3>
        <p className="text-sm text-muted-foreground">Pacotes avançados de proteção digital para sua empresa.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {lockedPlans.map((plan, i) => (
          <PlanCard key={plan.name} plan={plan} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default PlansSection;
