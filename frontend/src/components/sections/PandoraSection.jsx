import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";

const PANDORA_IMAGE = "https://images.unsplash.com/photo-1763029513623-37d488cb97b1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYnJhY2VsZXR8ZW58MHx8fHwxNzcyNDY1NzE4fDA&ixlib=rb-4.1.0&q=85&w=800";

export const PandoraSection = () => {
  return (
    <section
      id="pandora"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
      style={{ background: 'var(--gradient-pandora)' }}
    >
      {/* Decorative subtle circles */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-pandora/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-pandora/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pandora/10 text-pandora mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs font-sans font-semibold tracking-wider uppercase">
                Distribuidor Oficial
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-6">
              Universo{" "}
              <span className="text-pandora italic">Pandora</span>
            </h2>

            <div className="w-12 h-[2px] bg-pandora/40 mb-6" />

            <p className="text-muted-foreground font-sans text-base sm:text-lg leading-relaxed mb-4">
              Descubre la colección completa de Pandora en nuestra tienda. Charms, pulseras, anillos y collares que cuentan tu historia.
            </p>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-8">
              Como distribuidores oficiales, te garantizamos autenticidad, las últimas novedades y asesoramiento personalizado para encontrar la pieza perfecta.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
              <Button
                variant="pandora"
                size="lg"
                className="tracking-wider uppercase text-xs font-semibold"
                onClick={() => window.open('https://www.pandora.net', '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
                Ver Catálogo Completo de Pandora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="tracking-wider uppercase text-xs font-semibold border-pandora/30 text-pandora hover:bg-pandora/5 hover:text-pandora"
                onClick={() => {
                  const el = document.querySelector("#contacto");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Consultar Disponibilidad
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-3 sm:-inset-4 border border-pandora/15 rounded-xl" />
              <div className="relative overflow-hidden rounded-lg aspect-[3/2] sm:aspect-[4/3] lg:aspect-[3/4] max-h-[420px] lg:max-h-none">
                <img
                  src={PANDORA_IMAGE}
                  alt="Colección Pandora en Joyerías Orozco"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pandora/10 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-4 bg-card rounded-lg shadow-elegant p-3 sm:p-4 border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-pandora/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-pandora" />
                  </div>
                  <div>
                    <p className="text-xs font-sans font-semibold text-foreground">100% Original</p>
                    <p className="text-xs font-sans text-muted-foreground">Garantía oficial</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
