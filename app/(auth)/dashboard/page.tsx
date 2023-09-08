"use client";
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
            <div className="relative flex flex-wrap">
              {dashboardMenu.map((link) =>  (
                  <Link
                    href={link.route}
                    key={link.label}
                    className={`bg-white p-4 shadow-sm hover:bg-[${link.clr}] hover:text-light-1 w-[100px] h-[100px] `}
                  >
                    <Image
                      src={link.imgURL}
                      alt={link.label}
                      width={40}
                      height={40}
                      className=""
                    />
                    <p className="text-light-1 text-[20px]">{link.label}</p>
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
