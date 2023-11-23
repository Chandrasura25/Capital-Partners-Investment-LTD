import Topbar from "@/components/admins/Topbar";
import Bottombar from "@/components/admins/Bottombar";
import LeftSidebar from "@/components/admins/LeftSidebar";
import RightSidebar from "@/components/admins/RightSidebar";
import { parseLocalStorageItem } from "@/lib/utils";
import { redirect } from "next/navigation";
async function Page() {
  const adminDetails = parseLocalStorageItem("admin");
  console.log(adminDetails)
  // if (!adminDetails) redirect("/");
  return (
    <>
      <Topbar />
      <main className="bg-main">
        <LeftSidebar />
        <section className="main-container">
          <div className="w-full max-w-4xl"></div>
        </section>
        <RightSidebar />
      </main>
      <Bottombar />
    </>
  );
}
export default Page;
