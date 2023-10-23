const Loading = () => {
  return (
   <div className="w-full h-[100vh]">
     <div
      role="status"
      className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
    >
      <div className="flex items-center justify-center w-full h-100 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <div className="h-40 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div role="status" className="max-w-sm animate-pulse">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-12 bg-gray-200 dark:bg-gray-700 mb-2.5"></div>
          <div className="h-12 bg-gray-200 dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-12 bg-gray-200 dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-12 bg-gray-200 dark:bg-gray-700 max-w-[360px]"></div>
        </div>
      </div>
      <div className="w-full">
        <div className="h-40 bg-gray-200 dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-12 bg-gray-200 dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div className="h-12 bg-gray-200 dark:bg-gray-700 mb-2.5"></div>
        <div className="h-12 bg-gray-200 dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div className="h-12 bg-gray-200 dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div className="h-12 bg-gray-200 dark:bg-gray-700 max-w-[360px]"></div>
      </div>
    </div>
   </div>
  );
};
export default Loading;
