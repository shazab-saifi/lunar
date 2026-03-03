import NavigationLinkItem from "./nav-link-item";
import { PRODUCTS_COLUMNS } from "./nav-data";

export default function Products() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {PRODUCTS_COLUMNS.map((column, colIdx) => (
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
