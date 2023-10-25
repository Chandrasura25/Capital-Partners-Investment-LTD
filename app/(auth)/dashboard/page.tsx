import Link from "next/link";
import Image from "next/image";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import { currentUser } from "@clerk/nextjs";
import { fetchUser, fetchInvestments } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { add500DaysToDate } from "@/lib/utils";

async function Page() {
  const user = await currentUser();
  if (!user) return null;
  const useDatum = await fetchUser(user.id);
  const userInfo = useDatum?.payload;
  const investments = await fetchInvestments(userInfo.email);
  const investment = investments?.payload[0];
  const get_date = add500DaysToDate(investment?.date);
  const day = get_date.day;
  const week = get_date.week;
  const month = get_date.month;

  if (!userInfo.onboarded) redirect("/onboarding");
  return (
    <>
      <Topbar userInfo={userInfo} />
      <main className="bg-main">
        <LeftSidebar />
        <section className="main-container relative">
          <div className="w-full max-w-4xl">
            <div className="glassmorphism p-5 rounded-[20px] relative flex justify-between flex-wrap gap-4 md:gap-6">
              <Link
                href="#"
                className="rounded-[20px] p-2 w-[250px] h-[200px] flex justify-center items-center flex-col gap-3 shadow-md hover:animate-in transition-all hover:scale-105"
                style={{ background: "#ff0f5b" }}
              >
                {/* <Image
                  src="/assets/alarm.svg"
                  alt="Days of Investment"
                  width={80}
                  height={80}
                  className="invert"
                /> */}
                <h3 className="text-white font-bold text-[2em]">{day} days</h3>
                <p className="mt-4 text-light-1 text-2xl md:text-5xl">
                  Days of Investment
                </p>
              </Link>
              <Link
                href="#"
                className="rounded-[20px] p-2 w-[250px] h-[200px] flex justify-center items-center flex-col gap-3 shadow-md hover:animate-in transition-all hover:scale-105"
                style={{ background: "#be01fe" }}
              >
                {/* <Image
                  src="/assets/hourglass.svg"
                  alt="Weeks of Investment"
                  width={80}
                  height={80}
                  className="invert"
                /> */}
                <h3 className="text-white font-bold text-text-[2em]">{week} Weeks</h3>
                <p className="mt-4 text-light-1 text-2xl md:text-5xl">
                  Weeks of Investment
                </p>
              </Link>
              <Link
                href="#"
                className="rounded-[20px] p-2 w-[250px] h-[200px] flex justify-center items-center flex-col gap-3 shadow-md hover:animate-in transition-all hover:scale-105"
                style={{ background: "#01b4ff" }}
              >
                {/* <Image
                  src="/assets/calendar-check.svg"
                  alt="Months of Investment"
                  width={80}
                  height={80}
                  className="invert"
                /> */}
                <h3 className="text-white font-bold text-[2em]">{month} Months</h3>
                <p className="mt-4 text-light-1 text-2xl md:text-5xl">
                  Months of Investment
                </p>
              </Link>
              <Link
                href="#"
                className="rounded-[20px] p-2 w-[250px] h-[200px] flex justify-center items-center flex-col gap-3 shadow-md hover:animate-in transition-all hover:scale-105"
                style={{ background: "#ff5b0f" }}
              >
                <Image
                  src="/assets/dollar-circle.svg"
                  alt="Number of Unit"
                  width={80}
                  height={80}
                  className="invert"
                />
                <p className="mt-4 text-light-1 text-2xl md:text-5xl">
                  Number of Unit
                </p>
              </Link>
              <Link
                href="/add-unit"
                className="rounded-[20px] p-2 w-[250px] h-[200px] flex justify-center items-center flex-col gap-3 shadow-md hover:animate-in transition-all hover:scale-105"
                style={{ background: "#cd31fe" }}
              >
                <Image
                  src="/assets/comments-dollar-solid.svg"
                  alt="Additional Unit"
                  width={80}
                  height={80}
                  className="invert"
                />
                <p className="mt-4 text-light-1 text-2xl md:text-5xl">
                  Additional Unit
                </p>
              </Link>
              <Link
                href="/growth"
                className="rounded-[20px] p-2 w-[250px] h-[200px] flex justify-center items-center flex-col gap-3 shadow-md hover:animate-in transition-all hover:scale-105"
                style={{ background: "#4500ff" }}
              >
                <Image
                  src="/assets/chart-646.svg"
                  alt="Additional Unit"
                  width={80}
                  height={80}
                />
                <p className="mt-4 text-light-1 text-2xl md:text-5xl">
                Investment Growth
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Bottombar />
    </>
  );
}

export default Page;
