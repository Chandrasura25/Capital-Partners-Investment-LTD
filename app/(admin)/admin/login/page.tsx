
import AdminLogin from "@/components/forms/AdminLogin";
import styles from '@/styles/AdminLogin.module.css'
async function Page() {
  return (
    <>
      <main className="bg-main">
      <section className="main-container relative">
          <div className={styles.box}>
            <div className="">
              <h3 className="head-text mb-3 uppercase text-center">Admin Login</h3>
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
