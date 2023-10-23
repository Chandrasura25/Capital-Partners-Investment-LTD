"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidation } from "@/lib/validations/user";
import * as z from "zod";
import { ChangeEvent, useState } from "react";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { updateUser } from "@/lib/actions/user.actions";
import { useRouter, usePathname } from "next/navigation";
interface Props {
  user: {
    id: string;
    username: string;
    firstname: string;
    surname: string;
    home_address: string;
    office_address: string;
    email: string;
    dob: string;
    gender: string;
    phone: string;
    next_of_kin: string;
    education: string;
    mother_middle_name: string;
    image: string;
  };
  btnTitle: string;
  textStyle?: string;
}
const AccountProfile = ({ user, btnTitle, textStyle }: Props) => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const { startUpload } = useUploadThing("media");
  const pathname = usePathname();
  const router = useRouter();

  const fieldMappings = {
    surname: "Surname",
    firstname: "First Name",
    username: "Username",
    home_address: "Home Address",
    office_address: "Office Address",
    mother_middle_name: "Mother Middle Name",
    next_of_kin: "Next of Kin",
    phone: "Mobile Number",
    education: "Level of Education",
  };

  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: user?.image || "",
      surname: user?.surname || "",
      username: user?.username || "",
      firstname: user?.firstname || "",
      email: user?.email || "",
      home_address: user?.home_address || "",
      office_address: user?.office_address || "",
      dob: user?.dob || "",
      gender: user?.gender || "",
      mother_middle_name: user?.mother_middle_name || "",
      next_of_kin: user?.next_of_kin || "",
      education: user?.education || "",
      phone: user?.phone || "",
    },
  });
  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));
      if (!file.type.includes("image")) return;
      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };
      fileReader.readAsDataURL(file);
    }
  };
  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    const blob = values.profile_photo;
    const hasImageChanged = isBase64Image(blob);
    if (hasImageChanged) {
      const imgRes = await startUpload(files);
      if (imgRes && imgRes[0].fileUrl) {
        values.profile_photo = imgRes[0].fileUrl;
      }
    }
    setLoading(true);
    await updateUser({
      username: values.username,
      firstname: values.firstname,
      surname: values.surname,
      home_address: values.home_address,
      office_address: values.office_address,
      email: values.email,
      dob: values.dob,
      gender: values.gender,
      phone: values.phone,
      next_of_kin: values.next_of_kin,
      education: values.education,
      mother_middle_name: values.mother_middle_name,
      imageURL: values.profile_photo,
      userId: user.id,
      path: pathname,
    });
    if (pathname === "/profile/edit") {
      setLoading(false);
      router.back();
    } else {
      router.push("/dashboard");
      setLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10"
      >
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="account-form_image-label">
                {field.value ? (
                  <Image
                    src={field.value}
                    alt="profile_photo"
                    width={96}
                    height={96}
                    priority
                    className="rounded-full object-contain"
                  />
                ) : (
                  <Image
                    src="/assets/profile.svg"
                    alt="profile_photo"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                )}
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-gray-200">
                <Input
                  accept="image/*"
                  type="file"
                  placeholder="Upload a photo"
                  className="account-form_image-input"
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel
                className={`text-base-semibold ${
                  textStyle === "" ? "text-dark-2" : textStyle
                } `}
              >
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="account-form_input no-focus"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {[
          "surname",
          "firstname",
          "username",
          "home_address",
          "office_address",
          "mother_middle_name",
          "next_of_kin",
          "phone",
          "education",
        ].map((child) => (
          <FormField
            control={form.control}
            name={child}
            key={child}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-3 w-full">
                <FormLabel
                  className={`text-base-semibold ${
                    textStyle === "" ? "text-dark-2" : textStyle
                  } `}
                >
                  {fieldMappings[child]}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="account-form_input no-focus"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel
                className={`text-base-semibold ${
                  textStyle === "" ? "text-dark-2" : textStyle
                } `}
              >
                Gender
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="account-form_input no-focus">
                    <SelectValue
                      placeholder="Select a gender"
                      className="text-dark-2"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="None">None</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel
                className={`text-base-semibold ${
                  textStyle === "" ? "text-dark-2" : textStyle
                } `}
              >
                Date of Birth
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="date"
                  className="account-form_input no-focus"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-[#43a5f6]">
          {btnTitle}
          {loading && (
            <div className="text-right">
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Loading...
            </div>
          )}
        </Button>
      </form>
    </Form>
  );
};
export default AccountProfile;
