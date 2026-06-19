import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/patronix-hero-bg.jpg";

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const whatsapp = `https://wa.me/5521920086201?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento com a Patronix.")}`;

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" aria-hidden className="w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
    </div>

    <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[160px]" />

    <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full premium-border mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-xs font-medium text-foreground/80 tracking-wide">Tecnologia • Segurança • Inovação</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-6"
        >
          Tecnologia, Segurança e{" "}
          <span className="purple-text">Inovação</span>{" "}
          para o seu negócio.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
        >
          Desenvolvemos sistemas, automações e soluções digitais seguras para empresas que desejam crescer
          com eficiência, escalabilidade e confiança.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Solicitar Orçamento <ArrowRight size={18} />
          </a>
          <button onClick={() => scrollTo("servicos")} className="btn-outline">
            Conhecer Serviços
          </button>
        </motion.div>
      </div>
    </div>

    {/* bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
