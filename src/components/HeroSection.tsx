import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden film-grain">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 lg:px-8 flex flex-col justify-center">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
            Crafting Stories
            <br />
            <span className="text-gradient">In Motion</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl font-light">
            Where vision becomes cinematic reality through premium video production,
            brand films, and creative storytelling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("work")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 transition-all duration-300 hover:shadow-glow"
            >
              View Portfolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Let's Create
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
