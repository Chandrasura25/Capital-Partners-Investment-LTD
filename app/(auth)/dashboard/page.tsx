
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
  if (!userInfo?.payload.onboarded) redirect("/onboarding");

  return (
    <>
      <Topbar userInfo={userInfo} />
      <main className="flex flex-row bg-[#000924]">
        <LeftSidebar />
        <section className="main-container relative bg-[rgba(31, 38, 135, 0.37)]">
          <div className="w-full max-w-4xl">
            <div className="glassmorphism p-5 rounded-[20px] relative flex justify-between flex-wrap gap-4 md:gap-6">
              {dashboardMenu.map((link) =>  (
                  <Link
                    href={link.route}
                    key={link.label}
                    className="rounded-[20px] p-2 w-[250px] h-[200px] flex justify-center items-center flex-col gap-3 shadow-md hover:animate-in transition-all hover:scale-105"
                    style={{background:link.clr}}
                  >
                    <Image
                      src={link.imgURL}
                      alt={link.label}
                      width={80}
                      height={80}
                      className={`invert ${link.route === "/growth" && "invert-0"}` }
                    />
                    <p className=" mt-4 text-light-1 text-2xl md:text-5xl">{link.label}</p>
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
