import type { Metadata } from "next";

import { ScrollArea } from "@/shared/components/ui/scroll-area";
import { TypographyH1 } from "@/shared/components/ui/typography";

export const metadata: Metadata = {
  title: "Manglara | Home",
};

export default async function HomePage() {
  return (
    <div className="flex h-full w-full">
      <ScrollArea className="h-full w-[65%] pr-4">
        <main className="flex flex-col flex-wrap gap-6 pt-10">
          <TypographyH1>Home</TypographyH1>
        </main>
      </ScrollArea>
      <div className="h-full w-[35%]"></div>
    </div>
  );
}
