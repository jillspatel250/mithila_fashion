'use client';

import { ShoppingBag } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_NUMBER = '918140009897';

const openWhatsApp = (productName: string, productPrice: string) => {
  const message = `Hello I want to buy the study table`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
};

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: 'MITHILA Natural Wood Laptop Table',
      category: 'Laptop Tables',
      price: '₹3,499',
      image: '/laptop-table-1.png',
      description: ' Premium natural wood laptop desk with white metal frame. Features storage drawer and ergonomic design perfect for bedroom workspaces.',
    },
    {
      id: 2,
      name: 'MITHILA Modern Black Laptop Table',
      category: 'Laptop Tables',
      price: '₹2,999',
      image: '/laptop-table-2.png',
      description: 'Sleek black minimalist laptop table with sturdy metal frame. Compact design ideal for small spaces and modern interiors.',
    },
    {
      id: 3,
      name: 'MITHILA Premium Quality Laptop Desk',
      category: 'Laptop Tables',
      price: '₹3,999',
      image: '/laptop-table-3.png',
      description: 'Best quality black laptop table with white metal legs. Perfect for professional work setup with premium build and materials.',
    },
    {
      id: 4,
      name: 'MITHILA table Artistic Pink Laptop Table',
      category: 'Laptop Tables',
      price: '₹3,299',
      image: '/laptop-table-4.png',
      description: 'Creative pink laptop desk with unicorn design. Great for kids, students, and creative workspace with storage drawer.',
    },
  ];

  return (
    <section id="products" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Product Gallery
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our exclusive fashion collections
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all"
              onMouseEnter={() => setSelectedProduct(product.id)}
              onMouseLeave={() => setSelectedProduct(null)}
            >
              {/* Product Image */}
              <div className="w-full h-64 bg-muted flex items-center justify-center border-b border-border overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-center">
                    <ShoppingBag className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground font-semibold">Add Image</p>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col">
                <div className="flex-1">
                  <p className="text-sm text-accent font-semibold mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openWhatsApp(product.name, product.price);
                  }}
                  className="mt-4 w-full bg-accent text-accent-foreground px-4 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => openWhatsApp('Laptop Table Collection', '')}
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity text-lg"
          >
            Explore All Products
          </button>
        </div>
      </div>
    </section>
  );
}