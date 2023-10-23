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
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import axios from 'axios';
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
  
  const onSubmit = (values: z.infer<typeof WithdrawValidation>) => {
    axios.post("https://cap-partners-investment.cyclic.app/api/v0/investors/withdraw", {
      userID: values.userID,
      email: values.email,
      amount: values.amount,
      narration: values.narration,
    })
  .then(response => {
    const res = response.data;
    if (res.status) {
      toast({
        description: "Withdrawal is successful.",
        action: <ToastAction altText="Ok">Ok</ToastAction>,
      });
      router.push("/dashboard");
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: res.payload,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error('Request error:', error);
  });
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
