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

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { HeartFilledIcon } from "@/components/icons";
import Logo from "../public/logo.svg";

export const Navbar = () => {
  return (
    <header>
      <div className="container">
        <NextUINavbar maxWidth="full">
          <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
            <NavbarBrand as="li" className="gap-3 max-w-fit">
              <NextLink
                className="flex justify-start items-center gap-1"
                href="/"
              >
                <Image height={30} src={Logo} alt="NEON Logo" />
              </NextLink>
            </NavbarBrand>
            <ul className="hidden md:flex gap-4 justify-start ml-2">
              {siteConfig.navItems.map((item) => (
                <NavbarItem key={item.href}>
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium"
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              ))}
            </ul>
          </NavbarContent>

          <NavbarContent
            className="hidden md:flex basis-1/5 sm:basis-full"
            justify="end"
          >
            <NavbarItem className="hidden md:flex gap-2">
              <ThemeSwitch />
            </NavbarItem>
            <NavbarItem className="hidden md:flex">
              <Button
                isExternal
                as={Link}
                className="text-sm font-normal text-default-600 bg-default-100"
                href={siteConfig.links.instagram}
                startContent={<HeartFilledIcon className="text-danger" />}
                variant="flat"
              >
                Join us
              </Button>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
            <ThemeSwitch />
            <NavbarMenuToggle />
          </NavbarContent>

          <NavbarMenu>
            {/* {searchInput} */}
            <div className="mx-4 mt-2 flex flex-col gap-2">
              {siteConfig.navMenuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    color={
                      index === 2
                        ? "primary"
                        : index === siteConfig.navMenuItems.length - 1
                        ? "danger"
                        : "foreground"
                    }
                    href="#"
                    size="lg"
                  >
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              ))}
            </div>
          </NavbarMenu>
        </NextUINavbar>
      </div>
    </header>
  );
};
