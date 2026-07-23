import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';

import { Button, Container, Section } from '@/components/ui';

export default function CTA() {
  return (
    <Section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 px-8 py-16 text-center text-white shadow-2xl"
        >
          {/* Glow */}
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              Ready to get started?
            </span>

            <h2 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">
              Buy digital subscriptions with confidence.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Join thousands of users who trust MozPay to purchase premium
              digital subscriptions safely, quickly and securely.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100"
                rightIcon={<ArrowRight size={18} />}
              >
                Create Account
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="border border-white/20 bg-white/10 text-white hover:bg-white/20"
                leftIcon={<ShoppingBag size={18} />}
              >
                Explore Marketplace
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
              <span>✓ Secure Payments</span>
              <span>✓ Instant Delivery</span>
              <span>✓ Verified Sellers</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
