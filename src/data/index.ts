import type { NavItem, Service, Testimonial, BlogPost, Product, StatItem, BeforeAfter } from "@/types";

export const navItems: NavItem[] = [
  { label: "Services",  href: "/services"  },
  { label: "About",     href: "/about"     },
  { label: "Gallery",   href: "/gallery"   },
  { label: "Reviews",   href: "/reviews"   },
  { label: "Products",  href: "/products"  },
  { label: "Insurance", href: "/insurance" },
  { label: "Blog",      href: "/blog"      },
  { label: "Contact",   href: "/contact"   },
];

export const stats: StatItem[] = [
  { value: 5000, suffix: "+", label: "Happy Patients"     },
  { value: 15,   suffix: "+", label: "Years Experience"   },
  { value: 12,   suffix: "",  label: "Treatments Offered" },
  { value: 99,   suffix: "%", label: "Satisfaction Rate"  },
];

export const services: Service[] = [
  { id: 1, icon: "🦷", title: "General Dentistry",    description: "Routine cleanings, exams, fillings, and preventive care to keep your smile healthy year-round.",                          price: "From $89"    },
  { id: 2, icon: "✨", title: "Teeth Whitening",      description: "Professional-grade whitening that lifts years of staining in a single visit. Up to 8 shades brighter.",                   price: "From $299"   },
  { id: 3, icon: "😁", title: "Invisalign & Braces",  description: "Straighten your teeth discreetly with custom clear aligners or traditional braces tailored for you.",                     price: "From $2,499" },
  { id: 4, icon: "🔩", title: "Dental Implants",      description: "Permanent, natural-looking replacements for missing teeth — feel and function like real teeth.",                           price: "From $1,899" },
  { id: 5, icon: "💎", title: "Veneers & Bonding",    description: "Cosmetic solutions to reshape, resize, or resurface your teeth for a flawless, camera-ready smile.",                      price: "From $699"   },
  { id: 6, icon: "🧒", title: "Pediatric Dentistry",  description: "A gentle, fun environment that makes kids actually excited about visiting the dentist.",                                   price: "From $65"    },
];

export const testimonials: Testimonial[] = [
  { id: 1, name: "Jennifer Walsh",   location: "Austin, TX",      rating: 5, text: "I was terrified of dentists my whole life. Dr. Mitchell changed everything. The Invisalign results were jaw-dropping.",                                         treatment: "Invisalign",          avatar: "JW" },
  { id: 2, name: "Marcus Thompson",  location: "Austin, TX",      rating: 5, text: "Got two implants done here and the process was seamless. Very transparent about pricing, zero hidden fees. Looks completely natural.",                           treatment: "Dental Implants",     avatar: "MT" },
  { id: 3, name: "Sofia Reyes",      location: "Cedar Park, TX",  rating: 5, text: "Brought my 7-year-old for her first visit and she actually asked when we could come back! Found our dentist for life.",                                          treatment: "Pediatric Dentistry", avatar: "SR" },
  { id: 4, name: "David Park",       location: "Round Rock, TX",  rating: 5, text: "The teeth whitening results honestly surprised me — I expected subtle but got dramatic. Professional, quick, no sensitivity issues.",                            treatment: "Teeth Whitening",     avatar: "DP" },
];

export const products: Product[] = [
  { id: 1, name: "Oral-B iO Series 9",      brand: "Oral-B",    description: "AI-powered electric toothbrush that guides you to brush every zone. Our #1 recommended home tool.", price: "$199", rating: 5, badge: "Doctor's #1 Pick",    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80", amazonLink: "https://amazon.com" },
  { id: 2, name: "Waterpik Aquarius",        brand: "Waterpik",  description: "Water flosser clinically proven to be 2x more effective than string floss for gum health.",         price: "$79",  rating: 5, badge: "Best for Gums",        image: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=400&q=80", amazonLink: "https://amazon.com" },
  { id: 3, name: "Sensodyne Pronamel",       brand: "Sensodyne", description: "Strengthens enamel and relieves sensitivity. Ideal for patients after whitening treatments.",        price: "$12",  rating: 4, badge: "Post-Whitening Must", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80", amazonLink: "https://amazon.com" },
  { id: 4, name: "ACT Anticavity Fluoride",  brand: "ACT",       description: "Fluoride mouthwash that remineralizes enamel. Great for cavity-prone patients and kids 6+.",         price: "$8",   rating: 4,                             image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&q=80", amazonLink: "https://amazon.com" },
];

export const blogPosts: BlogPost[] = [
  { id: 1, title: "Why You Should Replace Your Toothbrush More Often Than You Think", excerpt: "Most people keep their toothbrush 3x longer than recommended. Here's why that's silently damaging your gum health.", category: "Oral Hygiene",  readTime: "4 min read", date: "May 14, 2025", image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&q=80", slug: "replace-toothbrush-often"    },
  { id: 2, title: "Invisalign vs Braces: An Honest Breakdown for Adults in 2025",    excerpt: "Both work. But one fits your lifestyle better. We break down cost, comfort, timeline, and results honestly.",           category: "Orthodontics", readTime: "6 min read", date: "Apr 28, 2025", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80", slug: "invisalign-vs-braces-2025"   },
  { id: 3, title: "The Real Reason Your Gums Bleed When You Floss",                  excerpt: "Hint: it's not because you're flossing too hard. Understanding the cause is the first step to fixing it.",              category: "Gum Health",   readTime: "5 min read", date: "Apr 10, 2025", image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80", slug: "why-gums-bleed-flossing"     },
];

export const insuranceProviders: string[] = [
  "Delta Dental", "Cigna", "Aetna", "MetLife",
  "United Concordia", "Guardian", "Humana", "Blue Cross Blue Shield",
];

export const beforeAfters: BeforeAfter[] = [
  { id: 1, treatment: "Teeth Whitening", beforeImage: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=500&q=80", afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&q=80" },
  { id: 2, treatment: "Veneers",         beforeImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500&q=80", afterImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80" },
];