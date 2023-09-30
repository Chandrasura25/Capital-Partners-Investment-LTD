import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <main className="flex-center paddings mx-auto flex-col">
      <section className="nav-paddings w-full">
        <Skeleton className="h-[274px] w-full rounded-lg bg-gray-800"  />
      </section>
      <section className="mt-6 flex w-full flex-col sm:mt-20">
        <Skeleton className="h-10 w-56 bg-gray-800" />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          <Skeleton className="h-[440px] w-full sm:w-[356px] bg-gray-800" />
          <Skeleton className="h-[440px] w-full sm:w-[356px] bg-gray-800" />
          <Skeleton className="h-[440px] w-full sm:w-[356px] bg-gray-800" />
        </div>
      </section>
    </main>
  );
};

export default Loading;