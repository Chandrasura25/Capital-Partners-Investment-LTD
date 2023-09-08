import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
interface userProp {
  userInfo: {
    username: string;
    image: string;
  };
}
function Topbar({ userInfo }: userProp) {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/assets/logo1.jpg"
          alt="logo"
          width={30}
          height={30}
          className="rounded-full"
        />
        <p className="text-heading3-bold text-light-1 max-md:text-[14px] max-xs:hidden">
          Capital Partners Investment LTD
        </p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block">
          <div className="flex cursor-pointer gap-3">
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
