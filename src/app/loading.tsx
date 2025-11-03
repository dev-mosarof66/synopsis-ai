"use client";
import { Spinner } from "@/components/ui/spinner";

const Loading = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <Spinner />
    </section>
  );
};

export default Loading;
