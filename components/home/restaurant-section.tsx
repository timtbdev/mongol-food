"use client";

import Arrow from "@/components/ui/home/arrow";
import BigButton from "@/components/ui/home/big-button";
import Section from "@/components/ui/home/section";
import SectionTitle from "@/components/ui/home/section-title";
import Image from "next/image";
import { StargazerLoading, StargazerMore } from "../ui/home/restaurant-avatar";

export const RestaurantSection = () => {
  return (
    <Section id="restaurant" className="sm:pb-20">
      <Image
        src="/images/section-image-restaurant.png"
        alt="Genkhis Khan with Mongolian dishes"
        width={176}
        height={176}
        className="size-44"
      />
      <SectionTitle title="Best Mongolian" highlight="Restaurants" />

      <div className="mt-2 flex items-center gap-2">
        <div className="flex flex-wrap items-center justify-center">
          {Array.from({ length: 10 }).map((_, i) => (
            <StargazerLoading key={i} />
          ))}
          <StargazerMore />
        </div>
      </div>

      <div className="mt-3 flex w-full max-w-xs flex-col items-center gap-2 [&>.button:hover~.arrow]:-rotate-6">
        <BigButton
          title="Find a Restaurant"
          url="/restaurants"
          className="order-2"
        />

        <Arrow className="arrow text-brand-400 order-1 size-20 transition-transform duration-300" />
      </div>
    </Section>
  );
};
