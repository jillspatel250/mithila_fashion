import { Monitor, Zap, Layers, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Ergonomic Design',
      description: 'Perfect height and angle for comfortable working posture and reduced strain',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Sturdy & Durable',
      description: 'Built with high-quality materials to support your laptop and accessories safely',
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Space-Saving Solution',
      description: 'Compact design fits perfectly on beds and in small rooms without taking much space',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Best Quality',
      description: 'Premium craftsmanship with attention to detail for lasting performance',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Our Laptop Tables
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover premium laptop tables designed for comfort, productivity, and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="text-accent mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
