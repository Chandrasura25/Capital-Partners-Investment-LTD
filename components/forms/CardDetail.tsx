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
import { CardValidation } from "@/lib/validations/bank";
import * as z from "zod";
import { useRouter, usePathname } from "next/navigation";
import { addBankDetail } from "@/lib/actions/user.actions";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
// import { useState, useEffect } from "react";

interface Props {
  user: {
    userID: number;
    fullname: string;
    email: string;
    phone_number: string;
  };
  textStyle?: string;
  btnTitle?: string;
}
const CardDetail = ({ user, textStyle, btnTitle }: Props) => {
  const { toast } = useToast();
  const pathname = usePathname();
  const router = useRouter();
//   const [unitDetails, setUnitDetails] = useState<{ amount?: string }>({});

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const unitDetailsStr = localStorage.getItem("unitDetails") || "";
//       setUnitDetails(JSON.parse(unitDetailsStr));
//     }
//   }, []);
//   const Amount = unitDetails?.amount || ""; 
//   const stringAmount = Amount.toString();
  const form = useForm({
    resolver: zodResolver(CardValidation),
    defaultValues: {
      userID: user?.userID || 0,
      email: user?.email || "",
      fullname: user?.fullname || "",
      phone_number: user?.phone_number || "",
      amount: "50000"|| "",
      card_number: "",
      cvv: "",
      pin: "",
      expiry_month: "",
      expiry_year: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof CardValidation>) => {
    console.log(values);
    //    const res = await addBankDetail({
    //       userID: values.userID,
    //       email: values.email,
    //       username: values.username,
    //       accountName: values.accountName,
    //       accountNumber: values.accountNumber,
    //       bankName: values.bankName,
    //     })
    //     if(res.status){
    //       toast({
    //         description: "Bank Details is saved successfully.",
    //         action: <ToastAction altText="Ok">Ok</ToastAction>,
    //       })
    //       router.push("/dashboard");
    //     }else{
    //       toast({
    //         variant: "destructive",
    //         title: "Uh oh! Something went wrong.",
    //         description: "There was a problem with your request.",
    //         action: <ToastAction altText="Try again">Try again</ToastAction>,
    //       })
    //     }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10 p-3"
      >
        <FormField
          control={form.control}
          name="card_number"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel
                className={`text-base-semibold ${
                  textStyle === "" ? "text-dark-2" : textStyle
                } `}
              >
                Card Number
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="string"
                  className="account-form_input no-focus"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cvv"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel
                className={`text-base-semibold ${
                  textStyle === "" ? "text-dark-2" : textStyle
                } `}
              >
                CVV
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="string"
                  className="account-form_input no-focus"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel
                className={`text-base-semibold ${
                  textStyle === "" ? "text-dark-2" : textStyle
                } `}
              >
                Pin
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
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="expiry_month"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-3 w-full">
                <FormLabel
                  className={`text-base-semibold ${
                    textStyle === "" ? "text-dark-2" : textStyle
                  } `}
                >
                  Expiry Month
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
          <FormField
            control={form.control}
            name="expiry_year"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-3 w-full">
                <FormLabel
                  className={`text-base-semibold ${
                    textStyle === "" ? "text-dark-2" : textStyle
                  } `}
                >
                  Expiry Year
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
        </div>
        <Button
          type="submit"
          className="bg-[#150B62] uppercase transition hover:bg-white hover:text-[#150B62]"
        >
          {btnTitle}
        </Button>
      </form>
    </Form>
  );
};

export default CardDetail;
