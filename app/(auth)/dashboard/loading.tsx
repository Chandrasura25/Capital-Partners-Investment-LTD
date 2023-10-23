import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-col h-full">
      <Skeleton className="mb-4 h-40" />
      <Skeleton className="mb-4 h-200" />
      <Skeleton className="mb-4 h-200" />
      <Skeleton className="mb-4 h-40" />
    </div>
  );
};

export default Loading;
