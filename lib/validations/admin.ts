import * as z from "zod";
export const AdminValidation = z.object({
  email: z.string().email().min(3).max(100),
  password: z.string().min(3).max(20),
});