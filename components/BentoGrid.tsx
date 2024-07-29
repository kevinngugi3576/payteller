import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

import { featuresData } from "@/constants";

export function BentoGrids() {
  return (
    <BentoGrid className="max-w-4xl mt-8 mb-8 ">
      {featuresData.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          //   header={item.header}
          //   icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
export const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

