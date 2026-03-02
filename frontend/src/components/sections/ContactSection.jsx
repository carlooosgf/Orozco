import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "C/ Real, 45\nDos Hermanas, 41700\nSevilla, España",
    multiline: true,
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun - Vie: 10:00 - 14:00 / 17:30 - 20:30\nSáb: 10:00 - 14:00\nDom: Cerrado",
    multiline: true,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+34 955 66 12 34",
    href: "tel:+34955661234",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@joyeriasorozco.es",
    href: "mailto:info@joyeriasorozco.es",
  },
];

export const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 sm:py-28 lg:py-32 bg-background">
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
            Encuéntranos
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Visita Nuestra Tienda
          </h2>
          <div className="accent-line-gold-center" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label} className="bg-card border-border/60 shadow-card">
                  <CardContent className="p-5 sm:p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-sans font-semibold tracking-wider uppercase text-muted-foreground mb-1.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-sans text-foreground hover:text-gold transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-sans text-foreground whitespace-pre-line leading-relaxed">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* WhatsApp CTA */}
            <Button
              variant="gold"
              size="lg"
              className="w-full tracking-wider uppercase text-xs font-semibold"
              onClick={() => window.open('https://wa.me/34955661234?text=Hola%2C%20me%20gustaría%20información%20sobre...', '_blank')}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hablar por WhatsApp
            </Button>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="overflow-hidden border-border/60 shadow-card h-full">
              <div className="w-full h-full min-h-[400px] lg:min-h-[500px]">
                <iframe
                  title="Ubicación de Joyerías Orozco en Dos Hermanas"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.8!2d-5.9226!3d37.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDos+Hermanas%2C+Sevilla!5e0!3m2!1ses!2ses!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
