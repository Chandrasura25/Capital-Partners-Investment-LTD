import * as z from "zod";
export const UserValidation = z.object({
  imageURL: z.string().url().nonempty(),
  firstname: z.string().min(3).max(30),
  surname: z.string().min(3).max(30),
  username: z.string().min(3).max(30),
  gender: z.string().min(3).max(20),
  phone: z.string().min(3).max(20),
  next_of_kin: z.string().min(3).max(30),
  mother_middle_name: z.string().min(3).max(30),
  home_address: z.string().min(3).max(200),
  office_address: z.string().min(3).max(200),
  education: z.string().min(3).max(200),
  email: z.string().email().min(3).max(100),
  dob: z.string().min(3).max(20),
});