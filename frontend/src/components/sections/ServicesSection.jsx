import { motion } from "framer-motion";
import { Wrench, Watch, UserCheck, Gem } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Taller Propio",
    description: "Contamos con un taller artesanal donde nuestros maestros joyeros dan vida a piezas únicas y realizan las reparaciones más exigentes.",
  },
  {
    icon: Watch,
    title: "Reparación de Relojes",
    description: "Servicio técnico especializado en relojería. Cambio de pilas, ajustes, pulido y reparaciones complejas de alta relojería.",
  },
  {
    icon: UserCheck,
    title: "Asesoramiento Personalizado",
    description: "Nuestro equipo te guiará para encontrar la pieza perfecta. Cada cliente recibe una atención exclusiva y dedicada.",
  },
  {
    icon: Gem,
    title: "Tasación y Compra de Oro",
    description: "Valoramos tus joyas y oro con total transparencia y profesionalidad. Tasaciones gratuitas y sin compromiso.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const ServicesSection = () => {
  return (
    <section
      id="servicios"
      className="py-20 sm:py-28 lg:py-32"
      style={{ background: 'var(--gradient-warm-section)' }}
    >
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
            Nuestros Servicios
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Excelencia Artesanal
          </h2>
          <div className="accent-line-gold-center" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="bg-card border-border/60 shadow-card hover:shadow-card-hover transition-shadow duration-500 h-full flex flex-col">
                  <CardContent className="p-6 sm:p-8 flex flex-col flex-1">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6">
                      <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    {/* Title */}
                    <h3 className="font-serif text-lg font-medium text-foreground mb-3">
                      {service.title}
                    </h3>
                    {/* Description */}
                    <p className="text-muted-foreground text-sm font-sans leading-relaxed mt-auto">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
