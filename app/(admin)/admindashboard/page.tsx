
import Topbar from "@/components/admins/Topbar";
import Bottombar from "@/components/admins/Bottombar";
import LeftSidebar from "@/components/admins/LeftSidebar";
import Storage from "@/components/admins/Storage";
import { parseLocalStorageItem } from "@/lib/utils";
import { redirect } from "next/navigation";
async function Page() {
  // const adminDetails = parseLocalStorageItem("admin");
  // console.log(adminDetails)
  // if(!adminDetails?.email) redirect('/');
  return (
    <>
     <Storage/>
     <Topbar />
      <main className="bg-main">
      <LeftSidebar />
        <section className="main-container relative"></section>
      </main>
      <Bottombar/>
    </>
  );
}
export default Page;
