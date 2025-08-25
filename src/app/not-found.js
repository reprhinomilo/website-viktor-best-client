// app/not-found.js
export default function NotFound() {
  return (
     <section className="flex flex-col gap-[24px] md:gap-[40px] px-[16px] md:px-[72px] pt-[118px] md:pt-[273px] pb-[45px] md:pb-[256px] relative">
        <h2 className="absolute left-[50%] -translate-x-[50%] top-0 md:top-14 text-[#031228] text-center font-open-sans font-normal text-[188px] md:text-[356px] leading-[120%]">
          404
        </h2>
        <div className="absolute z-[-2] top-36 md:top-82 left-0 md:left-6 w-[335px] md:w-[480px] h-[96px] md:h-[144px] bg-[#B0DAF1]" />
        <div className="absolute z-[-2] top-78 md:top-100 right-0 md:right-6 w-[335px] md:w-[480px] h-[96px] md:h-[144px] bg-[#B0DAF1]" />
        <div className="flex relative flex-col items-center justify-center bg-[#F2F2F2BF] h-[318px] backdrop-blur-md md:px-[40px] px-[16px] pt-[40px] pb-[88px] md:pb-[40px]  gap-[32px]">
            <h4 className="text-[#031228] text-center font-open-sans font-normal text-[32px] leading-[120%] tracking-[0px]">
              Oops! Page not Found!
            </h4>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-[#031228] text-white font-open-sans font-normal py-2 px-[32px] hover:bg-[#2a2a2a] hover:cursor-pointer transition-colors text-[17px] leading-[140%] capitalize">
                Go back Home
              </button>
           </div>
        </div>
        </section>
  );
}