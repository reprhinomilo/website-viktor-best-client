import { Screen } from './screen';
import { getBlogPosts } from '@/services/blog-service';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { Spinner } from '@/components/spinner';

// This component will trigger Suspense
const BlogPosts = async () => {
  const data = await getBlogPosts(1, 100).catch(error => {
    console.error('Failed to fetch blog posts:', error);
    return null;
  });

  if (!data) return notFound();
  return <Screen posts={data.posts} />;
};

export default function Blog() {
  return (
    <section className="flex flex-col md:gap-[40px] gap-[48px] px-[72px] py-[40px]">
      <h2 className="font-sans font-semibold text-[32px] leading-[120%] tracking-[0px] uppercase">
        Blog
      </h2>

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-[85vh]">
            <Spinner />
          </div>
        }>
        <BlogPosts />
      </Suspense>
    </section>
  );
}
