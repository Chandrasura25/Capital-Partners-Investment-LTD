import * as z from "zod";
export const BankValidation = z.object({
  userID: z.number().min(1),
  username: z.string().min(3).max(30),
  email: z.string().email().min(3).max(100),
  accountName: z.string().min(1),
  accountNumber: z.string().min(1),
  bankName: z.string().min(1),
});


export const CardValidation = z.object({
  userID: z.string().min(1),
  fullname: z.string().min(3).max(30),
  email: z.string().email().min(3).max(100),
  amount: z.string().min(1),
  phone_number: z.string().min(1).max(14),
  card_number: z.string().min(1),
  cvv: z.string().min(1),
  expiry_month: z.string().min(1),
  expiry_year: z.string().min(1),
  pin: z.string().min(1),
});