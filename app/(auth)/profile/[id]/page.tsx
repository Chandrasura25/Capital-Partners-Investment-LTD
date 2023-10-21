import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import AccountProfile from "@/components/forms/AccountProfile";

async function Page({ params }: { params: { id: string } }) {
  const user = await currentUser();
  if (!user) return null;
  const useDatum = await fetchUser(params.id);
  const userInfo = useDatum?.payload;
  const userStatus = useDatum?.status;

  if (!userInfo.onboarded) redirect("/onboarding");

  const userData = {
    id: user.id,
    username: userStatus ? userInfo?.username : user.username,
    surname: userStatus ? userInfo?.surname : user.lastName ?? "",
    firstname: userStatus ? userInfo?.firstname : user.firstName ?? "",
    email: userStatus ? userInfo?.email : user.emailAddresses[0].emailAddress ?? "",
    dob: userStatus ? userInfo?.dob : user.birthday ?? "",
    phone: userStatus ? userInfo?.phone : "",
    image: userStatus ? userInfo?.imageURL : user.imageUrl,
    home_address: userStatus ? userInfo?.home_address : "",
    office_address: userStatus ? userInfo?.office_address : "",
    gender: userStatus ? userInfo?.gender : user.gender ?? "",
    next_of_kin: userStatus ? userInfo?.next_of_kin : "",
    education: userStatus ? userInfo?.education : "",
    mother_middle_name: userStatus ? userInfo?.mother_middle_name : "",
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
