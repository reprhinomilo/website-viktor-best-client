'use client';

import Image from 'next/image';
import NewsImage from '@/public/news-test.png';
import { useState } from 'react';
// import { Heading } from "@/components/heading";

export const BigItem = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedText = text.substring(0, 350) + '...';
  const handleToggleExpand = () => setIsExpanded(prev => !prev);

  return (
    <div className="grid grid-cols-2 gap-[12px] mb-8 bg-[#B0DAF1]">
      <div className="p-[24px] h-full flex flex-col gap-[12px] justify-center">
        <h4
          className="text-[#101010] font-open-sans font-semibold text-[20px] leading-[130%] tracking-[0px] capitalize">The
          Importance of Clear Legal Agreements in Business</h4>
        <p className="text-[#636363] text-[15px] font-normal leading-[140%] font-open-sans tracking-[0px]">January 15,
          2025</p>
        <p
          className="text-[#101010] font-open-sans font-normal text-[17px] leading-[140%] tracking-[0px]">{isExpanded ? text : truncatedText}</p>
        <button
          onClick={handleToggleExpand}
          className="text-[#031228] cursor-pointer px-[32px] py-2 text-[17px] font-medium leading-[140%] capitalize w-fit self-end mt-[12px] font-open-sans tracking-[0px]"
          tabIndex="0"
          aria-label={isExpanded ? 'Read less' : 'Read more'}
          onKeyDown={e => e.key === 'Enter' && handleToggleExpand()}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
      <Image src={NewsImage} alt="Legal document with fountain pen" className="object-cover w-full" />
    </div>
  );
};
