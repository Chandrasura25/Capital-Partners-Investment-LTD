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
            <div className="glassmorphism p-5 rounded-[20px] relative flex justify-center items-center flex-col gap-4">
              <h4 className="head-text uppercase mb-3">Privacy Policy</h4>
              <div className="p-4 text-light-1">
                <h4 className="">
                This Privacy Policy describes how Capital Partners Investment Limited ("Capital Partners,""we,""us," or "our") collects, uses, stores, and protects the personal information of individuals ("you" or "users") who visit our website, engage with our services, or interact with us in any other manner. We are committed to protecting your privacy and complying with applicable data protection laws. By accessing our website or using our services, you agree to the terms and conditions outlined in this Privacy Policy.
                </h4>
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
