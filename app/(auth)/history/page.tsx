import { fetchUser, fetchInvestments } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import listStyles from "@/styles/List.module.css";

async function Page() {
  const user = await currentUser();
  if (!user) return null;
  const userDatum = await fetchUser(user.id);
  const userInfo = userDatum?.payload;
  const investment = await fetchInvestments(userInfo.email);
  const investments = investment.payload;
  if (!userInfo.onboarded) redirect("/onboarding");
  return (
    <>
      <Topbar userInfo={userInfo} />
      <main className="bg-main">
        <LeftSidebar />
        <section className="main-container relative">
          <div className="max-w-lg">
            <div className={listStyles.box}>
              <h4 className="head-text uppercase mb-3">History</h4>
              <div className="mt-10 flex flex-col gap-5">
                {investments.length > 0 ? (
                  investments.map((investment: any) => (
                    <div className="list" key={investment.id}>
                      <div className="imgBx">
                        <img src= "/assets/history.svg" alt="" />
                      </div>
                      <div className="content">
                        <h2 className="rank">
                          <small>unit</small>{Number(investment.amount) / 50000}
                        </h2>
                        <h4># {investment.amount}</h4>
                        <hr className="w-full"></hr>
                        <div className="flex items-center justify-between w-full">
                        <p>{investment.createdAt}</p>
                        <p>000</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="!text-base-regular text-light-3">
                    No Investment Yet
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Bottombar />
    </>
  );
}
export default Page;
