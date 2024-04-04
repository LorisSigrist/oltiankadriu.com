"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Image from "next/image";
import { LINKS, PROFILES } from "@/lib/constants";
import { Link, usePathname } from "@/lib/i18n";
import { NavigationLink } from "@/components/navigation-link";
import { useEffect, useState } from "react";
import { ThemeToggler } from "@/components/theme-toggler";
import { Menu } from "lucide-react";
import { SelectLanguage } from "./language-switcher";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="content text-gray-1200">
      <div className="flex items-center justify-between py-4 z-50">
        <Link
          className="rounded hover:bg-accent inline-flex items-center gap-2 p-2"
          href="/"
        >
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full shadow-sm hidden md:flex">
            <Image
              src="/oltiankadriu.jpg"
              alt="Oltian Kadriu"
              width={40}
              height={40}
              loading="lazy"
              className="aspect-square h-full w-full"
            />
          </span>

          <div className="flex flex-col">
            <span className="font-semibold tracking-tight">Oltian Kadriu</span>
            <span className="text-sm hidden md:block text-gray-1100">
              Web Developer
            </span>
          </div>
        </Link>

        <Drawer open={open} onOpenChange={setOpen}>
          <div className="block md:hidden">
            <DrawerTrigger className="hover:bg-accent p-2 rounded">
              <Menu />
            </DrawerTrigger>
          </div>
          <DrawerContent className="focus:outline-none p-4">
            <div className="flex flex-col gap-4 text-sm">
              <Link
                className="rounded hover:bg-accent inline-flex items-center gap-2 p-2"
                href="/"
              >
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border shadow-sm">
                  <Image
                    src="/oltiankadriu.jpg"
                    alt="Oltian Kadriu"
                    width={40}
                    height={40}
                    loading="lazy"
                    className="aspect-square h-full w-full"
                  />
                </span>

                <div className="flex flex-col">
                  <span className="font-semibold tracking-tight text-gray-1200">
                    Oltian Kadriu
                  </span>
                  <span className="text-gray-1100">Web Developer</span>
                </div>
              </Link>

              <ul className="flex flex-col gap-1">
                {LINKS.map((link, index) => (
                  <li key={index}>
                    <NavigationLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      icon={link.icon}
                      size={link.size}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <hr />

            <div className="flex flex-col gap-2 text-sm">
              <span className="px-2 text-xs font-medium leading-relaxed text-gray-1100">
                Online
              </span>
              <div>
                <ul className="flex flex-col gap-1">
                  {Object.values(PROFILES).map((profile) => (
                    <li key={profile.url}>
                      <NavigationLink
                        key={profile.url}
                        href={profile.url}
                        label={profile.title}
                        icon={profile.icon}
                        size={profile.size}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DrawerContent>
        </Drawer>

        <div className="hidden md:flex md:gap-4 w-full md:w-auto items-center">
          <ul className="flex flex-row font-medium rounded-lg md:space-x-4 rtl:space-x-reverse mt-0 border-0">
            {LINKS.map(
              (link, index) =>
                link.href !== "/" && (
                  <li key={index}>
                    <NavigationLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      icon={link.icon}
                      size={link.size}
                    />
                  </li>
                )
            )}
          </ul>
          <ThemeToggler />
          <SelectLanguage />
        </div>
      </div>
    </nav>
  );
};
