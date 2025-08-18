"use client";

import { LoaderIcon, RotateCcwIcon } from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { TypographyH4 } from "@/shared/components/ui/typography";
import { PasswordStrengthIndicator } from "@/shared/components/password-strength-indicator";

import { useUpdatePasswordForm } from "@/features/settings/hooks/use-update-password-form";

export const UpdatePasswordForm = () => {
  const { form, onSubmit, isPending, isError, isSessionSuccess } =
    useUpdatePasswordForm();

  const { errors, isDirty } = form.formState;

  const canSubmit = !errors.newPassword && isDirty;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <TypographyH4>Cambiar contraseña</TypographyH4>

        <FormField
          disabled={isPending || !isSessionSuccess}
          control={form.control}
          name="newPassword"
          render={({ field, fieldState }) => (
            <FormItem>
              <div className="flex flex-wrap items-center justify-start gap-2">
                <FormLabel>Nueva contraseña</FormLabel>

                <FormControl className="w-full sm:w-fit">
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
              </div>

              <FormDescription className="text-muted-foreground text-sm">
                Si cambias tu contraseña, se cerrarán todas tus sesiones
                activas.
              </FormDescription>

              {/* <FormMessage /> */}

              {(fieldState.isDirty || fieldState.isTouched) && (
                <PasswordStrengthIndicator password={field.value} />
              )}
            </FormItem>
          )}
        />

        {canSubmit && (
          <FormField
            disabled={isPending}
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem className="bg-destructive/40 flex flex-col items-start gap-4 rounded-lg p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Contraseña actual</FormLabel>

                  <FormDescription>
                    Para cambiar tu contraseña, por favor ingresa tu contraseña
                    actual.
                  </FormDescription>
                </div>

                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>

                <FormMessage />

                <Button
                  variant={isError ? "destructive" : "default"}
                  disabled={isPending}
                  type="submit"
                >
                  {isPending && <LoaderIcon className="animate-spin" />}
                  {isError && <RotateCcwIcon />}
                  Cambiar contraseña
                </Button>
              </FormItem>
            )}
          />
        )}
      </form>
    </Form>
  );
};
