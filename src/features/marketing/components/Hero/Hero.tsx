import { motion } from 'framer-motion';

import { Container, Section } from '@/components/ui';

import CTAGroup from './CTAGroup/CTAGroup';
import { HERO_DESCRIPTION, HERO_TITLE } from './Hero.constants';
import ProductPreview from './ProductPreview/ProductPreview';
import TrustIndicators from './TrustIndicators/TrustIndicators';

export default function Hero() {
  return (
    <Section className="overflow-hidden pt-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Trusted by digital creators
            </span>

            <h1 className="mt-6 max-w-xl text-5xl font-bold leading-tight text-slate-900">
              {HERO_TITLE}
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              {HERO_DESCRIPTION}
            </p>

            <CTAGroup />
            <TrustIndicators />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ProductPreview />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}