
import Topbar from "@/components/admins/Topbar";
import Bottombar from "@/components/admins/Bottombar";
import LeftSidebar from "@/components/admins/LeftSidebar";
import { parseLocalStorageItem } from "@/lib/utils";
import { redirect } from "next/navigation";
async function Page() {
  const adminDetails = parseLocalStorageItem("admin");
  if(!adminDetails.email) redirect('/');
  return (
    <>
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
