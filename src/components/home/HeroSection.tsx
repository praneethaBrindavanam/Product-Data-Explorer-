import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Truck, Shield } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-background to-paper-dark">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="animate-fade-in font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Discover Your Next
            <span className="block text-primary">Favourite Book</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-xl animate-fade-in text-lg text-muted-foreground [animation-delay:100ms]">
            Explore thousands of pre-loved books at incredible prices. Every purchase gives a book a new life and helps reduce waste.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 animate-fade-in [animation-delay:200ms] sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link to="/category/fiction">
                Browse Fiction
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/category/non-fiction">
                Explore Non-Fiction
              </Link>
            </Button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 animate-fade-in [animation-delay:300ms]">
          <div className="flex items-center justify-center gap-3 rounded-lg bg-card/50 p-4 backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Leaf className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-display text-sm font-semibold text-foreground">Eco-Friendly</p>
              <p className="text-xs text-muted-foreground">Reduce, reuse, read</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 rounded-lg bg-card/50 p-4 backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Truck className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-display text-sm font-semibold text-foreground">Free Shipping</p>
              <p className="text-xs text-muted-foreground">On orders over £10</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 rounded-lg bg-card/50 p-4 backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-display text-sm font-semibold text-foreground">Quality Guaranteed</p>
              <p className="text-xs text-muted-foreground">Every book inspected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
