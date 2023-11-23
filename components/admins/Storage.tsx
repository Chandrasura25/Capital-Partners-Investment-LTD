"use client";
import { parseLocalStorageItem } from "@/lib/utils";
function Storage(){
  const adminDetails = parseLocalStorageItem("admin");
  if (!adminDetails?.status) redirect("/");
   return <></>
}
export default Storage;