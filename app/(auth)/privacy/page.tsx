import Link from "next/link";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { PrivacyText } from "@/constants";

async function Page() {
  const user = await currentUser();
  if (!user) return null;
  const useDatum = await fetchUser(user.id);
  const userInfo = useDatum?.payload;
  if (!userInfo.onboarded) redirect("/onboarding");
  return (
    <>
      <Topbar userInfo={userInfo} />
      <main className="bg-main">
        <LeftSidebar />
        <section className="main-container relative">
          <div className="w-full max-w-4xl">
            <div className="glassmorphism p-5 rounded-[20px] relative flex justify-center items-center flex-col gap-4 h-screen overflow-y-scroll custom-scrollbar">
              <h4 className="head-text uppercase">Privacy Policy</h4>
              <div className="p-4 text-light-1">
                <h4 className="mb-3">
                  This Privacy Policy describes how Capital Partners Investment
                  Limited ("Capital Partners","we","us" or "our") collects,
                  uses, stores, and protects the personal information of
                  individuals ("you" or "users") who visit our website, engage
                  with our services, or interact with us in any other manner. We
                  are committed to protecting your privacy and complying with
                  applicable data protection laws. By accessing our website or
                  using our services, you agree to the terms and conditions
                  outlined in this Privacy Policy.
                </h4>
                {PrivacyText.map((text) => (
                  <div key={text.index}>
                    <p className="font-bold mb-1">
                      {text.index}. <span>{text.title}</span>
                    </p>
                    {text.subdetails.map((details) => (
                      <div key={details.id}>
                        <p className="font-bold">
                          {details.id}. <span>{details.text}</span>
                        </p>
                        {details.subtext != "" ? (
                          <p>{details.subtext}</p>
                        ) : null}
                        {details.sub?.map((list) => (
                          <div key={list.i}>
                            <p className="mb-1">
                              -<span>{list.title}</span>
                            </p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
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
