export interface NavItem {
  label: string;
  href: string;
}
export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  price: string;
}
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  treatment: string;
  avatar: string;
}
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  slug: string;
}
export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: string;
  rating: number;
  badge?: string;
  image: string;
  amazonLink: string;
}
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}
export interface BeforeAfter {
  id: number;
  treatment: string;
  beforeImage: string;
  afterImage: string;
}