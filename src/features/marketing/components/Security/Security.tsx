import { motion } from 'framer-motion';
import {
  ShieldCheck,
  LockKeyhole,
  BadgeCheck,
  Activity,
} from 'lucide-react';

import { Card, Container, Section } from '@/components/ui';

const securityItems = [
  {
    icon: ShieldCheck,
    title: 'Protected Payments',
    description:
      'Every transaction is processed through secure payment flows to protect buyers and sellers.',
  },
  {
    icon: LockKeyhole,
    title: 'Encrypted Data',
    description:
      'Sensitive information is encrypted using modern security standards.',
  },
  {
    icon: BadgeCheck,
    title: 'Verified Sellers',
    description:
      'Marketplace partners go through a verification process before selling.',
  },
  {
    icon: Activity,
    title: '24/7 Monitoring',
    description:
      'Continuous monitoring helps detect suspicious activity and improve reliability.',
  },
];

export default function Security() {
  return (
    <Section className="py-20 bg-slate-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Security First
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Built with security at the core.
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            MozPay is designed to provide a safe environment for digital purchases,
            protecting both customers and sellers.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {securityItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <Card className="h-full rounded-3xl border border-slate-200 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
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
