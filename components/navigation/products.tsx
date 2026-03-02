import {
  IconBuildingBank,
  IconCalculatorFilled,
  IconCash,
  IconChartHistogram,
  IconChartLine,
  IconChecks,
  IconCreditCardFilled,
  IconPlugConnected,
  IconReceiptFilled,
  IconShieldCheckFilled,
  IconShoppingBag,
} from "@tabler/icons-react";
import NavigationLinkItem from "./nav-link-item";

export default function Products() {
  const columns = [
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
