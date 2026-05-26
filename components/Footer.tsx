import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">MITHILA</h3>
            <p className="text-background/80 mb-4">
              Luxury fashion for the modern you. Discover elegance in every collection.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-background/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-background/80 hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-background/80 hover:text-accent transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-background/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/80">
                <Mail className="w-4 h-4" />
                <span>support@mithila.com</span>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <p className="text-background/80 mb-4">
              Connect with us on WhatsApp for personalized support and exclusive offers.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=8140009897&text=Hello+I+want+to+buy+the+study+table&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-background/70 text-sm">
            <p>
              © {currentYear} Mithila Fashion. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
