import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProblemDetailSkeleton = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-screen px-4 pt-8 pb-10 gap-6">
      {/* LEFT PANEL SKELETON */}
      <div className="w-full lg:w-1/2 bg-white dark:bg-card rounded-2xl p-6 shadow-lg max-h-screen border flex-1 overflow-y-auto">
        {/* Title */}
        <Skeleton className="h-8 w-3/4 mb-4" />

        {/* Difficulty & Category */}
        <Skeleton className="h-4 w-1/4 mb-6" />

        {/* Description lines */}
        <div className="space-y-3 mb-6">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-full" />
        </div>

        {/* Example header */}
        <Skeleton className="h-5 w-1/5 mb-3" />

        {/* Example code block */}
        <Skeleton className="h-32 rounded-lg" />
      </div>

      {/* RIGHT PANEL SKELETON */}
      <div className="w-full lg:w-1/2 bg-gray-50 dark:bg-card rounded-2xl p-6 shadow-lg border flex flex-col max-h-screen overflow-hidden flex-1">
        {/* Controls bar */}
        <div className="flex justify-between items-center mb-4">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-24" />
        </div>

        {/* Code editor area */}
        <Skeleton className="flex-1 rounded-lg" />
      </div>
    </div>
  );
};

export default ProblemDetailSkeleton;
