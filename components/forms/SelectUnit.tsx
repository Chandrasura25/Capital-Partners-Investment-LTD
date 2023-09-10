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
import { UnitValidation } from "@/lib/validations/unit";
import * as z from "zod";
import { ChangeEvent, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    email: string;
  };
  textStyle?: string;
}
const SelectUnit = ({ user, textStyle }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(UnitValidation),
    defaultValues: {
      email: user?.email || "",
      username: user?.username || "",
      unit: 1,
      amount: 50000,
    },
  });
   const { setValue } = form;
  const onSubmit = async (values: z.infer<typeof UnitValidation>) => {
    console.log(values, values.amount);
  };
  const handleUnit = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: number) => void
  ) => {
    e.preventDefault();
    const newUnit = e.target.valueAsNumber;
    fieldChange(newUnit);
    setValue('amount', newUnit * 50000);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10 p-3"
      >
        <FormField
          control={form.control}
          name="unit"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel
                className={`text-base-semibold ${
                  textStyle === "" ? "text-dark-2" : textStyle
                } `}
              >
                Unit of Investment
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  className="account-form_input no-focus"
                  onChange={(e) => handleUnit(e, field.onChange)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                Amount to pay
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  className="account-form_input no-focus"
                  readOnly
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
          Pay Now
        </Button>
      </form>
    </Form>
  );
};

export default SelectUnit;
