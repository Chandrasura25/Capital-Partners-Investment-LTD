import { SignIn, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";

async function Page() {
  const user = await currentUser();
  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/dashboard");
  if (!user) {
    return (
      <div className="formBg flex w-full justify-center items-center min-h-screen">
        <SignIn />
      </div>
    );
  }
}
export default Page;
