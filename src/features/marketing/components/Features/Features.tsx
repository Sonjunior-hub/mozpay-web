import { motion } from 'framer-motion';
import {
  BadgeCheck,
  CreditCard,
  ShieldCheck,
  Sparkles,
  Zap,
  Users,
} from 'lucide-react';

import { Container, Section, Card } from '@/components/ui';

const features = [
  {
    icon: ShieldCheck,
    title: 'Protected Payments',
    description:
      'Keep every transaction secure with a marketplace built around trust and safety.',
  },
  {
    icon: BadgeCheck,
    title: 'Verified Sellers',
    description:
      'Every seller goes through a curated flow so buyers can shop with confidence.',
  },
  {
    icon: Zap,
    title: 'Instant Delivery',
    description:
      'Receive access as soon as payment is approved, without unnecessary delays.',
  },
  {
    icon: CreditCard,
    title: 'Wallet Ready',
    description:
      'Add balance, manage spending, and keep your subscriptions under control.',
  },
  {
    icon: Sparkles,
    title: 'Premium Experience',
    description:
      'A clean interface, smooth motion, and a polished UX inspired by top SaaS products.',
  },
  {
    icon: Users,
    title: 'Built for Community',
    description:
      'Designed for creators, buyers, and sellers who want a simple digital subscription hub.',
  },
];

export default function Features() {
  return (
    <Section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
            Why MozPay
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Everything you need to buy and manage subscriptions.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            MozPay combines trust, speed, and simplicity into one premium digital marketplace.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <Card className="h-full border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}