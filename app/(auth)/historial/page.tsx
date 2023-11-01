import { fetchUser, WithdrawalHistory } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import listStyles from "@/styles/List.module.css";
import historyStyles from "@/styles/Historial.module.css";
import Historybar from "@/components/shared/Historybar";

async function Page() {
  const user = await currentUser();
  if (!user) return null;
  const userDatum = await fetchUser(user.id);
  const userInfo = userDatum?.payload;
  const response = await WithdrawalHistory(userInfo.id);
  const histories = response.payload;
  if (!userInfo.onboarded) redirect("/onboarding");
  return (
    <>
      <Topbar userInfo={userInfo} />
      <main className="bg-main">
        <LeftSidebar />
        <section className="main-container relative">
          <div className="max-w-lg overflow-scroll h-[70vh] custom-scrollbar">
            <div className={`${listStyles.box} bg-white`}>
              <h4 className="head-text uppercase mb-3">Withdrawal History</h4>
              <div className={historyStyles.container}>
                {histories.length > 0 ? (
                  histories.map((history: any) => (
                    <Historybar
                      key={history.id}
                      id={history.id}
                      bank_name={history.bank_name}
                      amount={history.amount}
                      withdrawal_id={history.withdrawal_id}
                      bank_code={history.bank_code}
                      reference={history.reference}
                      createdAt={history.createdAt}
                    />
                  ))
                ) : (
                  <p className="!text-base-regular text-white">
                    No Withdrawal Yet
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
