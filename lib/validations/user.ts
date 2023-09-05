import * as z from "zod";
export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  firstName: z.string().min(3).max(30),
  surname: z.string().min(3).max(30),
  username: z.string().min(3).max(30),
  gender: z.string().min(3).max(20),
  mobile_number: z.string().min(3).max(20),
  next_of_kin: z.string().min(3).max(30),
  mother_middle_name: z.string().min(3).max(30),
  homeAddress: z.string().min(3).max(200),
  officeAddress: z.string().min(3).max(200),
  level_of_education: z.string().min(3).max(200),
  email: z.string().email().min(3).max(100),
  date_of_birth: z.string().min(3).max(200),
});