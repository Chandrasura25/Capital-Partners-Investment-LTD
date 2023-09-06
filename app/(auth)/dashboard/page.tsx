import Bottombar from "@/components/shared/Bottombar"
import LeftSidebar from "@/components/shared/LeftSidebar"
import Topbar from "@/components/shared/Topbar"

async function Page() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings
  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/");

  return (
    <>
      <Topbar userInfo={userInfo} />

      <main className='flex flex-row'>
            <LeftSidebar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>

              </div>
            </section>
          </main>

          <Bottombar />
    </>
  )
}

export default Page