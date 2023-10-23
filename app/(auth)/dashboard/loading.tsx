import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-col h-full">
    <Skeleton className="mb-4" height={40} />
    <Skeleton className="mb-4" height={200} />
    <Skeleton className="mb-4" height={200} />
    <Skeleton className="mb-4" height={40} />
  </div>
  );
};

export default Loading;
