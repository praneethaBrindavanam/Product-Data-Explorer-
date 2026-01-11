import { useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ProductGrid } from '@/components/products/ProductGrid';
import { getProductDetail, mockProducts } from '@/lib/mock-data';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Star, ShoppingCart, Heart, Share2, Truck, RotateCcw, Shield } from 'lucide-react';
import { useState } from 'react';

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // Find product by slug
  const product = mockProducts.find(p => p.slug === slug);
  const productDetail = product ? getProductDetail(product.id) : undefined;

  if (!productDetail) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">
            Product not found
          </h1>
          <p className="mt-2 text-muted-foreground">
            The book you're looking for doesn't exist.
          </p>
        </div>
      </Layout>
    );
  }

  const discountPercentage = productDetail.originalPrice
    ? Math.round((1 - productDetail.price / productDetail.originalPrice) * 100)
    : 0;

  return (
    <Layout>
      <div className="container py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/category/fiction">Fiction</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="max-w-[200px] truncate">
                {productDetail.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Main product section */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image */}
          <div className="relative">
            <div className="sticky top-24 overflow-hidden rounded-xl bg-muted shadow-lg">
              <img
                src={productDetail.imageUrl}
                alt={`Cover of ${productDetail.title}`}
                className="aspect-[2/3] w-full object-cover"
              />
              {discountPercentage > 0 && (
                <Badge className="absolute left-4 top-4 bg-accent text-accent-foreground text-sm px-3 py-1">
                  {discountPercentage}% off
                </Badge>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                {productDetail.title}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                by <span className="text-foreground">{productDetail.author}</span>
              </p>
            </div>

            {/* Rating */}
            {productDetail.rating && (
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.round(productDetail.rating || 0)
                          ? 'fill-gold text-gold'
                          : 'text-muted'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{productDetail.rating?.toFixed(1)}</span>
                <span className="text-muted-foreground">
                  ({productDetail.reviewCount} reviews)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-bold text-primary">
                £{productDetail.price.toFixed(2)}
              </span>
              {productDetail.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  £{productDetail.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Condition */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Condition:</span>
              <Badge variant="secondary" className="capitalize">
                {productDetail.condition?.replace('-', ' ') || 'Good'}
              </Badge>
            </div>

            {/* Add to cart */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center rounded-lg border border-input">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-2 text-lg hover:bg-muted transition-colors"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-2 text-lg hover:bg-muted transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              
              <Button size="lg" className="flex-1 gap-2">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              
              <Button variant="outline" size="icon" className="h-11 w-11">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
              
              <Button variant="outline" size="icon" className="h-11 w-11">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid gap-3 rounded-lg bg-muted/50 p-4">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="h-5 w-5 text-primary" />
                <span>Free delivery on orders over £10</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RotateCcw className="h-5 w-5 text-primary" />
                <span>30-day returns policy</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="h-5 w-5 text-primary" />
                <span>Quality checked before dispatch</span>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Description
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {productDetail.description}
              </p>
            </div>

            {/* Book details */}
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Book Details
              </h2>
              <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
                {productDetail.isbn && (
                  <>
                    <dt className="text-muted-foreground">ISBN</dt>
                    <dd className="font-medium">{productDetail.isbn}</dd>
                  </>
                )}
                {productDetail.publisher && (
                  <>
                    <dt className="text-muted-foreground">Publisher</dt>
                    <dd className="font-medium">{productDetail.publisher}</dd>
                  </>
                )}
                {productDetail.publicationDate && (
                  <>
                    <dt className="text-muted-foreground">Publication Date</dt>
                    <dd className="font-medium">{productDetail.publicationDate}</dd>
                  </>
                )}
                {productDetail.pages && (
                  <>
                    <dt className="text-muted-foreground">Pages</dt>
                    <dd className="font-medium">{productDetail.pages}</dd>
                  </>
                )}
                {productDetail.format && (
                  <>
                    <dt className="text-muted-foreground">Format</dt>
                    <dd className="font-medium">{productDetail.format}</dd>
                  </>
                )}
                {productDetail.language && (
                  <>
                    <dt className="text-muted-foreground">Language</dt>
                    <dd className="font-medium">{productDetail.language}</dd>
                  </>
                )}
              </dl>
            </div>
          </div>
        </div>

        {/* Reviews */}
        {productDetail.reviews && productDetail.reviews.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Customer Reviews
            </h2>
            <div className="mt-6 space-y-6">
              {productDetail.reviews.map((review) => (
                <div key={review.id} className="rounded-lg border border-border bg-card p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= review.rating
                                  ? 'fill-gold text-gold'
                                  : 'text-muted'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-medium">{review.title}</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {review.author} · {review.date}
                      </p>
                    </div>
                    {review.helpful && (
                      <span className="text-xs text-muted-foreground">
                        {review.helpful} found helpful
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-muted-foreground">{review.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related products */}
        {productDetail.relatedProducts && productDetail.relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-2xl font-bold text-foreground">
              You May Also Like
            </h2>
            <div className="mt-6">
              <ProductGrid products={productDetail.relatedProducts} />
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}
