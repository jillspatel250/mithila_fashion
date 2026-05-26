const WHATSAPP_NUMBER = '918140009897';


const openWhatsApp = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
};

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted pt-20">
      <div className="container mx-auto px-4">
        {/* Content */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Premium Laptop Tables for Every Space
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Discover our collection of ergonomic and stylish laptop tables. Designed for comfort, built for productivity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => openWhatsApp('Hello I want to buy the study table')}
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Shop Now
            </button>
            <button 
              onClick={() => openWhatsApp('Hello I want to buy the study table')}
              className="bg-transparent border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              View Collection
            </button>
          </div>
        </div>


      </div>
    </section>
  );
}
 
