import { SettingsPageHeader } from "@/features/settings/components/settings-page-header";
import { UpdatePasswordForm } from "@/features/settings/components/update-password-form";
import { UpdateTwoFactorForm } from "@/features/settings/components/update-two-factor-form";
import { GenerateBackupCodesForm } from "@/features/settings/components/generate-backup-codes-form";
import { ActiveSessions } from "@/features/settings/components/active-sessions";

export default function SettingsSecurityPage() {
  return (
    <>
      <SettingsPageHeader
        title="Security"
        description="Update your account's security settings."
      />

      <UpdatePasswordForm />
      <UpdateTwoFactorForm />
      <GenerateBackupCodesForm />
      <ActiveSessions />
    </>
  );
}
