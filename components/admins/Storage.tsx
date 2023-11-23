"use client";
import { parseLocalStorageItem } from "@/lib/utils";
import { redirect } from "next/navigation";
function Storage(){
  const adminDetails = parseLocalStorageItem("admin");
  if (!adminDetails?.status) redirect("/");
   return <></>
}
export default Storage;