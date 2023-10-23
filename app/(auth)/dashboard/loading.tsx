import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    // <main className="flex-center paddings mx-auto flex-col h-screen">
    //   <section className="navPadding w-full">
    //     <Skeleton className="h-[274px] w-fit rounded-lg bg-gray-300"  />
    //   </section>
    //   <section className="mt-6 flex w-full flex-col sm:mt-20">
    //     <Skeleton className="h-10 w-56 bg-gray-300" />
    //     <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
    //       <Skeleton className="h-[440px] w-full sm:w-[356px] bg-gray-300" />
    //       <Skeleton className="h-[440px] w-full sm:w-[356px] bg-gray-300" />
    //       <Skeleton className="h-[440px] w-full sm:w-[356px] bg-gray-300" />
    //     </div>
    //   </section>
    // </main>
    <>
      <Skeleton className="topbar bg-gray-300 h-[200px]" />
      <main className="bg-main bg-none">
        <Skeleton className="leftsidebar bg-gray-300" />
        <section className="main-container relative">
          <div className="w-full max-w-4xl">
          <Skeleton className="h-[440px] w-full bg-gray-300" />
          </div>
        </section>
        <Skeleton className="bottombar h-[200px] bg-gray-300" />
      </main>
    </>
  );
};

export default Loading;
