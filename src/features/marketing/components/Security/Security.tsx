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
    <Section className="py-20">
      <Container>
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Security first
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            Built to protect every transaction
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {securityItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <Card className="h-full p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-primary/10 p-3 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}