import Bottombar from "@/components/shared/Bottombar";
import DaysCal from "@/components/shared/DaysCal";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page() {
  const user = await currentUser();
  if (!user) return null;
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  return (
    <>
      <Topbar userInfo={userInfo} />
      <main className="flex flex-row sm:bg-[#000924]">
        <LeftSidebar />
        <section className="main-container relative">
          <div className="max-w-md">
            <div className="p-5 glassmorphism rounded-[20px] mb-8">
               <DaysCal/>
            </div>
          </div>
        </section>
      </main>
      <Bottombar />
    </>
  );
}

export default Page;