import { ArrowDownRight, ArrowUpRight, CreditCard, ShieldCheck, Wallet } from 'lucide-react';

import { Button, Card } from '@/components/ui';

const transactions = [
  { name: 'Netflix Premium', value: '-MT 399', up: false },
  { name: 'Spotify Family', value: '-MT 249', up: false },
  { name: 'Canva Pro', value: '-MT 299', up: false },
  { name: 'Deposit', value: '+MT 1,500', up: true },
];

export default function ProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -left-8 top-10 hidden rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-md lg:block">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
          Protected payments
        </div>
      </div>

      <div className="absolute -right-8 top-24 hidden rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-md lg:block">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <CreditCard className="h-4 w-4 text-blue-600" />
          Virtual card
        </div>
      </div>

      <div className="absolute -bottom-8 left-10 hidden rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-md lg:block">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <Wallet className="h-4 w-4 text-indigo-600" />
          Wallet ready
        </div>
      </div>

      <Card
        hover
        className="relative overflow-hidden border border-slate-200/80 bg-white/90 p-6 shadow-2xl backdrop-blur-xl md:p-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.12),transparent_35%)]" />

        <div className="relative">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Wallet balance</p>
              <h3 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                MT 1,250.00
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg">
              <CreditCard className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-6 grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Growth this month</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">+18.4%</p>
              </div>

              <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
                <ArrowUpRight className="h-4 w-4" />
                Stable
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Active subscriptions
                </p>
                <p className="mt-2 text-2xl font-bold text-slate-900">12</p>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Available products
                </p>
                <p className="mt-2 text-2xl font-bold text-slate-900">48</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-900">Recent activity</p>

            <div className="mt-4 space-y-3">
              {transactions.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        item.up ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {item.up ? (
                        <ArrowDownRight className="h-4 w-4" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 rotate-180" />
                      )}
                    </div>

                    <div>
                      <p className="font-medium text-slate-900">{item.name}</p>
                      <p className="text-sm text-slate-500">Completed just now</p>
                    </div>
                  </div>

                  <span
                    className={`text-sm font-semibold ${
                      item.up ? 'text-emerald-600' : 'text-rose-600'
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="md">Deposit</Button>
            <Button variant="secondary" size="md">
              Marketplace
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}