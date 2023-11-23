import * as z from "zod";
export const AdminValidation = z.object({
  email: z.string().email().min(3).max(100),
  password: z.string().min(3).max(20),
});
export const BroadcastValidation = z.object({
  headings:z.string().min(3),
  greetings: z.string().min(5),
  message: z.string().min(5),
  image: z.string().min(3),
  imageDescription: z.string().min(3),
  sender: z.string().min(3),
  position: z.string().min(3),
  subject: z.string().min(3)
});