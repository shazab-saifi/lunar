import * as React from "react";
import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: HeadingTag;
  children: React.ReactNode;
};

const headingStyles: Record<HeadingTag, string> = {
  h1: "text-[clamp(2rem,6vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-zinc-100",
  h2: "text-[clamp(1.5rem,4vw,3rem)] leading-[1.1] font-semibold tracking-tight text-zinc-100",
};

function Heading({ as = "h2", className, children, ...props }: HeadingProps) {
  const Comp = as;

  return (
    <Comp className={cn(headingStyles[as], className)} {...props}>
      {children}
    </Comp>
  );
}

export { Heading };
