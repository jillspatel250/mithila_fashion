import { ShoppingCart, Truck, PackageCheck, Heart } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Browse & Select',
      description: 'Explore our collection and choose your favorite styles',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Fast Shipping',
      description: 'Quick delivery to your doorstep across India',
    },
    {
      icon: <PackageCheck className="w-8 h-8" />,
      title: 'Quality Check',
      description: 'Every item is inspected before dispatch',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Customer Love',
      description: 'Join thousands of satisfied fashion enthusiasts',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple steps to get your fashion items delivered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="flex items-center gap-6 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-2xl">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="text-accent mb-2">{step.icon}</div>
                </div>
              </div>

              {/* Content */}
              <div className="pl-0">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-border transform translate-x-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
