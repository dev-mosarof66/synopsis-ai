import { ArrowRight } from "lucide-react";

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
      className="w-full min-h-screen flex flex-col items-center gap-6 py-20 sm:py-12 bg-white relative z-40"
    >
      <h3 className="uppercase font-semibold text-rose-500 text-lg sm:text-xl tracking-wide relative">
        Pricing
        <span className="w-16 h-[2.5px] bg-rose-600 absolute bottom-0 left-0" />
      </h3>

      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2  gap-8 mt-12 px-4 sm:px-0">
        {plans.map((plan) => (
          <PricingCard key={plan.id} {...plan} />
        ))}
      </div>
    </section>
  );
};

const PricingCard = ({ name, tagline, price, features }: Plan) => {
  const isPro = name.toLowerCase() === "pro";

  return (
    <div className="w-full flex flex-col items-center bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-1">{name}</h2>
      <p className="text-sm text-gray-500 mb-6">{tagline}</p>

      <div className="text-4xl font-bold text-rose-500 mb-6">
        ${price}
        <span className="text-base text-gray-500 font-medium">
          {price === 0 ? " / free" : " / month"}
        </span>
      </div>

      <ul className="text-gray-700 text-sm space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-rose-500">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`w-full flex items-center justify-center gap-3 text-white py-2 rounded-xl transition-all duration-300 ${
          isPro
            ? "bg-linear-to-r from-rose-800 to-gray-950 hover:from-gray-950 hover:to-rose-800"
            : "bg-rose-500 hover:bg-rose-600"
        } active:scale-95`}
      >
        <span>{isPro ? "Go Pro":"Buy Now"}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
export default Pricing;
