"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
    objectId: string;
    username: string;
    firstName: string;
    surname: string;
    homeAddress: string;
    officeAddress: string;
    email: string;
    date_of_birth: string;
    gender: string;
    mobile_number: string;
    next_of_kin: string;
    level_of_education: string;
    mother_middle_name: string;
    image: string;
  };
  btnTitle: string;
}
const AccountProfile = ({ user, btnTitle }: Props) => {
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("media");
  const pathname = usePathname();
  const router = useRouter();

  const fieldMappings = {
    surname: 'Surname',
    firstName: 'First Name',
    username:"Username",
    gender:"Gender",
    homeAddress: "Home Address",
    officeAddress: "Office Address",
    mother_middle_name:"Mother Middle Name",
    next_of_kin: 'Next of Kin', 
    mobile_number:"Mobile Number",
    level_of_education:"Level of Education"
  };

  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: user?.image || "",
      surname: user?.surname || "",
      username: user?.username || "",
      firstName: user?.firstName || "",
      email: user?.email || "",
      homeAddress: user?.homeAddress || "",
      officeAddress: user?.officeAddress || "",
      date_of_birth: user?.date_of_birth || "",
      gender: user?.gender || "",
      mother_middle_name: user?.mother_middle_name || "",
      next_of_kin: user?.next_of_kin || "",
      level_of_education: user?.level_of_education || "",
      mobile_number: user?.mobile_number || "",
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
    console.log(values);
    const blob = values.profile_photo;
    const hasImageChanged = isBase64Image(blob);
    if (hasImageChanged) {
      const imgRes = await startUpload(files);
      if (imgRes && imgRes[0].fileUrl) {
        values.profile_photo = imgRes[0].fileUrl;
      }
    }
    // await updateUser({
    //   username: values.username,
    //   name: values.name,
    //   name: values.name,
    //   bio: values.bio,
    //   image: values.profile_photo,
    //   userId: user.id,
    //   path: pathname,
    // });
    if (pathname === "/profile/edit") {
      router.back();
    } else {
      router.push("/");
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
              <FormLabel className="text-base-semibold text-dark-2">
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
        {["surname", "firstName","username","gender","homeAddress","officeAddress","mother_middle_name","next_of_kin","mobile_number","level_of_education"].map((child) => (
          <FormField
            control={form.control}
            name={child}
            key={child}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-3 w-full">
                <FormLabel className="text-base-semibold text-dark-2">
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
          name="date_of_birth"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-dark-2">
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
        <Button type="submit" className="bg-blue">
          Submit
        </Button>
      </form>
    </Form>
  );
};
export default AccountProfile;
