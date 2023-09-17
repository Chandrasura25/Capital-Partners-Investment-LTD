"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
const today = new Date();
const formattedDate = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate()
);
const WeeksCal = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: formattedDate,
    to: addDays(formattedDate, 500),
  });
  const filterDays = (dates: Date[]): Date[] => {
    const startDate = formattedDate;
    const endDate = addDays(formattedDate, 500);
    return dates.filter((date) => {
      return date >= startDate && date <= endDate;
    });
  };
  console.log(filterDays);
  return (
    <div className={cn("grid gap-2", className)}>
      <div className="">
        <div className="flex justify-center items-center">
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </div>
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          numberOfMonths={2}
        />
      </div>
    </div>
  );
};
export default WeeksCal;
