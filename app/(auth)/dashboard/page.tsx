
import Link from "next/link";
import Image from "next/image";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { dashboardMenu } from "@/constants";

async function Page() {
  const user = await currentUser();
  if (!user) return null;
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <>
      <Topbar userInfo={userInfo} />
      <main className="flex flex-row bg-[#000924]">
        <LeftSidebar />
        <section className="main-container relative bg-[rgba(31, 38, 135, 0.37)]">
          <div className="w-full max-w-4xl">
            <div className="glassmorphism p-5 rounded-[20px] relative flex flex-wrap gap-4 md:gap-6">
              {dashboardMenu.map((link) =>  (
                  <Link
                    href={link.route}
                    key={link.label}
                    className={`bg-[${link.clr}] rounded-[20px] p-2 w-[200px] shadow h-[200px]`}
                  >
                    <Image
                      src={link.imgURL}
                      alt={link.label}
                      width={40}
                      height={40}
                      className={`invert ${link.route === "/growth" && "invert-0"}` }
                    />
                    <p className="text-gray-700 text-[14px] md:text-[20px]">{link.label}</p>
                  </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Bottombar />
    </>
  );
}

export default Page;
