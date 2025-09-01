import { Metadata } from "next";

import { ScrollArea } from "@/shared/components/ui/scroll-area";
import {
  TypographyH1,
  TypographyMuted,
} from "@/shared/components/ui/typography";
import { PageWrapper } from "@/shared/components/page-wrapper";
import { MobileWrapper } from "@/shared/components/mobile-wrapper";

import { SettingsSidebar } from "@/features/settings/components/settings-sidebar";

export const metadata: Metadata = {
  title: "Manglara | Configuraciones",
};

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full flex-col space-y-8">
      <MobileWrapper wrapperPage="/settings">
        <div className="space-y-2">
          <TypographyH1>Configuraciones</TypographyH1>

          <TypographyMuted>
            Administra tus configuraciones y preferencias. 🌴
          </TypographyMuted>
        </div>
      </MobileWrapper>

      <div className="flex min-h-0 flex-1 gap-6">
        <SettingsSidebar />

        <PageWrapper wrapperPage="/settings">
          <ScrollArea className="h-full flex-1">
            <div className="space-y-8 px-4 pb-16">{children}</div>
          </ScrollArea>
        </PageWrapper>
      </div>
    </div>
  );
}
