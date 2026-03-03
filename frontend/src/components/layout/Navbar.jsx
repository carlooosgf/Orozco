import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Marcas", href: "#marcas" },
  { label: "Pandora", href: "#pandora" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#inicio")}
            className="flex items-center gap-2 group"
          >
            <span
              className={cn(
                "font-serif text-xl sm:text-2xl font-semibold tracking-wide transition-colors duration-300",
                scrolled ? "text-foreground" : "text-card"
              )}
            >
              Joyerías{" "}
              <span className="text-gold">Orozco</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-gold relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full",
                  scrolled
                    ? "text-muted-foreground"
                    : "text-card/80 hover:text-card"
                )}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant={scrolled ? "gold-outline" : "hero-light"}
              size="sm"
              onClick={() => handleNavClick("#contacto")}
              className="tracking-wider uppercase text-xs"
            >
              <MapPin className="w-3.5 h-3.5" />
              Visítanos
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    scrolled ? "text-foreground" : "text-card"
                  )}
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-card border-border">
                <div className="flex flex-col pt-8">
                  <span className="font-serif text-xl font-semibold mb-8 px-2">
                    Joyerías <span className="text-gold">Orozco</span>
                  </span>
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <button
                        key={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className="text-left px-3 py-3 text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors duration-300"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                  <div className="mt-8 px-2">
                    <Button
                      variant="gold"
                      className="w-full tracking-wider uppercase text-xs"
                      onClick={() => handleNavClick("#contacto")}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Dónde Estamos
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
