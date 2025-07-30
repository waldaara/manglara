import type { Metadata } from "next";

import {
  TypographyH1,
  TypographyMuted,
} from "@/shared/components/ui/typography";

export const metadata: Metadata = {
  title: "Manglara | Home",
};

export default async function HomePage() {
  return (
    <main className="flex flex-col gap-6">
      <div className="space-y-2">
        <TypographyH1>Home</TypographyH1>

        <TypographyMuted>Welcome to the home of Manglara. 🌴</TypographyMuted>
      </div>
    </main>
  );
}
