"use client";

import { companies } from "@/assets/assets";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export const HomeCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="my-12 mx-auto"
    >
      <CarouselContent className="flex gap-5 sm:gap-20 items-center">
        {companies.map((item, index) => (
          <CarouselItem key={index} className="basis-auto">
            <div className="flex items-center justify-center p-2">
              <Image
                src={item}
                alt={`Company ${index}`}
                width={280}
                className="mix-blend-multiply"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
