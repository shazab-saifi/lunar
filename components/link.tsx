import NextLink from "next/link";
import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/button";
import { cn } from "@/lib/utils";

type BaseLinkProps = {
  className?: string;
  children: React.ReactNode;
} & VariantProps<typeof buttonVariants>;

type InternalLinkProps = BaseLinkProps &
  Omit<React.ComponentProps<typeof NextLink>, "className"> & {
    as?: "link";
  };

type ExternalLinkProps = BaseLinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    as: "a";
    href: string;
  };

type LinkProps = InternalLinkProps | ExternalLinkProps;

function Link(props: LinkProps) {
  const { className, variant, size, as = "link", ...rest } = props;
  const linkClassName = cn(buttonVariants({ variant, size }), className);

  if (as === "a") {
    const { rel, ...anchorProps } = rest as ExternalLinkProps;

    return (
      <a
        className={linkClassName}
        target="_blank"
        rel={rel ?? "noopener noreferrer"}
        {...anchorProps}
      />
    );
  }

  return (
    <NextLink className={linkClassName} {...(rest as InternalLinkProps)} />
  );
}

export { Link };
