import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import BankDetails from "@/components/forms/BankDetails";
async function Page() {
  const user = await currentUser();
  if (!user) return null;
  const userDatum = await fetchUser(user.id);
  const userInfo = userDatum?.payload;
  if (!userInfo.onboarded) redirect("/onboarding");
  
  return (
    <>
      <Topbar userInfo={userInfo} />
      <main className="flex flex-row sm:bg-[#000924]">
        <LeftSidebar />
        <section className="main-container relative">
        <div className="max-w-md">
            <div className="p-5 glassmorphism rounded-[20px] mb-8">
            <h4 className="head-text uppercase mb-3">Add Your Bank Details</h4>
             <div>
             <BankDetails user={userInfo} textStyle="uppercase" />
             </div>
            </div>
        </div>
        </section>
      </main>
      <Bottombar />
    </>
  );
}
export default Page;
