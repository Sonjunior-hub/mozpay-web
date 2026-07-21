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
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Got questions?
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Everything you need to know before using MozPay.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={faq.question}
                layout
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-7">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
