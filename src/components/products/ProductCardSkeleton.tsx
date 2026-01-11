import { Skeleton } from '@/components/ui/skeleton';

export function ProductCardSkeleton() {
  return (
    <div className="rounded-lg bg-card p-4 shadow-sm">
      {/* Image skeleton */}
      <Skeleton className="mb-4 aspect-[2/3] w-full rounded-md" />
      
      {/* Content skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="mt-2 h-6 w-1/3" />
      </div>
    </div>
  );
}
