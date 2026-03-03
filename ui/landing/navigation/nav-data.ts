import {
  IconBrandAppleFilled,
  IconBrandUbuntu,
  IconBrandWindowsFilled,
  IconBook2,
  IconBuildingBank,
  IconCalculatorFilled,
  IconCash,
  IconChartHistogram,
  IconChartLine,
  IconChecks,
  IconChecklist,
  IconCode,
  IconCreditCardFilled,
  IconHelpCircleFilled,
  IconNews,
  IconPlugConnected,
  IconReceiptFilled,
  IconSchoolFilled,
  IconShieldCheck,
  IconShieldCheckFilled,
  IconShoppingBag,
  IconTool,
} from "@tabler/icons-react";
import { type ComponentType } from "react";

export type NavLink = {
  label: string;
  href: string;
};

export type NavigationColumnItem = {
  title: string;
  subtitle: string;
  Icon: ComponentType<{ className?: string }>;
};

export type NavigationColumn = {
  heading: string;
  items: NavigationColumnItem[];
};

export const NAV_LINKS: NavLink[] = [
  { label: "Enterprise", href: "#" },
  { label: "Pricing", href: "#" },
];

export const AUTH_LINKS: NavLink[] = [
  { label: "Log In", href: "#" },
  { label: "Sign Up", href: "#" },
];

export const PRODUCTS_COLUMNS: NavigationColumn[] = [
  {
    heading: "Banking",
    items: [
      {
        title: "Starter Banking",
        subtitle: "Accounts for early teams",
        Icon: IconBuildingBank,
      },
      {
        title: "Invoicing",
        subtitle: "Create invoices instantly",
        Icon: IconReceiptFilled,
      },
      {
        title: "Expense Cards",
        subtitle: "Control team spending",
        Icon: IconCreditCardFilled,
      },
      {
        title: "Bookkeeping",
        subtitle: "Auto categorization and reports",
        Icon: IconCalculatorFilled,
      },
    ],
  },
  {
    heading: "Operations",
    items: [
      {
        title: "Revenue Insights",
        subtitle: "Track growth and cohorts",
        Icon: IconChartLine,
      },
      {
        title: "Payroll",
        subtitle: "Payroll with local compliance",
        Icon: IconCash,
      },
      {
        title: "Approvals",
        subtitle: "Custom finance approvals",
        Icon: IconChecks,
      },
      {
        title: "Forecasting",
        subtitle: "Model runway and burn",
        Icon: IconChartHistogram,
      },
    ],
  },
  {
    heading: "Enterprise",
    items: [
      {
        title: "SOX Controls",
        subtitle: "Audit-ready controls",
        Icon: IconShieldCheckFilled,
      },
      {
        title: "ERP Connectors",
        subtitle: "Sync with enterprise systems",
        Icon: IconPlugConnected,
      },
      {
        title: "Procurement",
        subtitle: "Centralize vendor purchasing",
        Icon: IconShoppingBag,
      },
    ],
  },
];

export const RESOURCES_COLUMNS: NavigationColumn[] = [
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
