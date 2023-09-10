import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { AddUnit } from "@/constants";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
        <section className="main-container relative sm:bg-[rgba(31, 38, 135, 0.37)]">
          <div className="max-w-md">
            <div className="p-5 glassmorphism rounded-[20px] mb-8">
              <h4 className="head-text uppercase mb-3">Note the following</h4>
              {AddUnit.map((text) => (
                <p className="text-white mb-3 text-[20px]" key={text.id}>
                  {text.title}
                </p>
              ))}
            </div>
            <div className="flex items-end justify-end">
              {/* <Button
                type="submit"
                className="bg-[#150B62] uppercase p-5 transition hover:bg-white hover:text-[#150B62]"
              >
                Invest Here 
              </Button>*/}
              <Dialog>
                <DialogTrigger className="bg-[#150B62] uppercase text-light-1 transition hover:bg-white hover:text-[#150B62] p-[10px] rounded-lg">Invest Here</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="uppercase text-center">Unit of Investment</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogHeader>
                    <DialogTitle className="uppercase text-center">Amount to pay</DialogTitle>
                    <DialogDescription>
                      Test
                    </DialogDescription>
                  </DialogHeader>
                  <Button
                type="submit"
                className="bg-[#150B62] uppercase transition hover:bg-white hover:text-[#150B62]"
              >
                Invest Here 
              </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>
      </main>
      <Bottombar />
    </>
  );
}

export default Page;
