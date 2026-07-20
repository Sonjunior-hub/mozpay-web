import { BadgeCheck, ShieldCheck, Zap } from 'lucide-react';

import { HERO_FEATURES } from '../Hero.constants';

const icons = [ShieldCheck, BadgeCheck, Zap];

export default function TrustIndicators() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
      {HERO_FEATURES.map((item, index) => {
        const Icon = icons[index];

        return (
          <div
            key={item}
            className="flex items-center gap-2 text-sm font-medium text-slate-600"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
              <Icon size={16} className="text-blue-600" />
            </span>
            {item}
          </div>
        );
      })}
    </div>
  );
}