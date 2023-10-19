import * as z from "zod";
export const BankValidation = z.object({
  userID: z.number().min(1),
  username: z.string().min(3).max(30),
  email: z.string().email().min(3).max(100),
  accountName: z.string().min(1),
  accountNumber: z.string().min(1),
  bankName: z.string().min(1),
});
