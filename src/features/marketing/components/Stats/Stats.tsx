import { motion } from 'framer-motion';

import { Container, Section } from '@/components/ui';

const stats = [
  {
    value: '25K+',
    label: 'Users',
    description: 'Creators and buyers trust MozPay daily.',
  },
  {
    value: '12K+',
    label: 'Subscriptions',
    description: 'Active digital products managed securely.',
  },
  {
    value: '99.9%',
    label: 'Secure',
    description: 'Designed with reliability and protected payments.',
  },
  {
    value: '120+',
    label: 'Partners',
    description: 'Growing ecosystem of sellers and brands.',
  },
];

export default function Stats() {
  return (
    <Section className="py-8 sm:py-12">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>

              <div className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                {stat.value}
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
