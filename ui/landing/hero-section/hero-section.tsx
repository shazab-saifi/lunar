import { Container, Heading } from "@/components";
import { Cta } from "./cta";

export const HeroSection = () => {
  return (
    <Container>
      <div className="border-x border-neutral-800 px-4 pt-32 pb-8 sm:px-8">
        <div className="max-w-5xl space-y-12">
          <Heading
            as="h1"
            className="bg-linear-to-b from-neutral-100 to-neutral-400 bg-clip-text text-transparent"
          >
            Built Extraordinary Software, Code with Lunar
          </Heading>
          <Cta />
        </div>
      </div>
    </Container>
  );
};
