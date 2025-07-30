import { z } from "zod";

export const updateUserSchema = z.object({
  userId: z.string().min(1, { message: "User ID is required" }),
  name: z
    .string()
    .trim()
    .min(2, {
      message: "Name must be at least 2 characters long",
    })
    .max(50, {
      message: "Name must be at most 50 characters long",
    }),
  username: z
    .string()
    .trim()
    .min(3, {
      message: "Username must be at least 3 characters long",
    })
    .max(30, {
      message: "Username must be at most 30 characters long",
    })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message:
        "Username should only contain alphanumeric characters and underscores",
    }),
  email: z.email({
    message: "Email must be a valid email address",
  }),
  role: z.enum(["admin", "user"]),
});
