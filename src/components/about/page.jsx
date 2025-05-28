import HeroSection from '@/components/hero-section';
import WelcomeSection from '@/components/welcome-section';
import ServicesSection from '@/components/services-section';
import CallToAction from '@/components/call-to-action';
import { ABOUT_PAGE_CONTENT } from '@/constants';
import WhyChooseSection from '@/components/why-choose-section';
import Head from 'next/head';

export default function About() {
  const {
    heroBlock = {},
    mainBlock = {},
    missionBlock = {},
    seoBlock = {},
    whyChooseBlock = {},
    lastOneBlock = {},
  } = ABOUT_PAGE_CONTENT;

  return (
    <>
      <Head>
        <meta property="og:title" content={seoBlock?.title} />
        <meta name="description" content={seoBlock?.description} />
      </Head>
      <main className="min-h-screen">
        <HeroSection heroBlock={heroBlock} isAbout={true} />
        <WelcomeSection mainBlock={mainBlock} isAbout={true} />
        <ServicesSection missionBlock={missionBlock} isAbout={true} />
        <WhyChooseSection whyChooseBlock={whyChooseBlock} isAbout />
        <CallToAction lastOneBlock={lastOneBlock} />
      </main>
    </>
  );
}
