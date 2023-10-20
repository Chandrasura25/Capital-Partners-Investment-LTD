import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import AccountProfile from "@/components/forms/AccountProfile";

async function Page({ params }: { params: { id: string } }) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  const userData = {
    id: user.id,
    username: userInfo ? userInfo?.username : user.username,
    surname: userInfo ? userInfo?.surname : user.lastName ?? "",
    firstname: userInfo ? userInfo?.firstname : user.firstName ?? "",
    email: userInfo ? userInfo?.email : user.emailAddresses[0].emailAddress ?? "",
    dob: userInfo ? userInfo?.dob : user.birthday ?? "",
    phone: userInfo ? userInfo?.phone : "",
    image: userInfo ? userInfo?.imageURL : user.imageUrl,
    home_address: userInfo ? userInfo?.home_address : "",
    office_address: userInfo ? userInfo?.office_address : "",
    gender: userInfo ? userInfo?.gender : user.gender ?? "",
    next_of_kin: userInfo ? userInfo?.next_of_kin : "",
    education: userInfo ? userInfo?.education : "",
    mother_middle_name: userInfo ? userInfo?.mother_middle_name : "",
  };
  return (
    <>
      <Topbar userInfo={userInfo} />
      <main className="flex flex-row bg-[#000924]">
        <LeftSidebar />
        <section className="main-container relative sm:bg-[rgba(31, 38, 135, 0.37)]">
          <div className="w-full max-w-3xl">
            <div className="bg-[#150B62] p-5 rounded-[20px] relative">
              <h3 className="head-text mb-3 text-center">Review Your Profile</h3>
              <div className="p-4 flex justify-center">
                <AccountProfile user={userData} btnTitle="Save" textStyle="text-light-1" />
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
