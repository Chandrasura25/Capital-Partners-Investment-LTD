import Link from "next/link";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

async function Page() {
  const user = await currentUser();
  if (!user) return null;
  const useDatum = await fetchUser(user.id);
  const userInfo = useDatum?.payload;
  if (!userInfo.onboarded) redirect("/onboarding");
  return (
    <>
      <Topbar userInfo={userInfo} />
      <main className="bg-main">
        <LeftSidebar />
        <section className="main-container relative">
          <div className="w-full max-w-4xl">
            <div className="glassmorphism p-5 rounded-[20px] relative flex justify-between flex-wrap gap-4 md:gap-6">
              
            </div>
          </div>
        </section>
      </main>
      <Bottombar />
    </>
  );
}

export default Page;
