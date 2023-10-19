import { SignUp, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";

async function Page() {
  const user = await currentUser();
  if (!user) {
    return (
      <div className="formBg flex w-full justify-center items-center min-h-screen">
        <SignUp />
      </div>
    );
  } else {
    const response = await fetchUser(user.id);
    const userInfo = response?.payload;
    if (userInfo.onboarded) redirect("/dashboard");
  }
}
export default Page;
