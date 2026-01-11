import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockProducts } from '@/lib/mock-data';
import { ProductGrid } from '@/components/products/ProductGrid';

export function TrendingBooks() {
  return (
    <section className="bg-paper-dark py-16">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Trending Now
            </h2>
            <p className="mt-2 text-muted-foreground">
              Popular picks our readers are loving
            </p>
          </div>
          <Button asChild variant="outline" className="gap-2">
            <Link to="/category/fiction">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <ProductGrid products={mockProducts.slice(0, 8)} />
      </div>
    </section>
  );
}
