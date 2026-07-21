import { motion } from 'framer-motion';
import {
  UserPlus,
  Search,
  CreditCard,
  ArrowRight,
} from 'lucide-react';

import { Card, Container, Section } from '@/components/ui';

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Create your account',
    description:
      'Sign up in seconds and access your personal MozPay dashboard.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Choose your subscription',
    description:
      'Browse verified products and compare the best digital subscriptions.',
  },
  {
    icon: CreditCard,
    number: '03',
    title: 'Pay securely',
    description:
      'Complete your purchase with protected payments and instant delivery.',
  },
];

export default function HowItWorks() {
  return (
    <Section className="py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            How it works
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Buy subscriptions in three simple steps.
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Everything was designed to make your experience fast,
            secure and effortless.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
              >
                <Card className="relative h-full rounded-3xl border border-slate-200 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Icon size={24} />
                  </div>

                  <span className="mt-6 block text-sm font-bold tracking-[0.25em] text-slate-400">
                    {step.number}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <div className="absolute -right-6 top-1/2 hidden -translate-y-1/2 lg:block">
                      <ArrowRight className="h-8 w-8 text-slate-300" />
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
