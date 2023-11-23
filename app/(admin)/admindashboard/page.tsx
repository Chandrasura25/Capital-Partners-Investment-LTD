import { parseLocalStorageItem } from "@/lib/utils";
import Topbar from "@/components/admins/Topbar";
import Bottombar from "@/components/admins/Bottombar";
async function Page() {
  const adminDetails = parseLocalStorageItem("admin");
  console.log(adminDetails);
  return (
    <>
     <Topbar />
      <main className="bg-main">
        <section className="main-container relative"></section>
      </main>
      <Bottombar/>
    </>
  );
}
export default Page;
