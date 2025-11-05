import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Plan = {
  id: number;
  name: string;
  tagline: string;
  price: number;
  features: string[];
};

const plans: Plan[] = [
  {
    id: 1,
    name: "Basic",
    tagline: "Perfect for occasional use",
    price: 9,
    features: [
      "Upload up to 60 PDFs per month",
      "AI-powered summaries",
      "Basic text extraction",
      "Email support",
    ],
  },
  {
    id: 2,
    name: "Pro",
    tagline: "Ideal for professionals and students",
    price: 12,
    features: [
      "Unlimited PDF uploads",
      "Advanced AI analysis",
      "Save and export summaries",
      "Priority email support",
    ],
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative w-full py-20 flex flex-col items-center text-center"
    >
      <h3 className="text-3xl font-semibold text-gray-900 tracking-tight">
        Pricing Plans
      </h3>
      <p className="text-gray-500 mt-2">
        Choose a plan that fits your workflow.
      </p>

      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 px-4 md:px-0">
        {plans.map((plan) => (
          <PricingCard key={plan.id} {...plan} />
        ))}
      </div>
      {/* comming soon */}
      <div className="absolute top-0 left-0 right-0 w-full h-full backdrop-blur-[1px]">
        <Badge className="my-2 bg-rose-100 text-rose-700 border border-rose-300 text-sm font-semibold">
          Coming Soon
        </Badge>
      </div>
    </section>
  );
};

const PricingCard = ({ name, tagline, price, features }: Plan) => {
  const isPro = name.toLowerCase() === "pro";

  return (
    <div
      className={`relative group w-full flex flex-col items-center rounded-2xl border p-8 shadow-sm transition-all duration-300
      ${
        isPro
          ? "border-rose-400 bg-linear-to-br from-rose-50 to-white hover:shadow-rose-300 hover:scale-[1.02]"
          : "border-gray-200 bg-white hover:shadow-md"
      }`}
    >
      {isPro && (
        <Badge className="absolute top-4 right-4 bg-rose-600 text-white border-rose-600">
          Most Popular
        </Badge>
      )}

      <h2 className="text-[22px] font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500 mb-6">{tagline}</p>

      <div className="text-4xl font-bold text-rose-600 mb-6">
        ${price}
        <span className="text-base text-gray-400 font-medium">
          {price === 0 ? "/free" : "/month"}
        </span>
      </div>

      <ul className="text-gray-700 text-sm space-y-3 mb-8 self-start">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="text-rose-500 text-lg leading-none">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`w-full flex items-center justify-center gap-3 text-white py-2.5 rounded-lg font-medium transition-all duration-300 active:scale-[.97]
        ${
          isPro
            ? "bg-linear-to-r from-rose-600 to-rose-800 hover:from-rose-700 hover:to-rose-900 shadow"
            : "bg-rose-500 hover:bg-rose-600"
        }`}
      >
        <span>{isPro ? "Go Pro" : "Buy Now"}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pricing;
