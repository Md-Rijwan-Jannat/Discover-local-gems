import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import NextLink from 'next/link';

import BannerLogo from '../logo';
import HeaderLinks from './headerLinks';

export const Header = () => {
  return (
    <NextUINavbar
      className="bg-[#205CD4] max-w-[1220px] h-[83px] mx-auto"
      isBlurred={false}
      maxWidth="xl"
      position="sticky"
    >
      {/* Logo Section */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <BannerLogo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Links for larger screens */}
      <NavbarContent className="hidden lg:flex">
        <HeaderLinks />
      </NavbarContent>

      {/* Login and SignUp Buttons for larger screens */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex gap-2">
          <Button className="border-none roboto-medium text-[24px] w-[90px] h-[56px] bg-transparent text-white">
            Login
          </Button>
          <Button
            className="roboto-medium w-[144px] h-[56px] rounded-[10px] bg-white text-primary text-[24px]"
            variant="flat"
          >
            SignUp
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Menu Toggle for smaller screens */}
      <NavbarMenuToggle
        className="flex lg:hidden text-white text-[30px]"
        aria-label="Toggle navigation menu"
      />

      {/* Mobile Menu Content */}
      <NavbarMenu className="lg:hidden bg-[#205CD4]">
        <HeaderLinks />
        <NavbarMenuItem className="flex flex-col items-center gap-2 mt-4">
          <Button className="w-full text-lg bg-transparent text-white">
            Login
          </Button>
          <Button
            className="w-full text-lg bg-white text-primary rounded-md"
            variant="flat"
          >
            SignUp
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};
