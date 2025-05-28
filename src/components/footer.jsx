import { Nav } from './nav';
import { SOCIAL_LINKS } from './social-links';
import { GENERAL, NAVIGATION_LINKS } from '@/constants';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#031228] py-8 text-white">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div
            className="pr-12 text-xl font-bold border-r font-sans leading-[265%] tracking-[2%] text-center uppercase">
            {GENERAL.name}
          </div>

          <SOCIAL_LINKS />

          {/* Desktop Navigation */}
          <nav className="hidden md:block max-w-[335px]">
            <ul className="flex flex-wrap gap-y-[12px] gap-x-[64px]">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    tabIndex={0}
                    className={`font-thin capitalize text-base font-sans leading-[140%] tracking-[0px]`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 text-xs font-sans font-normal leading-[140%] tracking-[0px] text-center">
          {`Copyright © ${currentYear} • ${GENERAL.name} • All Rights Reserved`}
        </div>
      </div>
    </footer>
  );
}
