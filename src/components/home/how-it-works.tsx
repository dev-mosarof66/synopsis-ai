import { BrainCircuit, FileText } from "lucide-react";
import { ReactNode } from "react";

type Steps = {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
};

const steps: Steps[] = [
  {
    id: 1,
    icon: <FileText size={32} className="text-rose-500" />,
    title: "Upload your PDF",
    description:
      "Simply drag and drop your PDF document or click to upload it securely.",
  },
  {
    id: 2,
    icon: <BrainCircuit size={32} className="text-rose-500" />,
    title: "AI Analysis",
    description:
      "Our advanced AI processes and analyzes your document instantly.",
  },
  {
    id: 3,
    icon: <FileText size={32} className="text-rose-500" />,
    title: "Get Summary",
    description:
      "Receive a clear, concise summary of your document in seconds.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center gap-6 py-20 sm:py-28 bg-gray-100 relative z-40">
      <h3 className="uppercase font-semibold text-rose-500 text-lg sm:text-xl tracking-wide">
        How it works
      </h3>
      <h4 className="w-full sm:w-[600px] text-center text-xl sm:text-3xl font-semibold px-6 sm:px-0 text-gray-800">
        Transform any PDF into an easy-to-digest summary in three simple steps
      </h4>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-6 sm:px-0">
        {steps.map((step) => (
          <StepCard key={step.id} {...step} />
        ))}
      </div>
    </section>
  );
};

const StepCard = ({ title, icon, description }: Steps) => {
  return (
    <div className="w-full sm:w-[90%] md:w-full mx-auto flex flex-col items-center text-center bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 mb-4">
        {icon}
      </div>
      <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
        {title}
      </h2>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </div>
  );
};

export default HowItWorks;
