import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5fGVufDB8fHx8MTc3MjQ2NTY2OXww&ixlib=rb-4.1.0&q=85&w=1920";

export const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE;
    img.onload = () => setImageLoaded(true);
  }, []);

  const scrollToMap = () => {
    const el = document.querySelector("#contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    const el = document.querySelector("#marcas");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: 'var(--gradient-hero-overlay)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Decorative gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-16 h-[2px] mx-auto"
            style={{ background: 'var(--gradient-gold)' }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gold font-sans text-xs sm:text-sm tracking-[0.3em] uppercase font-medium"
          >
            Desde 1985 en Dos Hermanas
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-card tracking-tight"
          >
            Tu Joyería de Confianza{" "}
            <span className="block mt-2">
              en{" "}
              <span className="text-gold italic">Dos Hermanas</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-card/75 font-sans text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Distribuidores Oficiales de Pandora y especialistas en relojería y complementos
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button
              variant="gold"
              size="lg"
              onClick={scrollToMap}
              className="min-w-[200px] tracking-wider uppercase text-xs font-semibold"
            >
              <MapPin className="w-4 h-4" />
              Dónde Estamos
            </Button>
            <Button
              variant="hero-light"
              size="lg"
              onClick={scrollToBrands}
              className="min-w-[200px] tracking-wider uppercase text-xs font-semibold"
            >
              Descubre Nuestras Marcas
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToBrands}
          className="flex flex-col items-center gap-2 text-card/50 hover:text-card/80 transition-colors duration-300"
        >
          <span className="text-xs tracking-widest uppercase font-sans">Explorar</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};
