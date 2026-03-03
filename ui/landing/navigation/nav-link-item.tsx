import { type ComponentProps, type ComponentType, type ReactNode } from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

type NavigationLinkItemRootProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

type NavigationLinkItemIconProps = {
  icon: ComponentType<{ className?: string }>;
  className?: string;
  wrapperClassName?: string;
};

type NavigationLinkItemTextProps = ComponentProps<"p">;

function NavigationLinkItemRoot({
  href,
  children,
  className,
}: NavigationLinkItemRootProps) {
  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  );
}

function NavigationLinkItemIcon({
  icon: Icon,
  className,
  wrapperClassName,
}: NavigationLinkItemIconProps) {
  return (
    <div
      className={cn(
        "mt-1 flex size-8 items-center justify-center rounded-sm bg-neutral-900 p-3 transition-colors group-hover:bg-zinc-100",
        wrapperClassName
      )}
    >
      <Icon
        className={cn(
          "size-4 shrink-0 text-zinc-100 transition-colors group-hover:text-zinc-950",
          className
        )}
      />
    </div>
  );
}

function NavigationLinkItemTitle({
  className,
  children,
  ...props
}: NavigationLinkItemTextProps) {
  return (
    <p
      className={cn("text-sm font-medium text-zinc-100", className)}
      {...props}
    >
      {children}
    </p>
  );
}

function NavigationLinkItemSubtitle({
  className,
  children,
  ...props
}: NavigationLinkItemTextProps) {
  return (
    <p
      className={cn("block w-full truncate text-xs text-zinc-400", className)}
      {...props}
    >
      {children}
    </p>
  );
}

const NavigationLinkItem = Object.assign(NavigationLinkItemRoot, {
  Icon: NavigationLinkItemIcon,
  Title: NavigationLinkItemTitle,
  Subtitle: NavigationLinkItemSubtitle,
});

export default NavigationLinkItem;
