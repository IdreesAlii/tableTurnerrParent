import { Globe, Smartphone, ShoppingCart, Percent, Megaphone, Award } from 'lucide-react';

export const features = [
  {
    id: 1,
    title: 'Website',
    content: 'SEO + conversion optimized. Owner.com builds a website designed to rank in Google local search, and convert visitors into direct orders.',
    icon: Globe,
    category: 'Website',
  },
  {
    id: 2,
    title: 'Online Orders',
    content: 'Simple, fast, upsells. A streamlined ordering experience with intelligent upselling and higher conversion rates.',
    icon: ShoppingCart,
    category: 'Online Ordering',
  },
  {
    id: 3,
    title: 'Zero-Commission Delivery',
    content: 'Flat fee. Rather than paying 20-30% per order on third-party marketplaces, you get a flat fee delivery model, improving your margins.',
    icon: Percent,
    category: 'Delivery',
  },
  {
    id: 4,
    title: 'Automated Marketing',
    content: '“Always on” automations. Built-in email, SMS & push campaigns, loyalty automation, capturing and using your own customer data.',
    icon: Megaphone,
    category: 'Marketing',
  },
  {
    id: 5,
    title: 'Custom Mobile App',
    content: 'Home-screen presence. Your customers download your branded app — not a marketplace. Builds loyalty and repeat orders.',
    icon: Smartphone,
    category: 'Mobile App',
  },
  {
    id: 6,
    title: 'Loyalty Program',
    content: 'Return customer generation. A rewards system integrated into your app and ordering platform, encouraging repeat visits and higher lifetime value.',
    icon: Award,
    category: 'Loyalty',
  },
];
