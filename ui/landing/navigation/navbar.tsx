import Image from "next/image";
import NextLink from "next/link";
import { AUTH_LINKS, NAV_LINKS } from "./nav-data";
import Sidebar from "./sidebar";
import { ShiftingDropdown } from "./shifting-dropdown";
import { Container, Link } from "@/components";

export default function Navbar() {
  return (
    <Container>
      <nav className="relative flex items-center justify-between border-x border-neutral-800 px-4 py-4 lg:px-8">
        <Image src="/logo.svg" width="88" height={48} alt="logo" />

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-3">
            <ShiftingDropdown />
            {NAV_LINKS.map(({ label, href }) => (
              <NextLink
                key={label}
                href={href}
                className="rounded-lg px-2.5 py-1 text-sm text-zinc-400 transition-colors select-none hover:bg-zinc-900 hover:text-zinc-100"
              >
                {label}
              </NextLink>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Link
              as="link"
              href={AUTH_LINKS[0].href}
              variant="transparent"
              size="sm"
            >
              {AUTH_LINKS[0].label}
            </Link>
            <Link as="link" href={AUTH_LINKS[1].href} size="sm">
              {AUTH_LINKS[1].label}
            </Link>
          </div>
        </div>

        <Sidebar />
      </nav>
    </Container>
  );
}
