import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's <span className="text-gradient">Create</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to bring your vision to life? Get in touch and let's start
              crafting your story.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a
                    href="mailto:hello@cinematicstudio.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    hello@cinematicstudio.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <a
                    href="tel:+1234567890"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Studio</div>
                  <p className="text-muted-foreground">
                    123 Creative Avenue
                    <br />
                    Los Angeles, CA 90028
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border focus:border-accent"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border focus:border-accent"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-background border-border focus:border-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 transition-all duration-300 hover:shadow-glow"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
