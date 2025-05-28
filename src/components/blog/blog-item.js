import Link from 'next/link';

export const BlogItem = ({ post }) => {
  return (
    <article className="bg-[#B0DAF1] py-[40px] flex flex-col gap-[32px]">
      <div className="w-[80%] mx-auto flex flex-col gap-[12px]">
        <p className="text-[#4E4E4E] font-sans font-normal text-[15px] leading-[140%] tracking-[0px]">{post.date}</p>
        <h3
          className="text-[#031228] font-sans font-semibold text-[24px] leading-[130%] tracking-[0px]">{post.title}</h3>
        <p className="text-[#031228] font-sans font-normal text-[17px] leading-[140%] tracking-[0px]">{post.content}</p>
      </div>
      <div className="text-right w-[80%] mx-auto">
        <Link
          href={`/blog/${post.id}`}
          className="text-[#101010] font-sans font-semibold text-[17px] leading-[140%] tracking-[0px] capitalize"
          aria-label={`Read more about ${post.title}`}>
          Read More
        </Link>
      </div>
    </article>
  );
};
