import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import CardDetails from "@/components/forms/CardDetails";

async function Page() {
  const user = await currentUser();
  if (!user) return null;
  const userDatum = await fetchUser(user.id);
  const userInfo = userDatum?.payload;
  if (!userInfo.onboarded) redirect("/onboarding");
  
  const userData = {
    userID: userInfo.id,
    fullname: userInfo.surname + " " + userInfo.firstname,
    email: userInfo
      ? userInfo?.email
      : user.emailAddresses[0].emailAddress ?? "",
    phone_number: userInfo.phone,
  };
  return (
    <>
      <Topbar userInfo={userInfo} />
      <main className="flex flex-row bg-[#000924]">
        <LeftSidebar />
        <section className="main-container relative sm:bg-[rgba(31, 38, 135, 0.37)]">
          <div className="w-full max-w-3xl">
            <div className="bg-[#150B62] p-5 rounded-[20px] relative">
              <h3 className="head-text mb-3 text-center">
                Review card Details
              </h3>
              <p className="text-light-1 text-center mb-5">
                Please fill your card details to continue
              </p>
              <div className="p-4 flex justify-center">
                <CardDetails user={userData} btnTitle="Continue" textStyle="text-light-1" />
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
