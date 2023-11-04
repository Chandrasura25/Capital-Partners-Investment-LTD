import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";
import AccountProfile from "@/components/forms/AccountProfile";

async function Page() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings
  const useDatum = await fetchUser(user.id);
  const userInfo = useDatum?.payload;
  const userStatus = useDatum?.status;
  if (userInfo?.onboarded) redirect("/dashboard");

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
