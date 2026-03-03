"use client";

import { IconChevronRight, IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { Link } from "../../../components/link";
import { cn } from "@/lib/utils";
import {
  AUTH_LINKS,
  NAV_LINKS,
  PRODUCTS_COLUMNS,
  RESOURCES_COLUMNS,
} from "./nav-data";
import type { NavigationColumnItem } from "./nav-data";
import Image from "next/image";

type SidebarSectionProps = {
  title: string;
  items: NavigationColumnItem[];
};

function SidebarSection({ title, items }: SidebarSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-md px-2 py-3 text-left text-sm text-zinc-100 transition-colors active:bg-zinc-900"
      >
        <span>{title}</span>
        <IconChevronRight
          className={cn("size-4 transition-transform", open && "rotate-90")}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-2 flex max-h-[40vh] flex-col overflow-y-auto pb-2">
              {items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{
                    duration: 0.18,
                    delay: Math.min(index * 0.015, 0.12),
                  }}
                >
                  <NextLink
                    href="#"
                    className="flex items-center gap-2 rounded-md px-2 py-3 transition-opacity active:opacity-70"
                  >
                    <item.Icon className="size-4 text-zinc-400" />
                    <p className="text-sm text-zinc-100">{item.title}</p>
                  </NextLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        className="rounded-md p-2 text-zinc-100 transition-colors hover:bg-zinc-900"
      >
        <IconMenu2 className="size-5" />
      </button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex">
            <motion.button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-full flex-1 bg-black/50"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 flex h-full w-[86%] max-w-sm flex-col border-r border-zinc-800 bg-neutral-950"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 p-4">
                <Image src="/logo.svg" width="88" height={48} alt="logo" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation"
                  className="rounded-md p-2 text-zinc-100 transition-colors hover:bg-zinc-900"
                >
                  <IconX className="size-5" />
                </button>
              </div>

              <div className="max-h-full min-h-0 flex-1 overflow-hidden px-4 pb-4">
                <SidebarSection
                  title="Products"
                  items={PRODUCTS_COLUMNS.flatMap((column) => column.items)}
                />
                <SidebarSection
                  title="Resources"
                  items={RESOURCES_COLUMNS.flatMap((column) => column.items)}
                />

                <div className="space-y-4 py-2">
                  {NAV_LINKS.map(({ label, href }) => (
                    <NextLink
                      key={label}
                      href={href}
                      className="block rounded-md px-2 py-3 text-sm font-medium text-zinc-100 transition-colors active:bg-zinc-900"
                    >
                      {label}
                    </NextLink>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t border-t-zinc-800 bg-neutral-950 px-4 pt-4 pb-4 font-medium">
                <Link
                  as="link"
                  href={AUTH_LINKS[0].href}
                  variant="transparent"
                  className="border border-zinc-800"
                >
                  {AUTH_LINKS[0].label}
                </Link>
                <Link as="link" href={AUTH_LINKS[1].href}>
                  {AUTH_LINKS[1].label}
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
