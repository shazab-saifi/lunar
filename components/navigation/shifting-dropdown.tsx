"use client";

import { IconChevronDown } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Products from "./products";
import Resources from "./resources";

export const ShiftingDropdown = () => {
  return (
    <div className="flex w-full justify-start bg-neutral-950 text-neutral-200 md:justify-center">
      <Tabs />
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<"r" | "l" | null>(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof val === "number" && typeof selected === "number") {
      setDir(selected > val ? "r" : "l");
    } else {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="flex h-fit items-center gap-2"
    >
      {TABS.map((item) => (
        <Tab
          key={item.id}
          tabId={item.id}
          handleSetSelected={handleSetSelected}
          selected={selected}
        >
          {item.title}
        </Tab>
      ))}

      <AnimatePresence>
        {selected && (
          <div className="absolute top-[72%] right-0 overflow-hidden pt-4.5">
            <Content dir={dir} selected={selected} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({
  selected,
  handleSetSelected,
  tabId,
  children,
}: {
  selected: number | null;
  handleSetSelected: (tab: number) => void;
  tabId: number;
  children: React.ReactNode;
}) => {
  return (
    <button
      id={`shift-tab-${tabId}`}
      onMouseEnter={() => handleSetSelected(tabId)}
      onClick={() => handleSetSelected(tabId)}
      className={cn(
        "flex items-center gap-1 rounded-lg py-1 pr-2 pl-3 text-sm transition-colors hover:bg-zinc-900",
        selected === tabId ? "text-zinc-100" : "text-zinc-400"
      )}
    >
      <span>{children}</span>
      <IconChevronDown
        className={`size-4 transition-transform ${
          selected === tabId ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({
  dir,
  selected,
}: {
  dir: "r" | "l" | null;
  selected: number;
}) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="w-3xl rounded-lg border border-zinc-800 bg-zinc-950"
    >
      <div className="overflow-hidden p-4">
        {TABS.map((t) => {
          return (
            <div key={t.id}>
              <AnimatePresence mode="popLayout">
                {selected === t.id && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: dir === "l" ? "40%" : dir === "r" ? "-40%" : 0,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{
                      opacity: 0,
                      x: dir === "r" ? "-40%" : dir === "l" ? "40%" : 0,
                    }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  >
                    <t.Component />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

const TABS = [
  { title: "Products", Component: Products },
  { title: "Resources", Component: Resources },
].map((item, idx) => ({ ...item, id: idx + 1 }));
