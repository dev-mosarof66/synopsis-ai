import HeroSection from "@/components/home/hero";
import UserDemo from "@/components/home/user-demo";
import HowItWorks from "@/components/home/how-it-works";
import Pricing from "@/components/home/pricing";
import CallToAction from "@/components/home/call-to-action";
import { SignedOut } from "@clerk/nextjs";

const Home = () => {

  return (
    <div className="w-full min-h-screen flex flex-col">
      <HeroSection />
      <UserDemo />
      <HowItWorks />
      <Pricing />
      <SignedOut>
        <CallToAction />
      </SignedOut>
    </div>
  );
};

export default Home;
