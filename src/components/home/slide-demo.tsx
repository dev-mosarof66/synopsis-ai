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

function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

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
    <div className="w-full relative">
      <Carousel setApi={setApi} className="w-full shadow-md shadow-gray-700 rounded-lg">
        <div className="flex items-center justify-center gap-2 absolute top-4 z-40 left-0 right-0">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <div
                className={`w-6 sm:w-10 h-2 rounded-full ${
                  current - 1 === index ? "bg-rose-800" : " bg-rose-400"
                }`}
              />
            </div>
          ))}
        </div>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="w-full flex items-center justify-between px-4 absolute bottom-4">
          <CarouselPrevious />
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
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

export default CarouselDApiDemo;
