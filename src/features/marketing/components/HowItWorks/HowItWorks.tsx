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
    <Section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            How it works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Pay faster, safer, and smarter
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            In three simple steps, you can discover the best subscription offer and complete your purchase in minutes.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <Card className="h-full p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">{step.number}</span>
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>

                  {index < steps.length - 1 ? (
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                      Next step
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  ) : null}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}