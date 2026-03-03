import { HeroSection } from "./hero-section/hero-section";
import Navbar from "./navigation/navbar";

export const Landing = () => {
  return (
    <div className="font-inter min-h-screen w-full">
      <Navbar />
      <HeroSection />
    </div>
  );
};
