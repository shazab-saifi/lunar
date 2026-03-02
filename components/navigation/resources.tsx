import {
  IconBrandAppleFilled,
  IconBrandUbuntu,
  IconBrandWindowsFilled,
  IconBook2,
  IconChecklist,
  IconCode,
  IconHelpCircleFilled,
  IconNews,
  IconSchoolFilled,
  IconShieldCheck,
  IconTool,
} from "@tabler/icons-react";
import { type ComponentType } from "react";
import NavigationLinkItem from "./nav-link-item";

type ResourceItem = {
  title: string;
  subtitle: string;
  Icon: ComponentType<{ className?: string }>;
};

type ResourceColumn = {
  heading: string;
  items: ResourceItem[];
};

export default function Resources() {
  const columns: ResourceColumn[] = [
    {
      heading: "Learn",
      items: [
        {
          title: "Documentation",
          subtitle: "API docs and guides",
          Icon: IconBook2,
        },
        {
          title: "Guidelines",
          subtitle: "Brand and writing standards",
          Icon: IconChecklist,
        },
        {
          title: "Tutorials",
          subtitle: "Walkthroughs for common flows",
          Icon: IconSchoolFilled,
        },
        {
          title: "Code Samples",
          subtitle: "Ready snippets for quick setup",
          Icon: IconCode,
        },
      ],
    },
    {
      heading: "Operate",
      items: [
        {
          title: "Release Notes",
          subtitle: "Latest product updates",
          Icon: IconNews,
        },
        {
          title: "Status",
          subtitle: "Uptime and incident history",
          Icon: IconShieldCheck,
        },
        {
          title: "Troubleshooting",
          subtitle: "Fix common issues fast",
          Icon: IconTool,
        },
        {
          title: "FAQ",
          subtitle: "Setup and billing answers",
          Icon: IconHelpCircleFilled,
        },
      ],
    },
    {
      heading: "Download",
      items: [
        {
          title: "Windows",
          subtitle: "Download Lunar for windows",
          Icon: IconBrandWindowsFilled,
        },
        {
          title: "Mac",
          subtitle: "Download Lunar for mac",
          Icon: IconBrandAppleFilled,
        },
        {
          title: "Linux",
          subtitle: "Download Lunar for linux",
          Icon: IconBrandUbuntu,
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {columns.map((column, colIdx) => (
        <div key={colIdx} className="flex flex-col gap-3">
          <p className="px-0 text-sm tracking-wide text-zinc-400">
            {column.heading}
          </p>
          <div className="flex flex-col gap-6">
            {column.items.map((item) => (
              <NavigationLinkItem
                key={item.title}
                href="#"
                className="group flex h-auto w-full justify-start gap-2 rounded-md px-0 py-0 text-left hover:bg-transparent"
              >
                <NavigationLinkItem.Icon icon={item.Icon} />
                <div className="flex min-w-0 flex-col gap-1">
                  <NavigationLinkItem.Title className="font-normal">
                    {item.title}
                  </NavigationLinkItem.Title>
                  <NavigationLinkItem.Subtitle className="group-hover:text-zinc-100">
                    {item.subtitle}
                  </NavigationLinkItem.Subtitle>
                </div>
              </NavigationLinkItem>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
