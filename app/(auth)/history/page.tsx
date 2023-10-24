import { fetchUser, fetchInvestments } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import Historybar from "@/components/shared/Historybar";

async function Page() {
  const user = await currentUser();
  if (!user) return null;
  const userDatum = await fetchUser(user.id);
  const userInfo = userDatum?.payload;
  const investments = await fetchInvestments(userInfo.email);
  console.log(investments);
  if (!userInfo.onboarded) redirect("/onboarding");
  return (
    <>
      <Topbar userInfo={userInfo} />
      <main className="bg-main">
        <LeftSidebar />
        <section className="main-container relative">
        <div className="max-w-lg">
            <div className="p-5 glassmorphism rounded-[20px] mb-8">
            <h4 className="head-text uppercase mb-3">History</h4>
             <div>
             <Historybar user={userInfo} textStyle="uppercase" investments={investments} />
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
