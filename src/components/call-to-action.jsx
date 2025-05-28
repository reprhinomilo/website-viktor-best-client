export default function CallToAction({ lastOneBlock }) {
  return (
    <section className="bg-[#F3F3F3] py-16 md:min-h-64">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-6 text-3xl text-[#031228] font-sans font-semibold leading-[120%] tracking-[0px] capitalize">{lastOneBlock.title}</h2>
      </div>
    </section>
  );
}
