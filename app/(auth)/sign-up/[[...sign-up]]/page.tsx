import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="formBg flex w-full justify-center items-center min-h-screen"><SignUp /></div> 
  );
}