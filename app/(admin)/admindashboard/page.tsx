import { parseLocalStorageItem } from "@/lib/utils";
async function Page() {
  const adminDetails = parseLocalStorageItem("admin");
  console.log(adminDetails);
  return (
    <>
      <main className="bg-main">
        <section className="main-container relative"></section>
      </main>
    </>
  );
}
export default Page;
