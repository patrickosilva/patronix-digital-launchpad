import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="relative py-24">
    <div className="section-divider mb-24" />
    {/* Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="neon-border rounded-2xl p-12 md:p-16 text-center max-w-3xl mx-auto"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Seu negócio merece uma presença digital de{" "}
          <span className="neon-text">alto nível</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Não perca mais tempo com sites genéricos. Invista em uma presença digital que realmente
          transmite autoridade e gera resultados.
        </p>
        <button
          onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
          className="neon-btn text-lg flex items-center gap-2 mx-auto"
        >
          Solicitar Orçamento <ArrowRight size={20} />
        </button>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
