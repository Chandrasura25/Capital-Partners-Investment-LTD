
import Topbar from "@/components/admins/Topbar";
import Storage from "@/components/admins/Storage";
import Bottombar from "@/components/admins/Bottombar";
async function Page() {
  return (
    <>
    <Storage />
     <Topbar />
      <main className="bg-main">
        <section className="main-container relative"></section>
      </main>
      <Bottombar/>
    </>
  );
}
export default Page;
