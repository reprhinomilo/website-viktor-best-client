import Image from 'next/image';

export default function WelcomeSection({ mainBlock, isAbout = false }) {
  const { title = '', text = '' } = mainBlock;
  return (
    <section className={`py-20 mb-12 ${isAbout ? 'mt-12' : 'bg-gray-100'}`}>
      <div className="max-w-6xl px-4 mx-auto">
        <h2
          className="mb-8 text-3xl text-[#031228] md:text-4xl font-sans font-semibold leading-[120%] tracking-[0px] capitalize">
          {title}
        </h2>
        <p className="mx-auto text-[#031228] font-sans font-normal text-[17px] leading-[140%] tracking-[0px]">{text}</p>

        {isAbout && (
          <div className="px-4 py-8 mx-auto mt-12">
            <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
              {/* First image with blue background */}
              <div className="w-full">
                <div className="relative w-full h-96">
                  <div className="absolute -top-8 -left-8 h-full w-full bg-[#B0DAF1] opacity-50"></div>
                  <Image
                    src="/ab.jpg"
                    alt="Business handshake"
                    // width={300}
                    // height={200}
                    // className="object-cover w-full"
                    layout="fill"
                    objectFit="cover" // Ensures proper scaling
                  />
                </div>
              </div>

              {/* Second image with blue background */}
              <div className="w-full">
                <div className="relative w-full h-96">
                  <div className="absolute -bottom-8 -right-8 h-full w-full bg-[#B0DAF1] opacity-50"></div>
                  <Image
                    src="/abou.png"
                    alt="Modern architecture"
                    // width={300}
                    // height={200}
                    // className="object-cover w-full"
                    layout="fill"
                    objectFit="cover" // Ensures proper scaling
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
