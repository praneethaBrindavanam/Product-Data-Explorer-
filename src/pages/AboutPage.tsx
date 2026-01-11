import { Layout } from '@/components/layout/Layout';
import { Book, Leaf, Heart, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream via-background to-paper-dark py-16 md:py-24">
        <div className="container text-center">
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            About BookExplorer
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            We believe every book deserves a reader, and every reader deserves an affordable book. 
            Our mission is to give pre-loved books new homes while making reading accessible to everyone.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Sustainable Reading
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every book we sell is a tree saved. We've diverted over 10 million books from landfills.
              </p>
            </div>

            <div className="rounded-xl bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Quality Guaranteed
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every book is carefully inspected and graded so you know exactly what you're getting.
              </p>
            </div>

            <div className="rounded-xl bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Affordable for All
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We believe reading should be accessible. That's why our books start from just £2.
              </p>
            </div>

            <div className="rounded-xl bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Community First
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We partner with charities and schools to promote literacy across communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-paper-dark py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Our Story
            </h2>
            <div className="mt-8 space-y-6 text-left text-muted-foreground">
              <p>
                BookExplorer started with a simple observation: millions of perfectly good books 
                were being thrown away while many people couldn't afford new books. We saw an 
                opportunity to solve both problems at once.
              </p>
              <p>
                Since our founding, we've processed over 25 million books, giving them new lives 
                and new readers. We work with publishers, retailers, and book lovers to collect 
                books that would otherwise be discarded.
              </p>
              <p>
                Today, we're proud to be one of the UK's largest second-hand book retailers, 
                shipping books worldwide while maintaining our commitment to sustainability 
                and affordability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="font-display text-4xl font-bold text-primary">25M+</div>
              <p className="mt-2 text-muted-foreground">Books Sold</p>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-primary">500K+</div>
              <p className="mt-2 text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-primary">10M+</div>
              <p className="mt-2 text-muted-foreground">Books Saved from Landfill</p>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-primary">150+</div>
              <p className="mt-2 text-muted-foreground">Countries Shipped To</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
