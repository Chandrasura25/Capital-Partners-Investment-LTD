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
    username: userInfo ? userInfo?.username : user.username,
    surname: userInfo ? userInfo?.surname : user.lastName ?? "",
    firstname: userInfo ? userInfo?.firstname : user.firstName ?? "",
    email: userInfo ? userInfo?.email : user.emailAddresses[0].emailAddress ?? "",
    dob: userInfo ? userInfo?.dob : user.birthday ?? "",
    phone: userInfo ? userInfo?.phone : "",
    imageURL: userInfo ? userInfo?.imageURL : user.imageUrl,
    home_address: userInfo ? userInfo?.home_address : "",
    office_address: userInfo ? userInfo?.office_address : "",
    gender: userInfo ? userInfo?.gender : user.gender ?? "",
    next_of_kin: userInfo ? userInfo?.next_of_kin : "",
    education: userInfo ? userInfo?.education : "",
    mother_middle_name: userInfo ? userInfo?.mother_middle_name : "",
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
