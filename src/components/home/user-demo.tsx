import { Pizza } from "lucide-react";
import SummaryPDF from "../common/summary-pdf";
import { mockData } from "../../../public/data";

const UserDemo = () => {
  return (
    <section className="w-full min-h-screen flex-1 flex flex-col pt-0 sm:pt-24 relative z-40">
      {/* gradient background  */}
      <div>
        <div
          className="size-80 sm:size-96 bg-green-400/30 absolute z-30 top-18 lg:top-96 right-20"
          style={{
            clipPath:
              "polygon(56% 40%, 10% 10%, 94% 11%, 100% 70%, 95% 93%, 31% 85%, 4% 90%, 0% 70%, 5% 10%, 20% 10%",
          }}
        />
        <div className="w-full h-full absolute z-30 top-0 left-0 backdrop-blur-3xl" />
      </div>
      {/* content  */}
      <div className="w-full flex flex-col justify-center items-center gap-6 relative z-40">
        <div className="inline-flex p-2 rounded-xl text-rose-700 border-2 border-rose-600 bg-rose-500/20 hover:bg-rose-500/30 cursor-text transition-all duration-300 delay-0">
          <Pizza />
        </div>
        <p className="w-full max-w-xl text-center text-xl  lg:text-2xl xl:text-3xl font-semibold px-4">
          Preview of how <span className="font-black text-rose-800">synopsis</span> transforms your PDFs into concise summaries
        </p>
      </div>
      {/* demo  */}
      <div className="w-full max-w-xl flex items-center justify-center mx-auto px-2 my-10 z-40">
        <SummaryPDF data={mockData.summaries} />
      </div>
    </section>
  );
};

export default UserDemo;
