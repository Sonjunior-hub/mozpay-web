import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { Container, Section } from '@/components/ui';

const faqs = [
  {
    question: 'How does MozPay work?',
    answer:
      'MozPay connects buyers and verified sellers in one marketplace where digital subscriptions can be purchased securely.',
  },
  {
    question: 'Are payments secure?',
    answer:
      'Yes. Every payment is processed through protected channels and sensitive information is encrypted.',
  },
  {
    question: 'When do I receive my subscription?',
    answer:
      'Most subscriptions are delivered instantly after payment confirmation.',
  },
  {
    question: 'Can I request a refund?',
    answer:
      'Refunds follow the seller policy. Verified sellers clearly display their refund conditions.',
  },
  {
    question: 'Why should I trust MozPay?',
    answer:
      'We verify sellers, protect payments and continuously monitor transactions to provide a safe marketplace.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              FAQ
            </p>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-border bg-background/60"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-medium text-foreground sm:text-lg">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-muted-foreground"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-4 text-sm text-muted-foreground sm:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}