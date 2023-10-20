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
import { BankValidation } from "@/lib/validations/bank";
import * as z from "zod";
import { useRouter, usePathname } from "next/navigation";
import { addBankDetail } from "@/lib/actions/user.actions";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

interface Props {
  user: {
    id: number;
    username: string;
    email: string;
  };
  textStyle?: string;
}
const BankDetails = ({ user, textStyle }: Props) => {
   const { toast } = useToast()
  const pathname = usePathname();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(BankValidation),
    defaultValues: {
      userID: user?.id || 0,
      email: user?.email || "",
      username: user?.username || "",
      accountName: "",
      accountNumber: "",
      bankName: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof BankValidation>) => {
   const res = await addBankDetail({
      userID: values.userID,
      email: values.email,
      username: values.username,
      accountName: values.accountName,
      accountNumber: values.accountNumber,
      bankName: values.bankName,
    })
    if(res.status){
      toast({
        description: "Bank Details is saved successfully.",
      })
      router.push("/dashboard");
    }else{
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
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
          name="bankName"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel
                className={`text-base-semibold ${
                  textStyle === "" ? "text-dark-2" : textStyle
                } `}
              >
                Bank Name
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
          name="accountName"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel
                className={`text-base-semibold ${
                  textStyle === "" ? "text-dark-2" : textStyle
                } `}
              >
                Account Name
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
          name="accountNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel
                className={`text-base-semibold ${
                  textStyle === "" ? "text-dark-2" : textStyle
                } `}
              >
                Account Number
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
          className="bg-[#150B62] uppercase transition hover:bg-white hover:text-[#150B62]"
        >
          Add Details
        </Button>
      </form>
    </Form>
  );
};

export default BankDetails;
