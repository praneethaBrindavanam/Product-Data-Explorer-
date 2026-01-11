import { Category, Product, ProductDetail, NavigationItem, Review } from './types';

// Mock navigation items based on World of Books categories
export const mockNavigation: NavigationItem[] = [
  {
    id: '1',
    name: 'Fiction',
    slug: 'fiction',
    featured: true,
    categories: [
      { id: 'f1', name: 'Literary Fiction', slug: 'literary-fiction', productCount: 2340 },
      { id: 'f2', name: 'Crime & Thriller', slug: 'crime-thriller', productCount: 4521 },
      { id: 'f3', name: 'Science Fiction', slug: 'science-fiction', productCount: 1876 },
      { id: 'f4', name: 'Romance', slug: 'romance', productCount: 3102 },
      { id: 'f5', name: 'Fantasy', slug: 'fantasy', productCount: 2654 },
      { id: 'f6', name: 'Historical Fiction', slug: 'historical-fiction', productCount: 1543 },
    ]
  },
  {
    id: '2',
    name: 'Non-Fiction',
    slug: 'non-fiction',
    featured: true,
    categories: [
      { id: 'n1', name: 'Biography', slug: 'biography', productCount: 3421 },
      { id: 'n2', name: 'History', slug: 'history', productCount: 2876 },
      { id: 'n3', name: 'Science', slug: 'science', productCount: 1654 },
      { id: 'n4', name: 'Self-Help', slug: 'self-help', productCount: 2198 },
      { id: 'n5', name: 'Business', slug: 'business', productCount: 1876 },
      { id: 'n6', name: 'Cooking', slug: 'cooking', productCount: 987 },
    ]
  },
  {
    id: '3',
    name: "Children's",
    slug: 'childrens',
    featured: true,
    categories: [
      { id: 'c1', name: 'Picture Books', slug: 'picture-books', productCount: 2134 },
      { id: 'c2', name: 'Young Adult', slug: 'young-adult', productCount: 1876 },
      { id: 'c3', name: 'Early Learning', slug: 'early-learning', productCount: 943 },
      { id: 'c4', name: 'Activity Books', slug: 'activity-books', productCount: 654 },
    ]
  },
  {
    id: '4',
    name: 'Art & Photography',
    slug: 'art-photography',
    categories: [
      { id: 'a1', name: 'Art History', slug: 'art-history', productCount: 876 },
      { id: 'a2', name: 'Photography', slug: 'photography', productCount: 654 },
      { id: 'a3', name: 'Design', slug: 'design', productCount: 432 },
    ]
  },
  {
    id: '5',
    name: 'Music & Film',
    slug: 'music-film',
    categories: [
      { id: 'm1', name: 'Music', slug: 'music', productCount: 543 },
      { id: 'm2', name: 'Film & TV', slug: 'film-tv', productCount: 765 },
    ]
  },
];

// Mock products
export const mockProducts: Product[] = [
  {
    id: 'p1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    price: 4.99,
    originalPrice: 8.99,
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
    slug: 'the-midnight-library',
    categoryId: 'f1',
    condition: 'very-good',
    inStock: true,
  },
  {
    id: 'p2',
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 6.49,
    originalPrice: 12.99,
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop',
    slug: 'atomic-habits',
    categoryId: 'n4',
    condition: 'good',
    inStock: true,
  },
  {
    id: 'p3',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    price: 5.99,
    originalPrice: 10.99,
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop',
    slug: 'project-hail-mary',
    categoryId: 'f3',
    condition: 'very-good',
    inStock: true,
  },
  {
    id: 'p4',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    price: 3.99,
    originalPrice: 9.99,
    imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop',
    slug: 'where-the-crawdads-sing',
    categoryId: 'f1',
    condition: 'good',
    inStock: true,
  },
  {
    id: 'p5',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    price: 4.49,
    originalPrice: 8.99,
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
    slug: 'the-silent-patient',
    categoryId: 'f2',
    condition: 'very-good',
    inStock: true,
  },
  {
    id: 'p6',
    title: 'Becoming',
    author: 'Michelle Obama',
    price: 7.99,
    originalPrice: 14.99,
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop',
    slug: 'becoming',
    categoryId: 'n1',
    condition: 'new',
    inStock: true,
  },
  {
    id: 'p7',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    price: 5.49,
    originalPrice: 11.99,
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop',
    slug: 'sapiens',
    categoryId: 'n2',
    condition: 'very-good',
    inStock: true,
  },
  {
    id: 'p8',
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    price: 4.99,
    originalPrice: 9.99,
    imageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop',
    slug: 'the-name-of-the-wind',
    categoryId: 'f5',
    condition: 'good',
    inStock: true,
  },
];

// Mock reviews
export const mockReviews: Review[] = [
  {
    id: 'r1',
    author: 'Sarah M.',
    rating: 5,
    title: 'Absolutely captivating!',
    content: 'This book kept me up all night. The writing is beautiful and the story is both heartwarming and thought-provoking.',
    date: '2024-01-15',
    helpful: 24,
  },
  {
    id: 'r2',
    author: 'James P.',
    rating: 4,
    title: 'Great read with minor flaws',
    content: 'Really enjoyed this one. The pacing was excellent though I felt the ending was a bit rushed.',
    date: '2024-01-10',
    helpful: 12,
  },
  {
    id: 'r3',
    author: 'Emily R.',
    rating: 5,
    title: 'A masterpiece',
    content: 'One of the best books I\'ve read in years. Every chapter left me wanting more.',
    date: '2024-01-05',
    helpful: 31,
  },
];

// Function to generate product detail
export function getProductDetail(productId: string): ProductDetail | undefined {
  const product = mockProducts.find(p => p.id === productId);
  if (!product) return undefined;

  return {
    ...product,
    description: `A captivating story by ${product.author} that has captured the hearts of readers worldwide. This book explores profound themes through masterful storytelling and unforgettable characters. Perfect for anyone who loves a good read that stays with you long after the last page.`,
    isbn: `978-${Math.random().toString().slice(2, 12)}`,
    publisher: 'Penguin Random House',
    publicationDate: '2023-06-15',
    pages: Math.floor(Math.random() * 300) + 200,
    format: 'Paperback',
    language: 'English',
    rating: 4.2 + Math.random() * 0.7,
    reviewCount: Math.floor(Math.random() * 500) + 50,
    reviews: mockReviews,
    relatedProducts: mockProducts.filter(p => p.id !== productId).slice(0, 4),
  };
}

// Function to get products by category
export function getProductsByCategory(categorySlug: string, page: number = 1, limit: number = 12) {
  const products = mockProducts;
  const start = (page - 1) * limit;
  const end = start + limit;
  
  return {
    data: products.slice(start, end),
    page,
    limit,
    total: products.length,
    totalPages: Math.ceil(products.length / limit),
  };
}

// Function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  for (const nav of mockNavigation) {
    if (nav.slug === slug) {
      return {
        id: nav.id,
        name: nav.name,
        slug: nav.slug,
        subcategories: nav.categories,
      };
    }
    const category = nav.categories?.find(c => c.slug === slug);
    if (category) return category;
  }
  return undefined;
}
