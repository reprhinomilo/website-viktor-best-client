export default function ServicesSection({
                                          keysBlock = {}, missionBlock = {}, isAbout = false,
                                        }) {
  const { title = '', items = [] } = keysBlock;
  const { title: missionTitle = '', text = '' } = missionBlock;

  return (<section className="relative py-22">
    {/* Blue rectangle top-left */}
    <div className="absolute top-12 left-1/12 h-32 w-48 bg-[#B0DAF1] opacity-50 md:w-[30%]"></div>

    <section className="relative z-10 py-16 bg-[rgba(242, 242, 242, 0.75)] backdrop-blur-[25px]">
      <div className="px-4">
        <div className="max-w-6xl px-4 mx-auto">
          {isAbout ? (<>
            <h2
              className="mb-8 text-3xl text-[#031228] md:text-4xl font-sans font-semibold leading-[120%] tracking-[0px] capitalize">
              {missionTitle}
            </h2>

            <p
              className="mx-auto text-[#031228] font-sans font-normal text-base leading-[140%] tracking-[0px]">{text}</p>
          </>) : (<>
            <div className="mb-12">
              <h2
                className="text-2xl text-[#031228] md:text-3xl font-sans font-semibold leading-[120%] tracking-[0px] capitalize">
                {title}
              </h2>
            </div>

            <div className="space-y-6">
              {items.map((service, index) => (<div key={index} className="pb-4 border-b border-gray-300">
                <h3
                  className="text-[#031228] font-sans font-normal text-base leading-[140%] tracking-[0px]">{service}</h3>
              </div>))}
            </div>
          </>)}
        </div>
      </div>
    </section>
    {/* Blue rectangle bottom-right */}
    <div className="absolute bottom-12 right-1/12 h-28 w-64 bg-[#B0DAF1] opacity-50 md:w-[30%]"></div>
  </section>);
}
