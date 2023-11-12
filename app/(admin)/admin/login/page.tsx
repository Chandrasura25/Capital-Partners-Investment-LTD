
import AdminLogin from "@/components/forms/AdminLogin";
async function Page() {
  return (
    <>
      <main className="bg-main">
      <section className="main-container relative">
          <div className="w-full max-w-3xl">
            <div className="bg-[#150B62] p-5 rounded-[20px] relative">
              <h3 className="head-text mb-3 text-center">Admin Login</h3>
              <div className="p-4 flex justify-center">
                <AdminLogin textStyle="text-light-1" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Page;
