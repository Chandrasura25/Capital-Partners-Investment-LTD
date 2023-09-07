import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";
import AccountProfile from "@/components/forms/AccountProfile";

async function Page() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings
  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/dashboard");

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
    <main className="formBg flex w-full justify-center items-center min-h-screen">
      <div className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
        <h1 className="head-text">Onboarding</h1>
        <p className="mt-3 text-base-regular text-gray-800">
          Complete your profile now, to use Capital Partners Investment LTD.
        </p>

        <section className="mt-6 bg-white p-10">
          <AccountProfile user={userData} btnTitle="Continue" />
        </section>
      </div>
    </main>
  );
}

export default Page;
