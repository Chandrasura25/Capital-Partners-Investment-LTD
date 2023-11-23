"use client";
import { parseLocalStorageItem } from "@/lib/utils";
import { redirect } from "next/navigation";
function Storage(){
  const adminDetails = parseLocalStorageItem("admin");
  console.log(adminDetails)
  // if (!adminDetails?.status) redirect("/");
   return <></>
}
export default Storage;