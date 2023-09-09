import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";

async function Page({ params }: { params: { id: string } }) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(params.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
    const userData = {
    id: user.id,
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : user.username,
    surname: userInfo ? userInfo?.surname : user.lastName ?? "",
    firstName: userInfo ? userInfo?.firstName : user.firstName ?? "",
    homeAddress: userInfo ? userInfo?.homeAddress : "",
    officeAddress: userInfo ? userInfo?.officeAddress : "",
    email: userInfo ? userInfo?.email : user.emailAddresses[0].emailAddress ?? "",
    date_of_birth: userInfo ? userInfo?.date_of_birth : user.birthday ?? "",
    gender: userInfo ? userInfo?.gender : user.gender ?? "",
    mobile_number: userInfo ? userInfo?.mobile_number : "",
    next_of_kin: userInfo ? userInfo?.next_of_kin : "",
    level_of_education: userInfo ? userInfo?.level_of_education : "",
    mother_middle_name: userInfo ? userInfo?.mother_middle_name : "",
    image: userInfo ? userInfo?.image : user.imageUrl,
  };
  return (
    <>
      <Topbar userInfo={userInfo} />
      <main className="flex flex-row bg-[#000924]">
        <LeftSidebar />
        <section className="main-container relative sm:bg-[rgba(31, 38, 135, 0.37)]">
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
