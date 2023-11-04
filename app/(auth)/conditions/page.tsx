import Link from "next/link";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { Terms, TermsText, Term } from "@/constants";

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
          <div className="w-full max-w-4xl h-[80vh] overflow-scroll custom-scrollbar">
            <div className="glassmorphism p-5 relative flex justify-center items-center flex-col gap-2">
              <h4 className="head-text uppercase">
                Investment Terms and Conditions
              </h4>
              <div className="text-light-1 p-4 text-sm">
                <p className="mb-2">
                  This Investment Terms and Conditions ("Agreement") is entered
                  into between Capital Partners Investment Ltd (referred to as
                  "the Company") which is duly incorporated under the Companies
                  and Allied Matters Act, 2020 with RC NO……… and You (referred
                  to as "the Investor”, “User”), who have equally agreed to
                  subscribe to this platform, for the purpose of outlining the
                  terms and conditions governing the investment portfolio
                  offered by the Company. <br />
                  <br /> This agreement sets forth the general terms and
                  conditions of your use of the https://www.cap.africa website
                  and any of its products or services (collectively, “website”,
                  “mobile application or app”, “services”). These terms and
                  conditions constitute a legal binding agreement for both
                  parties. You agree that by accessing the site or the mobile
                  application, you have agreed to have read, understand and
                  bound by all of these terms and conditions. If you do not
                  agree with all these terms and conditions, then you are
                  specifically prohibited from using this site or this mobile
                  application. <br />
                  <br /> Supplemental terms and conditions or documents that may
                  be posted on the site from time to time are hereby expressly
                  incorporated herein by reference We reserve the right, in our
                  sole discretion, to make changes and modifications to these
                  terms and conditions at any time.
                  <br />
                  <br /> We will place a general notice on the website or mobile
                  application regarding any changes by updating the “last
                  updated” date of these Terms and Conditions, and you waive any
                  right to receive specific notice of each such change. It is
                  your responsibility to periodically review these terms and
                  conditions to stay informed of updates. You will be subject
                  to, and will be deemed to have been made aware of and to have
                  accepted the changes in any revised terms and conditions by
                  your continued use of the site or mobile app after such
                  revised terms and conditions are posted.
                  <br />
                  <br />
                  The information provided on this site or mobile application is
                  not intended for distribution to use
                </p>
                {Terms.map((term) => (
                  <div key={term.id}>
                    <p className="font-bold">{term.title}</p>
                    <div className="p-2">
                      {term.subtext.map((text) => (
                        <li key={text.index} className="list-latin">
                          {text.text}
                        </li>
                      ))}
                    </div>
                  </div>
                ))}
                {TermsText.map((text) => (
                  <div key={text.id}>
                    <p className="font-bold">{text.title}</p>
                    <div className="py-2">
                      <p>{text.subtitle}</p>
                    </div>
                  </div>
                ))}
                {Term.map((term) => (
                  <div key={term.id}>
                    <p className="font-bold">{term.title}</p>
                    {term.subtitle != "" ? <p>{term.subtitle}</p> : null}
                    <div className="p-2">
                      {term.subtext.map((text) => (
                        <li
                          key={text.index}
                          className={
                            text.index == 2 ? "list-latin" : "list-decimal"
                          }
                        >
                          {text.text}
                        </li>
                      ))}
                    </div>
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
