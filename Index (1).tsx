import { motion } from "framer-motion";
import bookCover from "@/assets/book-cover.png";
import { BookOpen, Scale, Shield, Target, Users, Calendar, MapPin, Mail, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-serif text-lg tracking-wide text-primary">DAS</span>
          <div className="hidden md:flex gap-8 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-primary transition-colors">A Obra</a>
            <a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a>
            <a href="#autor" className="hover:text-primary transition-colors">Autor</a>
            <a href="#lancamento" className="hover:text-primary transition-colors">Lançamento</a>
          </div>
          <a href="#lancamento">
            <Button size="sm" className="text-xs">EXPOSEC 2026</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-16">
          {/* Book Cover */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="shrink-0 order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl" />
              <img
                src={bookCover}
                alt="Capa do livro Direito Administrativo Sancionador no Estatuto da Segurança Privada"
                className="relative w-64 sm:w-72 md:w-80 rounded-lg shadow-2xl shadow-primary/10"
              />
            </div>
          </motion.div>

          {/* Hero Text */}
          <div className="text-center lg:text-left order-1 lg:order-2 flex-1">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-8"
          >
            Lançamento na EXPOSEC 2026
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 tracking-tight"
          >
            Direito Administrativo Sancionador no Estatuto da Segurança Privada
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-muted-foreground tracking-widest uppercase mb-8"
          >
            Lei nº 14.967/2024
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 italic font-serif"
          >
            "Quando a regulação encontra seus limites: uma análise essencial para o setor de segurança privada."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm text-muted-foreground mb-10"
          >
            por <span className="text-foreground font-medium">Carmino Eduardo Pereira</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href="#sobre">
              <Button size="lg" className="group text-sm px-8">
                Conheça a Obra
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#lancamento">
              <Button variant="outline" size="lg" className="text-sm px-8">
                <Calendar className="mr-2 h-4 w-4" />
                03–06 Jun 2026
              </Button>
            </a>
          </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
          </motion.div>
        </div>
      </section>

      {/* Sobre o Livro */}
      <section id="sobre" className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Sobre a Obra</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Uma Contribuição Essencial ao Debate Jurídico</h2>
            <div className="w-16 h-px bg-primary mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <p>
                A obra analisa de forma aprofundada o <strong className="text-foreground">Direito Administrativo Sancionador</strong> aplicado ao novo Estatuto da Segurança Privada (Lei nº 14.967/2024), explorando os fundamentos do poder punitivo estatal no contexto da regulação do setor.
              </p>
              <p>
                Com abordagem que une rigor acadêmico e aplicabilidade prática, o livro examina os limites do poder regulatório, os princípios constitucionais que regem o processo administrativo sancionador e as implicações diretas para empresas e profissionais da segurança privada.
              </p>
              <p>
                Uma leitura indispensável para quem atua na interseção entre o Direito Administrativo e a atividade de segurança privada regulada pela Polícia Federal.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Scale, label: "Processo Administrativo Sancionador" },
                { icon: Shield, label: "Poder Regulatório e Segurança Privada" },
                { icon: BookOpen, label: "Análise da Lei nº 14.967/2024" },
                { icon: Target, label: "Limites do Poder Punitivo do Estado" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-lg p-5 flex flex-col items-center text-center gap-3 hover:border-primary/30 transition-colors"
                >
                  <item.icon className="h-6 w-6 text-primary" />
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-24 md:py-32 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Diferenciais</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Por Que Esta Obra É Diferente</h2>
            <div className="w-16 h-px bg-primary mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Abordagem Técnica com Aplicação Prática",
                desc: "Conecta a teoria do Direito Administrativo Sancionador com a realidade operacional das empresas de segurança privada.",
              },
              {
                title: "Análise Crítica da Atuação Administrativa",
                desc: "Examina os excessos e limites do poder punitivo estatal, oferecendo ferramentas de defesa e compliance.",
              },
              {
                title: "Contribuição Inédita ao Debate Jurídico",
                desc: "Preenche uma lacuna doutrinária ao tratar especificamente do regime sancionador no novo Estatuto da Segurança Privada.",
              },
              {
                title: "Utilidade Real para Profissionais e Empresas",
                desc: "Oferece orientação prática para advogados, gestores e diretores jurídicos que atuam no setor regulado.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                className="flex gap-4 items-start"
              >
                <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-serif text-lg mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Autor */}
      <section id="autor" className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">O Autor</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Carmino Eduardo Pereira</h2>
            <div className="w-16 h-px bg-primary mx-auto" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="bg-card border border-border rounded-2xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center shrink-0 mx-auto md:mx-0">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Advogado</strong> com sólida atuação no Direito Administrativo e Empresarial, <strong className="text-foreground">Mestre em Direito Administrativo</strong> e <strong className="text-foreground">Especialista em Direito Empresarial</strong>.
                </p>
                <p>
                  Alia experiência prática na assessoria jurídica a empresas do setor de segurança privada com produção acadêmica consistente, dedicando-se ao estudo dos mecanismos de controle estatal sobre atividades reguladas.
                </p>
                <p>
                  Sua trajetória combina a vivência forense com a reflexão doutrinária, resultando em uma obra que fala diretamente aos desafios enfrentados por profissionais e empresas diante do poder sancionador da Administração Pública.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lançamento */}
      <section id="lancamento" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Lançamento Oficial</p>
            <h2 className="font-serif text-3xl md:text-5xl mb-8">EXPOSEC 2026</h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-lg mx-auto mb-12"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 justify-center">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-lg">03 a 06 de junho de 2026</span>
              </div>
              <div className="w-12 h-px bg-border mx-auto" />
              <div className="flex items-center gap-3 justify-center">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-lg">Expo Center Norte – São Paulo</span>
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="text-muted-foreground max-w-lg mx-auto"
          >
            O livro será apresentado oficialmente durante a maior feira de segurança da América Latina. Acompanhe as novidades e garanta sua presença.
          </motion.p>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <Mail className="h-8 w-8 text-primary mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Fique por Dentro</h2>
            <p className="text-muted-foreground mb-8 text-sm">
              Cadastre-se para receber atualizações sobre o lançamento, conteúdos exclusivos e novidades sobre a obra.
            </p>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 bg-card"
            />
            <Button type="submit" className="px-8">
              Cadastrar
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-serif text-foreground">
            Direito Administrativo Sancionador no Estatuto da Segurança Privada
          </p>
          <p>© 2025 Carmino Eduardo Pereira. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
