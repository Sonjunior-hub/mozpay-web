import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from 'react-icons/fa6';

import { Container } from '@/components/ui';

const productLinks = [
  'Marketplace',
  'Wallet',
  'Subscriptions',
  'Pricing',
];

const companyLinks = [
  'About',
  'Careers',
  'Blog',
  'Contact',
];

const resourceLinks = [
  'Help Center',
  'Privacy Policy',
  'Terms of Service',
  'Support',
];

const socialLinks = [
  { icon: FaFacebookF, href: '#' },
  { icon: FaInstagram, href: '#' },
  { icon: FaXTwitter, href: '#' },
  { icon: FaLinkedinIn, href: '#' },
  { icon: FaGithub, href: '#' },
];
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900">
              MozPay
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-600">
              The safest and easiest marketplace to buy premium
              digital subscriptions in Mozambique.
            </p>

            <div className="mt-8 flex gap-4">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-900 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-600 transition hover:text-slate-900"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-600 transition hover:text-slate-900"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Resources
            </h3>

            <ul className="mt-5 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-600 transition hover:text-slate-900"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 py-8 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} MozPay. All rights reserved.
          </p>

          <p>
            Built with ❤️ using React + TypeScript
          </p>
        </div>
      </Container>
    </footer>
  );
}