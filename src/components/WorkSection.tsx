import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Brand Film: Urban Essence",
    category: "Commercial",
    aspectRatio: "16:9",
  },
  {
    id: 2,
    title: "Fashion Campaign 2024",
    category: "Fashion",
    aspectRatio: "4:5",
  },
  {
    id: 3,
    title: "Tech Product Launch",
    category: "Commercial",
    aspectRatio: "16:9",
  },
  {
    id: 4,
    title: "Documentary: City Stories",
    category: "Documentary",
    aspectRatio: "21:9",
  },
  {
    id: 5,
    title: "Corporate Event Coverage",
    category: "Event",
    aspectRatio: "16:9",
  },
  {
    id: 6,
    title: "Music Video: Rising",
    category: "Music",
    aspectRatio: "16:9",
  },
];

const WorkSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A showcase of cinematic storytelling, brand narratives, and creative vision
            brought to life through film.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-card rounded-sm cursor-pointer animate-scale-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                aspectRatio: project.aspectRatio === "21:9" ? "2.39" : project.aspectRatio === "4:5" ? "0.8" : "16/9",
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Placeholder with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-card" />
              
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent transition-opacity duration-500 ${
                  hoveredId === project.id ? "opacity-90" : "opacity-0"
                }`}
              />

              {/* Content */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 ${
                  hoveredId === project.id ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <span className="text-xs text-accent font-semibold tracking-wider uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-display font-semibold">{project.title}</h3>
              </div>

              {/* Film frame overlay */}
              <div className="absolute inset-0 border border-accent/20 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
