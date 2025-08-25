import { Card, CardContent } from '@/components/ui/card';
import AboutCheck from '@/public/aboutCheck.svg';

export default function WhyChooseSection({ whyChooseBlock = {}, isAbout }) {
  const { title = '', text = '', items = [] } = whyChooseBlock;

  return (
    <section className="py-20 my-12">
      <div className="max-w-6xl px-4 mx-auto">
        <h2
          className="mb-8 text-3xl text-[#031228] font-sans font-semibold leading-[120%] tracking-[0px] capitalize">{title}</h2>

        <div className="space-y-6">
          <p className="text-[#031228] font-sans font-normal text-base leading-[140%] tracking-[0px]">{text}</p>

          <div className="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-2">
            {items.map((item, index) => (
              <Card
                key={index}
                className="bg-[#a8d0e6] border-none rounded-none"
              >
                <CardContent className="p-6 text-center flex items-center">
                  {isAbout && <div className="w-[60px]">
                    <AboutCheck />
                  </div>}
                  <h3
                    className="text-2xl text-[#031228] font-sans font-semibold leading-[120%] tracking-[0px] text-center capitalize">
                    {item}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
