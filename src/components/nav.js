'use client';

import { NAVIGATION_LINKS } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Nav = () => {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-6">
        {NAVIGATION_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              tabIndex={0}
              className={`${isActive(link.href) ? 'font-light' : 'font-thin'} uppercase hover:border-b-2 hover:border-white hover:pb-1 text-md font-sans leading-[130%] tracking-[0px]`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
