import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui';

export default function CTAGroup() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Button>Get Started</Button>

      <Button variant="secondary" rightIcon={<ArrowRight size={18} />}>
        Explore Marketplace
      </Button>
    </div>
  );
}