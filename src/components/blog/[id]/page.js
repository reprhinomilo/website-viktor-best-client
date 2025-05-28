import { getBlogPostById } from '@/services/blog-service';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/components/social-links';
import { Suspense } from 'react';
import { Spinner } from '@/components/spinner';

const BlogPostContent = async ({ id }) => {
  const post = await getBlogPostById(id);

  return (<div className="relative md:space-y-[32px] space-y-[48px]">
    <div className="absolute top-12 -left-11 w-[480px] h-[144px] bg-[#B0DAF1]"></div>
    <div className="absolute top-154 -right-11 w-[480px] h-[144px] bg-[#B0DAF1]"></div>
    <article style={{ background: 'rgba(243, 243, 243, 0.75)' }}
             className="backdrop-blur-[15px] md:p-[40px] p-[24px_16px] flex flex-col items-center justify-center">

      <div className="max-w-[856px] w-full space-y-[12px]">
        <p className="text-[#4E4E4E] text-[15px] font-normal leading-[140%]">{post.date}</p>

        <h3 className="text-[#031228] font-sans font-semibold text-[24px] leading-[130%] tracking-[0px]">
          {post.title}
        </h3>

        <div className="text-[#031228] text-[17px] font-normal leading-[140%]">
          <p>
            In today&apos;s fast-paced world, legal matters can often feel overwhelming and complex. Whether handling
            business
            disputes, real estate transactions, or personal injury claims, the right legal team can make all the
            difference.
            A client-centered approach in legal services ensures that individuals and businesses receive tailored
            guidance,
            transparent communication, and dedicated advocacy.
          </p>
          <br />
          <p>Personalized Legal Solutions</p>
          <br />
          <p>
            Each client&apos;s situation is unique, and a one-size-fits-all strategy rarely leads to the best outcome.
            A firm
            that prioritizes personalized legal solutions takes the time to understand clients&apos; specific needs
            and concerns.
            This allows for customized strategies that align with their objectives, ensuring efficient and effective
            resolution of legal matters.
          </p>
          <br />
          <p>Clear and Transparent Communication</p>
          <br />
          <p>
            Legal jargon can be intimidating, leaving clients uncertain about their cases. A client-focused law firm
            ensures
            clear, straightforward communication throughout the legal process. By breaking down complex legal terms
            into
            understandable language and keeping clients informed about every step, law firms build trust and
            confidence.
          </p>
          <br />
          <p>Strategic Advocacy with a Results-Driven Mindset</p>
          <br />
          <p>
            An experienced legal team doesn&apos;t just offer advice—it advocates for clients with determination and
            strategic
            precision. Whether in negotiations or the courtroom, lawyers who are dedicated to their
            clients&apos; success work
            relentlessly to achieve favorable outcomes. With in-depth legal knowledge and an unwavering commitment to
            justice, they provide the representation clients need.
          </p>
        </div>
      </div>

      <div className="md:mt-[32px] mt-[24px] md:px-[40px] px-[16px] w-full flex md:justify-end justify-start">
        <div className="flex flex-col gap-[8px]">
          <div className="text-[#031228] font-medium">Share this post:</div>
          <SOCIAL_LINKS />
        </div>
      </div>
    </article>
    <div className="max-w-[966px] w-full mx-auto text-[#031228]">
      <p className="text-[17px] font-normal leading-[140%] md:mb-[32px] mb-[24px]">Recent posts</p>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[32px] gap-[24px]">
        <div className="space-y-[12px] max-w-[384px] hover:bg-[#F3F3F3] p-[16px] cursor-pointer">
          <h4 className="font-sans font-semibold text-[20px] leading-[130%] tracking-[0px] capitalize">
            The Art of Servant Leadership in Healthcare
          </h4>
          <p className="text-[#4E4E4E] text-[15px] font-normal leading-[140%]">January 10,2025</p>
          <div className="flex justify-end">
            <button
              className="text-[#101010] cursor-pointer text-end font-open-sans font-semibold text-[17px] leading-[140%] tracking-[0px] capitalize">
              Read More
            </button>
          </div>
        </div>
        <div className="space-y-[12px] max-w-[384px] hover:bg-[#F3F3F3] p-[16px] cursor-pointer">
          <h4 className="font-sans font-semibold text-[20px] leading-[130%] tracking-[0px] capitalize">
            The Art of Servant Leadership in Healthcare
          </h4>
          <p className="text-[#4E4E4E] text-[15px] font-normal leading-[140%]">January 10,2025</p>
          <div className="flex justify-end">
            <button
              className="text-[#101010] cursor-pointer text-end font-open-sans font-semibold text-[17px] leading-[140%] tracking-[0px] capitalize">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default function BlogPost({ params }) {
  const { id } = params;

  return (<section className="flex flex-col px-[72px] py-[40px]">
    <h2 className="font-sans font-semibold text-[32px] leading-[120%] tracking-[0px] uppercase">
      Blog
    </h2>

    <div className="md:mt-[24px] mt-[16px] mb-[24px] lg:pl-[110px]">
      <Link href="/blog" prefetch
            className="inline-flex items-center font-sans font-normal text-[17px] leading-[140%] tracking-[0px]"
            aria-label="Back to all posts" tabIndex={0}>
        <div className="flex items-center justify-center h-[44px] w-[44px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.34299 12L10.414 19.071L8.99999 20.485L1.22199 12.707C1.03451 12.5195 0.929199 12.2652 0.929199 12C0.929199 11.7348 1.03451 11.4805 1.22199 11.293L8.99999 3.515L10.414 4.929L3.34299 12Z"
              fill="#636363"
            />
          </svg>
        </div>
        All posts
      </Link>
    </div>

    <Suspense
      fallback={<div className="flex justify-center items-center h-[85vh]">
        <Spinner />
      </div>}>
      <BlogPostContent id={id} />
    </Suspense>
  </section>);
}
