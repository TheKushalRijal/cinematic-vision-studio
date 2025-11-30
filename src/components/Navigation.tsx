import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-display font-bold tracking-wider hover:text-accent transition-colors"
          >
            CINEMATIC
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("work")}
              className="text-sm font-medium tracking-wide hover:text-accent transition-colors"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium tracking-wide hover:text-accent transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium tracking-wide hover:text-accent transition-colors"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("work")}
              className="text-left text-lg font-medium hover:text-accent transition-colors py-2"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-lg font-medium hover:text-accent transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-lg font-medium hover:text-accent transition-colors py-2"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-full"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
