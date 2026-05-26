'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Products from '@/components/Products';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyChooseUs />
      <Products />
      <HowItWorks />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
