import { Plus, ShoppingCart } from 'lucide-react';

import {
  Button,
  Container,
  Heading,
  Section,
} from '@/components/ui';

export default function PlaygroundPage() {
  return (
    <Section>
      <Container>
        <Heading
          title="MozPay Design System"
          subtitle="Button Component"
        />

        <div className="mt-10 flex flex-wrap gap-4">

          <Button>
            Primary
          </Button>

          <Button variant="secondary">
            Secondary
          </Button>

          <Button variant="ghost">
            Ghost
          </Button>

          <Button variant="danger">
            Danger
          </Button>

          <Button
            leftIcon={<Plus size={18} />}
          >
            Deposit
          </Button>

          <Button
            rightIcon={<ShoppingCart size={18} />}
          >
            Buy
          </Button>

          <Button loading>
            Loading
          </Button>

          <Button disabled>
            Disabled
          </Button>

        </div>
      </Container>
    </Section>
  );
}