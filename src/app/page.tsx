import HeroSection from "@/components/home/hero";
import UserDemo from "@/components/home/user-demo";
import HowItWorks from "@/components/home/how-it-works";
import CallToAction from "@/components/home/call-to-action";
import { SignedOut } from "@clerk/nextjs";

const Home = () => {

  return (
    <div className="w-full bg-gray-100 flex flex-col items-center justify-center">
      <HeroSection />
      <UserDemo />
      <HowItWorks />
      <SignedOut>
        <CallToAction />
      </SignedOut>
    </div>
  );
};

export default Home;
