"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, ArrowRight } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

/** L1 primary nav — order and paths from tawazon-sitemap.jsx (IA redesign). */
const PRIMARY_NAV: { label: string; href: string }[] = [
  { label: "Industries", href: "/industries" },
  // { label: "Products", href: "/products" },
  // { label: "Resources", href: "/resources" },
  // { label: "Suppliers", href: "/suppliers" },
  { label: "About Us", href: "/about-us" },
  // { label: "Sustainability", href: "/sustainability" },
  // { label: "Media", href: "/media" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/locations" },
];

const LANGUAGE_OPTIONS = [
  { value: "en", label: "EN" },
  { value: "ar", label: "AR" },
  { value: "fr", label: "FR" },
  { value: "sw", label: "SW" },
  { value: "id", label: "ID" },
  { value: "hi", label: "HI" },
] as const;

const navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="border-header-border bg-header-bg fixed top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="group flex shrink-0 items-center gap-2">
          <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-sm">
            <Image
              src="/assets/images/logo.svg"
              alt="Tawazon"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <span className="text-foreground text-sm font-semibold tracking-widest uppercase">
            Tawazon
          </span>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <div className="flex max-w-full items-center gap-0.5 overflow-x-auto pr-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {PRIMARY_NAV.map((item) => (
              <Button key={item.href} variant="ghost" size="sm" className="shrink-0 px-2.5 text-xs xl:px-3 xl:text-sm" asChild>
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground shrink-0" asChild>
            <Link href="/products/search" aria-label="Search products and catalog">
              <Search className="size-4.5" />
            </Link>
          </Button>

          <label className="hidden items-center sm:flex">
            <span className="sr-only">Language</span>
            <select
              defaultValue="en"
              className="border-border bg-card text-foreground h-8 max-w-18 cursor-pointer rounded-md border px-1.5 text-xs shadow-none outline-none"
              aria-label="Language"
              onChange={() => {
                /* Locale routing planned per IA — EN only for now */
              }}
            >
              {LANGUAGE_OPTIONS.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  disabled={opt.value !== "en"}
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </label>

          <ThemeToggle />

          <Button variant="default" size="sm" className="hidden shrink-0 sm:inline-flex" asChild>
            <Link href="/locations">
              Contact
              <ArrowRight className="size-4" />
            </Link>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-4.5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[min(100vw-2rem,22rem)] flex-col">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 p-4">
                {PRIMARY_NAV.map((item) => (
                  <Button key={item.href} variant="ghost" className="justify-start" asChild>
                    <Link href={item.href} onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  </Button>
                ))}
                <Button variant="default" className="mt-4 w-full" asChild>
                  <Link href="/locations" onClick={() => setMobileOpen(false)}>
                    Contact
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <label className="border-border mt-6 flex flex-col gap-2 border-t pt-4 sm:hidden">
                  <span className="text-muted-foreground text-xs font-medium">Language</span>
                  <select
                    defaultValue="en"
                    className="border-border bg-background h-10 w-full cursor-pointer rounded-md border px-3 text-sm"
                    aria-label="Language"
                  >
                    {LANGUAGE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value} disabled={opt.value !== "en"}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default navigation;
