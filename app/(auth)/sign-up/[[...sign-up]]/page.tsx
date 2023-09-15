import { SignUp, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";

async function Page() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings
  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/dashboard");
  return (
    <div className="formBg flex w-full justify-center items-center min-h-screen"><SignUp /></div> 
  );
}
export default Page;