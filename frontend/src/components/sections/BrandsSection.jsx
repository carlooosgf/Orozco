import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Alta Relojería",
    description: "Las mejores marcas de relojería al alcance de tu muñeca",
    image: "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaHxlbnwwfHx8fDE3NzI0NjU2NzN8MA&ixlib=rb-4.1.0&q=85&w=800",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Bolsos y Complementos",
    description: "Diseño y distinción para completar tu estilo",
    image: "https://images.unsplash.com/photo-1596552639068-99bd471b579c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHw0fHxkZXNpZ25lciUyMGhhbmRiYWd8ZW58MHx8fHwxNzcyNDY1NzA1fDA&ixlib=rb-4.1.0&q=85&w=600",
    span: "md:col-span-1",
  },
  {
    title: "Alianzas de Boda",
    description: "El símbolo perfecto para vuestra historia de amor",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3N8ZW58MHx8fHwxNzcyNDY1Njc3fDA&ixlib=rb-4.1.0&q=85&w=800",
    span: "md:col-span-1",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const BrandsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="marcas" className="py-20 sm:py-28 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <p className="text-gold font-sans text-xs sm:text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Nuestro Catálogo
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Nuestras Marcas
          </h2>
          <div className="accent-line-gold-center" />
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className={`${cat.span} group relative overflow-hidden rounded-lg cursor-pointer`}
              style={{ minHeight: i === 0 ? '420px' : '240px' }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
                <div className="transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-card mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-card/70 text-sm font-sans leading-relaxed max-w-xs mb-3">
                    {cat.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold text-xs font-sans font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span>Descubrir</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
