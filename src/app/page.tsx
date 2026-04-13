import dynamic from 'next/dynamic';
import HeroSlider from '@/components/home/HeroSlider';
import Marquee from '@/components/home/Marquee';
import JsonLd from '@/components/seo/JsonLd';

// Lazy load below-fold sections for faster initial page load
const AboutSection = dynamic(() => import('@/components/home/AboutSection'));
const ServicesSlider = dynamic(() => import('@/components/home/ServicesSlider'));
const MarketsSection = dynamic(() => import('@/components/home/MarketsSection'));
const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection'));
const TeamSection = dynamic(() => import('@/components/home/TeamSection'));
const FounderSection = dynamic(() => import('@/components/home/FounderSection'));
const WhySlider = dynamic(() => import('@/components/home/WhySlider'));
const TestimonialsSlider = dynamic(() => import('@/components/home/TestimonialsSlider'));
const BlogSection = dynamic(() => import('@/components/home/BlogSection'));
const CTASection = dynamic(() => import('@/components/home/CTASection'));

export default function Home() {
  return (
    <>
      {/* JSON-LD Organization + LocalBusiness Schema */}
      <JsonLd
        type="custom"
        data={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'NexaGrow Agency',
          url: 'https://markiting-services-web.vercel.app',
          logo: 'https://markiting-services-web.vercel.app/logo.svg',
          image: 'https://markiting-services-web.vercel.app/og-image.jpg',
          description: 'Top digital marketing agency specializing in social media marketing, SEO, Google Ads, AI automation, and web development for businesses in UAE, Saudi Arabia, USA, and Canada.',
          telephone: `+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
          email: 'leoali851@gmail.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Dubai',
            addressCountry: 'AE',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 25.2048,
            longitude: 55.2708,
          },
          areaServed: [
            { '@type': 'Country', name: 'United Arab Emirates' },
            { '@type': 'Country', name: 'Saudi Arabia' },
            { '@type': 'Country', name: 'United States' },
            { '@type': 'Country', name: 'Canada' },
            { '@type': 'Country', name: 'United Kingdom' },
            { '@type': 'Country', name: 'Qatar' },
            { '@type': 'Country', name: 'Kuwait' },
          ],
          sameAs: [],
          priceRange: '$$',
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '50',
            bestRating: '5',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Digital Marketing Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads Management' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Strategy' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Creation' } },
            ],
          },
        }}
      />

      {/* Homepage Sections */}
      <HeroSlider />
      <Marquee />
      <AboutSection />
      <ServicesSlider />
      <MarketsSection />
      <PortfolioSection />
      <TeamSection />
      <FounderSection />
      <WhySlider />
      <TestimonialsSlider />
      <BlogSection />
      <CTASection />
    </>
  );
}
