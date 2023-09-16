import Bottombar from "@/components/shared/Bottombar";
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
  // const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <>
      <Topbar userInfo={userInfo} />
      <main className="flex flex-row sm:bg-[#000924]">
        <LeftSidebar />
        <section className="main-container relative">
          <div className="max-w-md">
            <div className="p-5 glassmorphism rounded-[20px] mb-8">
               <Calendar  
                 mode="single"
                 selected={date}
                 onSelect={setDate}
                 className="rounded-md border shadow"
               />
            </div>
          </div>
        </section>
      </main>
      <Bottombar />
    </>
  );
}

export default Page;