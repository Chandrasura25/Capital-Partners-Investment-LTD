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
import { PaymentValidation } from "@/lib/validations/bank";
import * as z from "zod";
import { useRouter, usePathname } from "next/navigation";
import { ValidatePurchase } from "@/lib/actions/user.actions";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { parseLocalStorageItem, getFormattedDate } from "@/lib/utils";

interface Props {
  user: {
    userID: string;
    username: string;
    email: string;
  };
  textStyle?: string;
  btnTitle?: string;
}
const ValidatePayment = ({ user, textStyle, btnTitle }: Props) => {
  const { toast } = useToast();
  const router = useRouter();
  const cardDetails = parseLocalStorageItem("cardDetails");
  const Amount = cardDetails?.amount;
  const stringAmount = Amount.toString();
  const formattedDate = getFormattedDate();
  const form = useForm({
    resolver: zodResolver(PaymentValidation),
    defaultValues: {
      userID: user?.userID || "",
      email: user?.email || "",
      username: user?.username || "",
      unitType: "type1" || "",
      amount: stringAmount || "",
      date: formattedDate || "",
      flw_ref: cardDetails?.flw_ref || "",
      otp: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof PaymentValidation>) => {
    const res = await ValidatePurchase({
      userData: {
        userID: values.userID,
        email: values.email,
        username: values.username,
      },
      unitType: values.unitType,
      amount: values.amount,
      date: values.date,
      otp: values.otp,
      flw_ref: values.flw_ref,
    });
    console.log(values);
    if (res.status) {
      toast({
        description: "Payment Validation is successful.",
        action: <ToastAction altText="Ok">Ok</ToastAction>,
      });
      localStorage.removeItem("cardDetails");
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
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-start gap-10 p-3"
        >
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-3 w-full">
                <FormLabel
                  className={`text-base-semibold ${
                    textStyle === "" ? "text-dark-2" : textStyle
                  } `}
                >
                  OTP
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
          <Button
            type="submit"
            className="bg-[#150B62] uppercase transition hover:bg-white hover:text-[#150B62]"
          >
            {btnTitle}
          </Button>
        </form>
      </Form>
    </>
  );
};
export default ValidatePayment;
