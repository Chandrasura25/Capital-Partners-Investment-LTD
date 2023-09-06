import { SignedIn, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
interface userProp{
  userInfo: {
    username: string;
    image: string;
  };
}
function Topbar({userInfo}:userProp) {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image  src="/assets/logo1.jpg" alt="logo" width={30} height={30} className="rounded-full" />
        <p className="text-heading3-bold text-light-1 max-md:text-[14px] max-xs:hidden">Capital Partners Investment LTD</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
         <div className="hidden md:block">
              <div className="flex cursor-pointer gap-3">
                <Image
                  src={userInfo.image}
                  alt="User Logo"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <p className="text-[14px] text-normal text-light">{userInfo.username}</p>
              </div>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;