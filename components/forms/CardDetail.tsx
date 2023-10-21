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
import { purchaseInvestment } from "@/lib/actions/user.actions";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { parseLocalStorageItem } from "@/lib/utils";

interface Props {
  user: {
    userID: string;
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

  const unitDetails = parseLocalStorageItem("unitDetails");
  const Amount = unitDetails?.amount;
  const stringAmount = Amount.toString();
  const form = useForm({
    resolver: zodResolver(CardValidation),
    defaultValues: {
      userID: user?.userID || "",
      email: user?.email || "",
      fullname: user?.fullname || "",
      phone_number: user?.phone_number || "",
      amount: stringAmount || "",
      card_number: "",
      cvv: "",
      pin: "",
      expiry_month: "",
      expiry_year: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof CardValidation>) => {
    const res = await purchaseInvestment({
      userID: values.userID,
      email: values.email,
      fullname: values.fullname,
      phone_number: values.phone_number,
      amount: values.amount,
      card_number: values.card_number,
      cvv: values.cvv,
      pin: values.pin,
      expiry_month: values.expiry_month,
      expiry_year: values.expiry_year,
    });
    console.log(res);

    if (res.status) {
      toast({
        description: "Card Details is saved successfully.",
        action: <ToastAction altText="Ok">Ok</ToastAction>,
      });
      router.push("/dashboard");
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
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