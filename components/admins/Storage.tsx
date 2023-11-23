"use client";
import { parseLocalStorageItem } from "@/lib/utils";
function Storage(){
  const adminDetails = parseLocalStorageItem("admin");
  console.log(adminDetails);
   return <></>
}
export default Storage;