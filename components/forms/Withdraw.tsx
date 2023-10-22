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
import { WithdrawValidation } from "@/lib/validations/bank";
import * as z from "zod";
import { ChangeEvent } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { withdrawAmount } from "@/lib/actions/user.actions";
interface Props {
  user: {
    id: number;
    username: string;
    email: string;
  };
  textStyle?: string;
}

const Withdraw = ({ user, textStyle }: Props) => {
  const { toast } = useToast();
  const pathname = usePathname();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(WithdrawValidation),
    defaultValues: {
      userID: user?.id || 0,
      email: user?.email || "",
      amount: 0,
      narration: "",
    },
  });
  const { setValue } = form;
  const handleAmount = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: number) => void
  ) => {
    e.preventDefault();
    const newUnit = e.target.valueAsNumber;
    fieldChange(newUnit);
    setValue("amount", newUnit);
  };
  const onSubmit = async (values: z.infer<typeof WithdrawValidation>) => {
    const res = await withdrawAmount({
      userID: values.userID,
      email: values.email,
      amount: values.amount,
      narration: values.narration,
    });
    console.log(values, res);
    // if (res.status) {
    //   toast({
    //     description: "Withdrawal is successful.",
    //     action: <ToastAction altText="Ok">Ok</ToastAction>,
    //   });
    // } else {
    //   toast({
    //     variant: "destructive",
    //     title: "Uh oh! Something went wrong.",
    //     description: "There was a problem with your request.",
    //     action: <ToastAction altText="Try again">Try again</ToastAction>,
    //   });
    // }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10 p-3"
      >
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel
                className={`text-base-semibold ${
                  textStyle === "" ? "text-dark-2" : textStyle
                } `}
              >
                Amount
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  className="account-form_input no-focus"
                  onChange={(e) => handleAmount(e, field.onChange)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="narration"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel
                className={`text-base-semibold ${
                  textStyle === "" ? "text-dark-2" : textStyle
                } `}
              >
                Narration
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
          Continue
        </Button>
      </form>
    </Form>
  );
};

export default Withdraw;
