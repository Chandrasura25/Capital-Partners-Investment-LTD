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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BroadcastValidation } from "@/lib/validations/admin";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import axios from "axios";
import styles from "@/styles/AdminLogin.module.css";
interface Props {
  textStyle?: string;
}

const SendBroadcast = ({ textStyle }: Props) => {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("media");
  const form = useForm({
    resolver: zodResolver(BroadcastValidation),
    defaultValues: {
      headings: "",
      greetings: "",
      message: "",
      image: "",
      imageDescription: "",
      sender: "",
      position: "",
      subject: "",
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
  const onSubmit = async (values: z.infer<typeof BroadcastValidation>) => {
    const blob = values.image;
    const hasImageChanged = isBase64Image(blob);
    if (hasImageChanged) {
      const imgRes = await startUpload(files);
      if (imgRes && imgRes[0].fileUrl) {
        values.image = imgRes[0].fileUrl;
      }
    }
    setLoading(true);
    axios
      .post(
        "https://cap-partners-investment.cyclic.app/api/v0/admin/adminapis/broadcast_newsletter",
        {
          headings: values.headings,
          greetings: values.greetings,
          message: values.message,
          image: values.image,
          imageDescription: values.imageDescription,
          sender: values.sender,
          position: values.position,
          subject: values.subject,
        }
      )
      .then((response) => {
        const res = response.data;
        setLoading(false);
        if (res.status) {
          toast({
            description: "Broadcast is successful.",
            action: <ToastAction altText="Ok">Ok</ToastAction>,
          });
          values.headings = "";
          values.greetings = "";
          values.message = "";
          values.image = "";
          values.imageDescription = "";
          values.sender = "";
          values.position = "";
          values.subject = "";
        } else {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: res.payload,
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Request error:", error);
      });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-8"
      >
        {[
          "headings",
          "greetings",
          "message",
          "sender",
          "position",
          "subject",
        ].map((child) => (
          <FormField
            control={form.control}
            key={child}
            name={child}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-3 w-full">
                <FormLabel
                  className={`text-base-semibold ${
                    textStyle === "" ? "text-dark-2" : textStyle
                  } `}
                >
                  {child}
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
          name="image"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="account-form_image-label1">
                <img
                  src={field.value ? field.value : "/assets/message.svg"}
                  alt="image"
                  loading="eager"
                  width={24}
                  height={24}
                  className="object-contain"
                />
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
          name="imageDescription"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel
                className={`text-base-semibold ${
                  textStyle === "" ? "text-dark-2" : textStyle
                } `}
              >
                Image Description
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
        <Button
          type="submit"
          className="bg-primary-500 uppercase transition hover:bg-white hover:text-primary-500 flex gap-4"
        >
          Broadcast
          {loading && (
            <div className="text-right">
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-5 h-5 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#150B62"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default SendBroadcast;
