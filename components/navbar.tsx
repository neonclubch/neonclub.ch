"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import React from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="site-header">
      <div className="container">
        <NextUINavbar
          maxWidth="full"
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={toggleMenu}
          classNames={{
            base: "bg-background border-b border-white/[0.04]",
            wrapper: "px-6",
          }}
        >
          <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
            <NavbarBrand as="li" className="gap-3 max-w-fit">
              <NextLink
                className="flex justify-start items-center gap-1"
                href="/"
              >
                <span className="text-lg font-display font-semibold tracking-display text-[#1ADC38] leading-none">
                  NEON
                </span>
              </NextLink>
            </NavbarBrand>
            <NavbarContent
              className="basis-1/5 sm:basis-full"
              justify="end"
            >
              <ul className="hidden md:flex gap-8 justify-start ml-2">
                {siteConfig.navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <NavbarItem key={item.href}>
                      <NextLink
                        className={clsx(
                          "text-xs font-mono uppercase tracking-widest text-foreground/40 transition-colors duration-300 hover:text-[#1ADC38]",
                          isActive && "text-[#1ADC38]"
                        )}
                        href={item.href}
                      >
                        {item.label}
                      </NextLink>
                    </NavbarItem>
                  );
                })}
              </ul>
            </NavbarContent>
          </NavbarContent>
          <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
            <NavbarMenuToggle />
          </NavbarContent>
          <NavbarMenu>
            <div className="mx-4 mt-10 flex flex-col gap-6">
              {siteConfig.navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <NavbarMenuItem key={`${item}-${index}`}>
                    <NextLink
                      onClick={toggleMenu}
                      href={item.href}
                      className={clsx(
                        "text-xl font-mono uppercase tracking-widest text-foreground/40 transition-colors duration-200",
                        isActive && "text-[#1ADC38]"
                      )}
                    >
                      {item.label}
                    </NextLink>
                  </NavbarMenuItem>
                );
              })}
            </div>
          </NavbarMenu>
        </NextUINavbar>
      </div>
    </header>
  );
};
