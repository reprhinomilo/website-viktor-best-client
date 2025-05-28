import HeroSection from '@/components/hero-section';
import WelcomeSection from '@/components/welcome-section';
import ServicesSection from '@/components/services-section';
import WhyChooseSection from '@/components/why-choose-section';
import ImpactSection from '@/components/impact-section';
import CallToAction from '@/components/call-to-action';
import { HOME_PAGE_CONTENT } from '@/constants';
import Head from 'next/head';

export default function Home() {
  const {
    heroBlock = {},
    mainBlock = {},
    keysBlock = {},
    seoBlock = {},
    whyChooseBlock = {},
    statBlock = {},
    lastOneBlock = {},
  } = HOME_PAGE_CONTENT;


  return (<>
    {/* Add meta tags using next/head */}
    <Head>
      <meta property="og:title" content={seoBlock?.title} />
      <meta name="description" content={seoBlock?.description} />
    </Head>
    <main className="min-h-screen">
      <HeroSection heroBlock={heroBlock} />
      <WelcomeSection mainBlock={mainBlock} />
      <ImpactSection statBlock={statBlock} />
      <ServicesSection keysBlock={keysBlock} />
      <WhyChooseSection whyChooseBlock={whyChooseBlock} />
      <CallToAction lastOneBlock={lastOneBlock} />
    </main>
  </>);
}
