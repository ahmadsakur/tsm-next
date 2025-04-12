import React from "react";

const TableSkeleton = () => {
  return (
    <div className="w-full">
      <div className="flex justify-end py-4 gap-x-4 animate-pulse">
        <div className="relative rounded-lg shadow-inner flex items-center max-w-sm w-full">
          <div className="pl-10 rounded-md w-full h-10 bg-gray-200" />
          <div className="absolute left-3 size-4 h-6 w-6 bg-gray-200 rounded-full" />
        </div>
        <div className="flex items-center gap-x-2 bg-neutral-900 h-10 w-32 rounded-md" />
      </div>
      <div className="rounded-md animate-pulse">
        <div className="h-8 bg-green-900 rounded w-full" />
        <div className="space-y-5 my-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="grid grid-cols-12 gap-4" key={index}>
              <div className="h-8 rounded col-span-3 bg-gray-200" />
              <div className="h-8 rounded col-span-2 bg-gray-200" />
              <div className="h-8 rounded col-span-6 bg-gray-200" />
              <div className="col-span-1 grid-cols-2 grid gap-2">
                <div className="h-8 rounded col-span-1 bg-gray-200" />
                <div className="h-8 rounded col-span-1 bg-red-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;
