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
    <Section className="py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            Why MozPay
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Everything your marketplace needs to move fast and stay trusted.
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            From secure checkout to premium delivery, each part of the experience is designed to
            keep buyers confident and sellers efficient.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <Card className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}