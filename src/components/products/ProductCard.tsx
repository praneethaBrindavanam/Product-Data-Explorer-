import { Link } from 'react-router-dom';
import { Product } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const discountPercentage = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <Link
      to={`/product/${product.slug}`}
      className={cn(
        "group block rounded-lg bg-card p-4 shadow-sm transition-all duration-300",
        "hover:shadow-md hover:-translate-y-1",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        className
      )}
    >
      {/* Image container */}
      <div className="relative mb-4 aspect-[2/3] overflow-hidden rounded-md bg-muted">
        <img
          src={product.imageUrl}
          alt={`Cover of ${product.title} by ${product.author}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Discount badge */}
        {discountPercentage > 0 && (
          <Badge 
            className="absolute left-2 top-2 bg-accent text-accent-foreground"
          >
            {discountPercentage}% off
          </Badge>
        )}

        {/* Condition badge */}
        {product.condition && (
          <Badge 
            variant="secondary"
            className="absolute bottom-2 right-2 text-xs capitalize"
          >
            {product.condition.replace('-', ' ')}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="space-y-1">
        <h3 className="font-display text-base font-medium leading-tight text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-muted-foreground">{product.author}</p>
        
        {/* Price */}
        <div className="flex items-center gap-2 pt-2">
          <span className="font-display text-lg font-semibold text-primary">
            £{product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              £{product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Stock status */}
        {!product.inStock && (
          <p className="text-sm text-destructive">Out of stock</p>
        )}
      </div>
    </Link>
  );
}
