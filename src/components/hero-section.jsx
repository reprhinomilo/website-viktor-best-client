import Image from 'next/image';

export default function HeroSection({ heroBlock = {}, isAbout = false }) {
  const { title = '', subtitle = '', description = '' } = heroBlock;
  return (<section className="relative bg-gray-100">
    <div className="px-4 py-12 mx-auto max-w-7xl md:py-16">
      <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-[60%_40%]">
        {/* Left side with image */}
        <div className="relative h-[80vh]">
          <div className="absolute -top-8 -left-8 h-24 w-48 bg-[#B0DAF1] opacity-50 md:h-32 md:w-[80%]"></div>
          {/* Image */}
          <div className="relative z-10 w-full h-full">
            <Image
              src={isAbout ? '/About1.png' : '/Home1.png'}
              alt="Dr. Jonathan Thomson"
              //  width={500}
              // height={400}
              layout="fill" // Fills the parent container
              objectFit="cover" // Ensures proper scaling
            />
          </div>
          <div className="absolute bottom-6 -right-10 h-24 w-48 bg-[#B0DAF1] opacity-50 md:h-34 md:w-[80%]"></div>
        </div>

        <div className="space-y-6 md:mb-[100px]">
          <h1
            className="text-3xl font-bold uppercase leading-[120%] text-center tracking-tight text-[#031228] md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p
            className="text-lg text-[#031228] font-sans font-normal leading-[130%] tracking-[0px] text-center">{subtitle}</p>
        </div>
      </div>
    </div>

    {/* Your Health, My Priority Banner */}
    <div className="w-full bg-[rgba(3,18,40,0.75)] backdrop-blur-[15px] py-12 text-center md:-mt-48 z-20 relative">
      <h2 className="text-2xl font-medium text-white md:text-3xl leading-[120%]">
        {description}
      </h2>
    </div>
  </section>);
}
