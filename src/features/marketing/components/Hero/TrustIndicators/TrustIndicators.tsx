import { ShieldCheck, BadgeCheck, Zap } from 'lucide-react';

import { HERO_FEATURES } from '../Hero.constants';

const icons = [
  ShieldCheck,
  BadgeCheck,
  Zap,
];

export default function TrustIndicators() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
      {HERO_FEATURES.map((item, index) => {
        const Icon = icons[index];

        return (
          <div
            key={item}
            className="flex items-center gap-2 text-sm text-slate-600"
          >
            <Icon
              size={18}
              className="text-blue-600"
            />

            {item}
          </div>
        );
      })}
    </div>
  );
}