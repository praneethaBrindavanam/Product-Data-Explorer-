import { mockNavigation } from '@/lib/mock-data';
import { CategoryCard } from '@/components/categories/CategoryCard';

export function FeaturedCategories() {
  const featuredNav = mockNavigation.filter(nav => nav.featured);

  return (
    <section className="bg-background py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">
            Browse by Category
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            From bestselling fiction to insightful non-fiction, find your perfect read
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredNav.map((nav, index) => (
            <div
              key={nav.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CategoryCard
                category={{
                  id: nav.id,
                  name: nav.name,
                  slug: nav.slug,
                  productCount: nav.categories?.reduce((acc, cat) => acc + (cat.productCount || 0), 0),
                }}
                variant="featured"
              />
            </div>
          ))}
        </div>

        {/* Subcategory cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredNav.flatMap(nav => nav.categories?.slice(0, 2) || []).map((category, index) => (
            <div
              key={category.id}
              className="animate-slide-up"
              style={{ animationDelay: `${(index + 3) * 75}ms` }}
            >
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
