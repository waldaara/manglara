import { z } from "zod";

export const updateUsernameSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, {
      message: "Username must be at least 3 characters long",
    })
    .max(30, {
      message: "Username must be at most 30 characters long",
    })
    .regex(/^\w+$/, {
      message:
        "Username should only contain alphanumeric characters and underscores",
    }),
});
