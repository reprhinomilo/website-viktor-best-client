import { Card, CardContent } from '@/components/ui/card';

export default function ImpactSection({ statBlock = {} }) {
  const { title = '', items = [] } = statBlock;

  return (
    <section className="py-20 my-12 bg-white">
      <div className="max-w-6xl px-4 mx-auto">
        <h2
          className="mb-12 text-3xl text-[#031228] font-sans font-semibold leading-[120%] tracking-[0px] capitalize">{title}</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {items.map(({ total, text }, index) => (
            <Card key={index} className="bg-[#a8d0e6] border-none rounded-none">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center gap-[16px]">
                <p
                  className="text-3xl text-[#031228] font-sans font-semibold leading-[120%] tracking-[0px] text-center capitalize">
                  {total}+ Years
                </p>
                <p
                  className="text-base text-[#031228] font-sans font-normal leading-[140%] tracking-[0px] text-center">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
