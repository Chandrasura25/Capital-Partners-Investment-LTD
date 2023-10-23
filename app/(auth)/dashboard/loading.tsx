import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <main className="flex-center paddings mx-auto flex-col h-screen">
      <Skeleton className="h-[100px] w-full rounded-lg bg-gray-300"  />
      <section className="w-full mt-4">
        <Skeleton className="h-[224px] w-full rounded-lg bg-gray-300"  />
      </section>
      <section className="mt-6 flex w-full flex-col sm:mt-20">
        <Skeleton className="h-10 w-56 bg-gray-300" />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          <Skeleton className="h-[240px] w-full sm:w-[356px] bg-gray-300" />
          <Skeleton className="h-[240px] w-full sm:w-[356px] bg-gray-300" />
          <Skeleton className="h-[240px] w-full sm:w-[356px] bg-gray-300" />
        </div>
      </section>
    </main>
  );
};

export default Loading;