import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-serif text-xl font-semibold">
              Joyerías <span className="text-gold">Orozco</span>
            </span>
            <p className="mt-4 text-primary-foreground/60 text-sm font-sans leading-relaxed max-w-xs">
              Tu joyería de confianza en Dos Hermanas desde 1985. Distribuidores oficiales de Pandora.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-primary-foreground/40 mb-4">
              Secciones
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Nuestras Marcas", href: "#marcas" },
                { label: "Pandora", href: "#pandora" },
                { label: "Servicios", href: "#servicios" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-sans text-primary-foreground/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-primary-foreground/40 mb-4">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {[
                "Reparación de Relojes",
                "Joyas a Medida",
                "Tasación de Oro",
                "Asesoramiento",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm font-sans text-primary-foreground/60">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-primary-foreground/40 mb-4">
              Contacto
            </h4>
            <div className="space-y-2.5 text-sm font-sans text-primary-foreground/60">
              <p>C/ Real, 45</p>
              <p>41700 Dos Hermanas, Sevilla</p>
              <a
                href="tel:+34955661234"
                className="block hover:text-gold transition-colors duration-300"
              >
                +34 955 66 12 34
              </a>
              <a
                href="mailto:info@joyeriasorozco.es"
                className="block hover:text-gold transition-colors duration-300"
              >
                info@joyeriasorozco.es
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans text-primary-foreground/40">
            &copy; {currentYear} Joyerías Orozco. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs font-sans text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors duration-300"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-xs font-sans text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors duration-300"
            >
              Aviso Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
