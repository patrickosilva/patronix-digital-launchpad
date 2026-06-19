import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

const WHATSAPP = "https://wa.me/5521920086201?text=" + encodeURIComponent("Olá! Gostaria de conversar com a Patronix.");
const EMAIL = "cyberpatronix@gmail.com";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  message: z.string().trim().min(10, "Mensagem muito curta").max(1000),
});

const CTASection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast({ title: "Verifique os campos", description: r.error.issues[0].message, variant: "destructive" });
      return;
    }
    setSending(true);
    const text = `Olá Patronix! Sou ${r.data.name} (${r.data.email}).\n\n${r.data.message}`;
    window.open(`https://wa.me/5521920086201?text=${encodeURIComponent(text)}`, "_blank");
    setTimeout(() => setSending(false), 600);
  };

  return (
    <section id="contato" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[180px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Contato</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-5 leading-tight">
            Vamos transformar sua ideia em uma <span className="purple-text">solução digital segura e escalável</span>.
          </h2>
          <p className="text-muted-foreground text-lg">
            Resposta rápida. Atendimento direto com nossa equipe técnica.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 premium-border rounded-2xl p-8 space-y-4"
          >
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-2 block">Nome</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors text-sm"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-2 block">E-mail</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors text-sm"
                placeholder="voce@empresa.com"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-2 block">Mensagem</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors text-sm resize-none"
                placeholder="Conte um pouco sobre o seu projeto..."
              />
            </div>
            <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-60">
              {sending ? "Enviando..." : <>Enviar mensagem <Send size={16} /></>}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="glass-card-hover p-6 flex items-start gap-4 block">
              <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-semibold mb-1">WhatsApp</p>
                <p className="text-sm text-muted-foreground mb-2">+55 21 92008-6201</p>
                <span className="text-xs text-primary">Falar agora →</span>
              </div>
            </a>

            <a href={`mailto:${EMAIL}`} className="glass-card-hover p-6 flex items-start gap-4 block">
              <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-semibold mb-1">E-mail</p>
                <p className="text-sm text-muted-foreground mb-2 break-all">{EMAIL}</p>
                <span className="text-xs text-primary">Enviar e-mail →</span>
              </div>
            </a>

            <div className="glass-card p-6">
              <p className="text-xs font-medium text-primary mb-2 tracking-wider uppercase">Tempo de resposta</p>
              <p className="font-display font-semibold mb-1">Respondemos em até 24h</p>
              <p className="text-xs text-muted-foreground">Atendimento técnico, direto e personalizado.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
