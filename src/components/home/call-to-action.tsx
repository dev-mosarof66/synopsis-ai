import { SignedOut, SignInButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="w-full bg-gray-100">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-0 py-24 flex flex-col items-center gap-4">
        <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-center px-4">
          Ready to Save Hours of Reading Time?
        </h2>
        <p className="text-lg  text-gray-600  max-w-2xl mx-auto text-center">
          Transform lengthy documents into clear, actionable insights with our
          AI-powered summarizer.
        </p>

        <SignedOut>
          <SignInButton>
            <div className="relative flex items-center gap-4 px-6 py-2 bg-linear-to-r from-rose-900 to-gray-900 text-white font-medium cursor-pointer hover:scale-105 rounded-full shadow-md transition-all duration-300 overflow-hidden group">
              <span className="relative z-10 text-sm md:text-lg">
                Get Started
              </span>

              <ArrowRight className="relative z-10 text-2xl transition-transform text-white duration-300 group-hover:translate-x-2 animate-pulse" />

              {/* gradient overlay on hover */}
              <span className="absolute inset-0 bg-linear-to-r from-gray-900 to-rose-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </SignInButton>
        </SignedOut>
      </div>
    </section>
  );
};

export default CallToAction;
