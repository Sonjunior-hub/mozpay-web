import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Crown, Sparkles } from 'lucide-react';

import { Button, Container, Section, Card } from '@/components/ui';

const products = [
  {
    name: 'Netflix Premium',
    category: 'Streaming',
    price: 'MT 399',
    status: 'Instant Delivery',
    accent: 'from-rose-500 to-orange-500',
  },
  {
    name: 'Spotify Family',
    category: 'Music',
    price: 'MT 249',
    status: 'Verified Seller',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Canva Pro',
    category: 'Design',
    price: 'MT 299',
    status: 'Protected Payment',
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    name: 'Microsoft 365',
    category: 'Productivity',
    price: 'MT 599',
    status: 'Premium Access',
    accent: 'from-violet-500 to-fuchsia-500',
  },
];

export default function MarketplacePreview() {
  return (
    <Section className="py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <Sparkles className="h-4 w-4" />
              Curated digital subscriptions
            </span>

            <h2 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Discover premium subscriptions in one trusted place.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Explore verified digital products with instant delivery, protected payments,
              and a marketplace designed for clarity and trust.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button>
                Browse Marketplace
              </Button>

              <Button
                variant="secondary"
                rightIcon={<ArrowRight size={18} />}
              >
                View all products
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Verified sellers', 'Instant delivery', 'Protected checkout'].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Card className="overflow-hidden border border-slate-200/80 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">Featured products</p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
                    Marketplace highlights
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg">
                  <Crown className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${product.accent}`} />

                    <div className="mt-2 flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-slate-500">{product.category}</p>
                        <h4 className="mt-1 text-lg font-semibold text-slate-900">
                          {product.name}
                        </h4>
                      </div>

                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                        {product.status}
                      </span>
                    </div>

                    <div className="mt-6 flex items-end justify-between">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
                          Starting at
                        </p>
                        <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                          {product.price}
                        </p>
                      </div>

                      <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]">
                        Buy now
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}