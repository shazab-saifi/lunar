import { cn } from "@/lib/utils";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "border-b border-b-zinc-800 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-72",
        className
      )}
    >
      {children}
    </section>
  );
}
