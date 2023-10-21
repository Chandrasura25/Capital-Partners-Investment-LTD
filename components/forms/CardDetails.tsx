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
const CardDetails = ({ user, textStyle, btnTitle }: Props) => {
  const { toast } = useToast();
  const pathname = usePathname();
  const router = useRouter();
  const unitDetailsStr = localStorage.getItem("unitDetails");
  const unitDetails = unitDetailsStr ? JSON.parse(unitDetailsStr) : null;
  const form = useForm({
    resolver: zodResolver(CardValidation),
    defaultValues: {
      userID: user?.userID || 0,
      email: user?.email || "",
      fullname: user?.fullname || "",
      phone_number: user?.phone_number || "",
      amount: unitDetails?.amount || "",
      card_number: "",
      expiry_year: "",
      expiry_month: "",
      cvv: "",
      pin: "",
    },
  });
  const fieldMappings = {
    card_number: "Card Number",
    expiry_month: "Expiry Month",
    expiry_year: "Expiry Year",
    cvv: "CVV",
    pin: "PIN",
  };
  const onSubmit = async (values: z.infer<typeof CardValidation>) => {
    const res = await purchaseInvestment({
      userID: values.userID,
      email: values.email,
      fullname: values.fullname,
      phone_number: values.phone_number,
      amount: values.amount,
      card_number: values.card_number,
      expiry_year: values.expiry_year,
      expiry_month: values.expiry_month,
      cvv: values.cvv,
      pin: values.pin,
    });
        if (res.status) {
          toast({
              description: "Card Details is saved successfully.",
              action: <ToastAction altText="Ok">Ok</ToastAction>,
          });
          localStorage.removeItem("unitDetails");
          localStorage.setItem("investmentDetails", JSON.stringify(res.payload));
          router.push("/validate-payment");
        } else {
          toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
    }
    console.log(res);
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-start gap-10"
        >
          {["card_number", "expiry_month", "expiry_year", "cvv", "pin"].map(
            (child) => (
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
            )
          )}
          <Button type="submit" className="bg-[#43a5f6]">
            {btnTitle}
          </Button>
        </form>
      </Form>
    </>
  );
};
export default CardDetails;
