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
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { HeartFilledIcon } from "@/components/icons";
import Logo from "../public/logo.svg";
import React from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  
  return (
    <header>
      <div className="container">
        <NextUINavbar
          maxWidth="full"
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={toggleMenu}
        >
          <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
            <NavbarBrand as="li" className="gap-3 max-w-fit">
              <NextLink
                className="flex justify-start items-center gap-1"
                href="/"
              >
                <Image height={30} src={Logo} alt="NEON Logo" />
              </NextLink>
            </NavbarBrand>
            <NavbarContent className="basis-1/5 sm:basis-full" justify="end">
              <ul className="hidden md:flex gap-4 justify-start ml-2">
                {siteConfig.navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <NavbarItem key={item.href}>
                      <NextLink
                        className={clsx(
                          linkStyles({ color: "foreground" }),
                          "data-[active=true]:text-primary data-[active=true]:font-medium"
                        )}
                        color="foreground"
                        href={item.href}
                        data-active={isActive}
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
            <div className="mx-4 mt-2 flex flex-col gap-2">
              {siteConfig.navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <NavbarMenuItem key={`${item}-${index}`}>
                    <NextLink 
                      onClick={toggleMenu} 
                      href={item.href}
                      className={clsx(
                        isActive && "text-primary font-medium"
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
