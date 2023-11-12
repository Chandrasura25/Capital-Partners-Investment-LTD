
import AdminLogin from "@/components/forms/AdminLogin";
async function Page() {
  return (
    <>
      <main className="bg-main">
        <section className="main-container relative">
          <div className="max-w-md">
            <div className="p-5 glassmorphism rounded-[20px] mb-8">
              <h4 className="head-text uppercase mb-3">
                Admin Signup
              </h4>
              <div>
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
