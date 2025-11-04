"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import ReactMarkDown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import {SummaryData} from '@/features/summary';


function SummaryPDF({ data }: {data: SummaryData[]}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const len = data?.length;

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col gap-6 relative bg-white rounded-xl shadow-lg shadow-gray-700">
      <Carousel
        setApi={setApi}
        className="w-full overflow-x-hidden"
      >
        <div
          className={`${
            len > 8
              ? "hidden"
              : "flex items-center justify-center gap-2 absolute top-4 z-40 left-0 right-0 overflow-x-hidden transition-all duration-300 delay-75"
          }`}
        >
          {Array.from({ length: len }).map((_, index) => (
            <div key={index}>
              <div
                className={`w-6  h-1 rounded-full ${
                  current - 1 === index ? "bg-rose-800" : " bg-rose-400"
                }`}
              />
            </div>
          ))}
        </div>
        <CarouselContent className="rounded-lg">
          {len > 0 &&
            data.map((point, index) => (
              <CarouselCard
                key={index}
                title={point.title}
                description={point.description}
              />
            ))}
        </CarouselContent>
        {/* navigation  */}
        <div className="w-full flex items-center justify-between px-4 absolute bottom-1 z-40 left-0 right-0 bg-white py-1 rounded-b-sm">
          <CarouselPrevious />
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: len }).map((_, index) => (
              <div key={index}>
                <div
                  className={`size-2 rounded-full ${
                    current - 1 === index ? "bg-rose-800" : " bg-rose-400"
                  }`}
                />
              </div>
            ))}
          </div>
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}

function CarouselCard({
  title,
  description,
}: {
  title: string;
  description: string[];
}) {
  return (
    <CarouselItem>
      <Card className="w-full h-full">
        <CardContent className="w-full flex flex-col items-center p-2 sm:p-6 overflow-y-scroll h-[450px] scrollbar-hidden pb-8">
          <h4 className="w-full max-w-md text-lg text-center sm:text-xl  font-semibold mb-4 text-red-800">
            {title}
          </h4>
          <div className="w-full grid grid-cols-1 gap-4">
            {description.map((desc, index) => (
              <div
                key={index}
                className="w-full p-2 rounded-sm bg-gray-500/20 shadow-sm hover:shadow-md shadow-black/20"
              >
                <ReactMarkDown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {desc}
                </ReactMarkDown>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
}

export default SummaryPDF;
