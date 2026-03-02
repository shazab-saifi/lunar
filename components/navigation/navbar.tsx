import Image from "next/image";
import Container from "../container";
import { Link } from "../link";
import NextLink from "next/link";
import { ShiftingDropdown } from "./shifting-dropdown";

export default function Navbar() {
  return (
    <Container>
      <nav className="relative flex items-center justify-between border-x border-neutral-800 py-4 md:px-4 lg:px-8">
        <Image src="./logo.svg" width="88" height={48} alt="logo" />
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <ShiftingDropdown />
            <NextLink
              href="#"
              className="rounded-lg px-2.5 py-1 text-sm text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
            >
              Enterprise
            </NextLink>
            <NextLink
              href="#"
              className="rounded-lg px-2.5 py-1 text-sm text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
            >
              Pricing
            </NextLink>
          </div>
          <div className="flex items-center gap-2">
            <Link as="link" href="#" variant="transparent" size="sm">
              Log In
            </Link>
            <Link as="link" href="#" size="sm">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </Container>
  );
}
