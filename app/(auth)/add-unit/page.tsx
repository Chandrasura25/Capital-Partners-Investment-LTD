import React from 'react'

async function Page() {
    const user = await currentUser();
    if (!user) return null;
    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect("/onboarding");
  return (
    <div>Page</div>
  )
}

export default Page