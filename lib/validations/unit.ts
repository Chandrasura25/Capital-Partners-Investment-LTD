import * as z from "zod";
export const UnitValidation = z.object({
  username: z.string().min(3).max(30),
  email: z.string().email().min(3).max(100),
  unit: z.number().min(1),
  amount: z.number().min(1),
});