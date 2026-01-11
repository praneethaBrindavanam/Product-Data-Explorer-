import { Link } from 'react-router-dom';
import { Category } from '@/lib/types';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: Category;
  className?: string;
  variant?: 'default' | 'featured';
}

export function CategoryCard({ category, className, variant = 'default' }: CategoryCardProps) {
  if (variant === 'featured') {
    return (
      <Link
        to={`/category/${category.slug}`}
        className={cn(
          "group relative flex h-48 flex-col justify-end overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-6",
          "transition-all duration-300 hover:shadow-lg hover:from-primary/25 hover:to-primary/10",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          className
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        
        <h3 className="relative font-display text-2xl font-semibold text-foreground">
          {category.name}
        </h3>
        
        {category.productCount && (
          <p className="relative mt-1 text-sm text-muted-foreground">
            {category.productCount.toLocaleString()} books
          </p>
        )}
        
        <div className="relative mt-3 flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
          Browse collection
          <ArrowRight className="h-4 w-4" />
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/category/${category.slug}`}
      className={cn(
        "group flex items-center justify-between rounded-lg border border-border bg-card p-4",
        "transition-all duration-200 hover:border-primary/30 hover:bg-accent/50 hover:shadow-sm",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        className
      )}
    >
      <div>
        <h3 className="font-display text-base font-medium text-foreground group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        {category.productCount && (
          <p className="mt-0.5 text-sm text-muted-foreground">
            {category.productCount.toLocaleString()} books
          </p>
        )}
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
    </Link>
  );
}
