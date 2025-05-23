import HeroSection from "@/components/hero-section";
import WelcomeSection from "@/components/welcome-section";
import ServicesSection from "@/components/services-section";
import WhyChooseSection from "@/components/why-choose-section";
import ImpactSection from "@/components/impact-section";
import CallToAction from "@/components/call-to-action";
import { HOME_PAGE_CONTENT } from "@/constants";
import { HOME_PAGE_CONTENT_DEF } from "@/constants/default";
import { IsEmptyObject } from "@/lib/utils";
import Head from "next/head";

export default function Home() {
  const {
    heroBlock = {},
    mainBlock = {},
    keysBlock = {},
    seoBlock = {},
    whyChooseBlock = {},
    statBlock = {},
  } = HOME_PAGE_CONTENT;

  // Destructure and alias variables from HOME_PAGE_CONTENT_DEF
  const {
    heroBlock: heroBlockDef = {},
    whyChooseBlock: whyChooseBlockDef = {},
    seoBlockBlock: seoBlockBlockDef = {},
    statBlock: statBlockDef = {},
  } = HOME_PAGE_CONTENT_DEF;

  return (
    <>
      {/* Add meta tags using next/head */}
      <Head>
        <meta property="og:title" content={seoBlock?.title} />
        <meta name="description" content={seoBlock?.description} />
      </Head>
      <main className="min-h-screen">
        <HeroSection
          heroBlock={IsEmptyObject(heroBlock) ? heroBlockDef : heroBlock}
        />
        <WelcomeSection mainBlock={mainBlock} />
        <ImpactSection
          statBlock={IsEmptyObject(statBlock) ? statBlockDef : statBlock}
        />
        <ServicesSection keysBlock={keysBlock} />
        <WhyChooseSection
          whyChooseBlock={
            IsEmptyObject(whyChooseBlock) ? whyChooseBlockDef : whyChooseBlock
          }
        />
        <CallToAction text="Take the first step towards better health" />
      </main>
    </>
  );
}
