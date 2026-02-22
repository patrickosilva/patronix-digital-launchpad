import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const HeroSection = () => {
  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-xs font-medium text-muted-foreground">Tecnologia & Inovação Digital</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transformamos sua{" "}
              <span className="neon-text">presença digital</span>{" "}
              em autoridade
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Sites profissionais com design estratégico, performance otimizada e foco em conversão.
              Sua empresa merece um posicionamento digital de alto nível.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToPlans} className="neon-btn flex items-center justify-center gap-2 text-base">
                Ver Planos <ArrowRight size={18} />
              </button>
              <button
                onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
                className="neon-btn-outline text-base"
              >
                Conheça a Patronix
              </button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden neon-border">
              <img src={heroImage} alt="Patronix - Tecnologia Digital" className="w-full h-auto rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
