import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import { parseLocalStorageItem } from "@/lib/utils";
import ValidatePayment from "@/components/forms/ValidatePayment";

async function Page() {
  const user = await currentUser();
  if (!user) return null;
  const userDatum = await fetchUser(user.id);
  const userInfo = userDatum?.payload;
  const userStatus = userDatum?.status;
  if (!userInfo.onboarded) redirect("/onboarding");
  const stringUserID = userInfo.id.toString();
  
  const userData = {
    userID: stringUserID,
    username: userStatus ? userInfo?.username : user.username,
    email: userInfo
      ? userInfo?.email
      : user.emailAddresses[0].emailAddress ?? "",
  };
  return (
    <>
      <Topbar userInfo={userInfo} />
      <main className="flex flex-row bg-[#000924]">
        <LeftSidebar />
        <section className="main-container relative sm:bg-[rgba(31, 38, 135, 0.37)]">
          <div className="w-full max-w-lg">
            <div className="glassmorphism p-5 rounded-[20px] relative">
              <h3 className="head-text mb-3 text-center">
                Validate Your Payments
              </h3>
              <div className="p-5">
                <ValidatePayment
                  user={userData}
                  btnTitle="Finish"
                  textStyle="text-light-1"
                />
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
