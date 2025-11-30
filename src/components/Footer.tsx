import { Instagram, Youtube, Video, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">CINEMATIC</h3>
            <p className="text-muted-foreground">
              Crafting stories in motion through premium video production and creative photography.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#work" className="text-muted-foreground hover:text-accent transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-sm bg-card border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-sm bg-card border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all"
              >
                <Video size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-sm bg-card border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-sm bg-card border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Cinematic Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
