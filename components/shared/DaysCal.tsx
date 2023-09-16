"use client";
import {useState} from 'react'
import { Calendar } from "@/components/ui/calendar";

const DaysCal = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div>DaysCal</div>
  )
}

export default DaysCal