import { Award, Users, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              About <span className="text-gradient">The Studio</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a boutique video production studio driven by passion for storytelling
              and technical excellence. Our team combines years of experience in cinematography,
              direction, and post-production to deliver content that doesn't just look beautiful—it
              resonates.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From concept to final cut, we approach every project with the same dedication to
              craft and creativity. We believe in the power of moving images to inspire, engage,
              and transform how audiences connect with brands.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-display font-bold text-accent mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-accent mb-1">30+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-accent mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-6 animate-scale-in">
            <div className="p-8 bg-card border border-border rounded-sm hover:border-accent transition-all duration-500">
              <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Creative Vision</h3>
              <p className="text-muted-foreground">
                Every frame is crafted with intention. We push creative boundaries while
                staying true to your brand's story and goals.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-sm hover:border-accent transition-all duration-500">
              <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Technical Excellence</h3>
              <p className="text-muted-foreground">
                State-of-the-art equipment and proven workflows ensure your content meets
                the highest production standards.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-sm hover:border-accent transition-all duration-500">
              <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Collaborative Process</h3>
              <p className="text-muted-foreground">
                Your vision, our expertise. We work closely with you at every stage to
                bring your story to life authentically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
