"use client";
import Link from "next/link";
import Image from "next/image";
import { AdminSidebarLinks } from "@/constants";
import { xx , useRouter } from "next/navigation";
function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const SignOutAdmin = () => {
    localStorage.removeItem("admin");
    router.push("/admin/login");
  };
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {AdminSidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && "bg-primary-500"}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 px-6">
        <div className="flex cursor-pointer gap-4 p-4" onClick={SignOutAdmin}>
          <Image src="/assets/logout.svg" height={24} width={24} alt="logout" />
          <p className="text-light-2 max-lg:hidden">Logout</p>
        </div>
      </div>
    </section>
  );
}
export default LeftSidebar;
