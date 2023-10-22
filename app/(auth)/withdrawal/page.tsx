import { fetchUser, fetchBankDetails } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import Withdraw from "@/components/forms/Withdraw";

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
        <section className="main-container relative bg-[rgba(31, 38, 135, 0.37)]">
          <div className="max-w-lg">
            <div className="p-5 glassmorphism rounded-[20px] mb-8">
              <h4 className="head-text uppercase mb-2 text-center">
                Withdrawal
              </h4>
              <p className="text-light-1 mb-3 text-center">
                You can withdraw your earnings to your bank account.
              </p>
              <div>
                <Withdraw user={userInfo} textStyle="text-light-1" />
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
