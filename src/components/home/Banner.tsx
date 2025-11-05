import React from "react";

const limitations = [
  "You cannot upload a PDF larger than 2MB.",
  "As a test user, you can only upload one PDF and cannot download it.",
];

const Banner = () => {
  if (process.env.NODE_ENV !== "development") return null; // No banner in production

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-3 rounded-md border-l-4 border-red-500 bg-yellow-50 p-4 text-yellow-800 shadow shadow-black/50">
      <p className="font-semibold">⚠️ Developer Mode Active</p>
      <p>
        You are currently using the development version of this product. Some features may be limited.
      </p>

      <p className="font-medium">Limitations you may face:</p>
      <ul className="list-disc ml-6 space-y-1">
        {limitations.map((item, index) => (
          <li key={index} className="text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Banner;
