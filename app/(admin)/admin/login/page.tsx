
import AdminLogin from "@/components/admins/forms/AdminLogin";
import styles from '@/styles/AdminLogin.module.css'
async function Page() {
  return (
    <>
      <main className="bg-main">
      <section className="main-container relative">
          <div className={styles.box}>
            <div className={styles.form}>
              <h3 className="head-text uppercase text-center mb-3">Admin Login</h3>
              <div className="flex justify-center">
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
