'use client';

import { siteConfig } from '@/config/site';
import { NavbarItem } from '@nextui-org/navbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col md:flex-row gap-8 justify-center mt-10 md:mt-0">
      {siteConfig.navItems.map((item) => (
        <NavbarItem key={item.href}>
          <Link
            href={item.href}
            className={`text-[20px] red-rose-regular text-white py-3 my-2 md:my-0 md:py-[30px] border-b-4 ${
              pathname === item.href ? 'border-white' : 'border-transparent'
            } hover:border-white transition-colors duration-300`}
          >
            {item.label}
          </Link>
        </NavbarItem>
      ))}
    </ul>
  );
}
