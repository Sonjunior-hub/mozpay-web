import { Button, Container } from '@/components/ui';
import { NAV_LINKS } from './Navbar.constants';

export default function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-white/30
        shadow-sm
        border-slate-200/60
        bg-white/70
        backdrop-blur-xl
      "
    >
      <Container>
        <div
          className="
            flex
            h-20
            items-center
            justify-between
          "
        >
          {/* Logo */}

          <a
            href="/"
            className="
              text-2xl
              font-bold
              text-blue-600
            "
          >
            MozPay
          </a>

          {/* Menu */}

          <nav
            className="
              hidden
              items-center
              gap-8
              md:flex
            "
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  text-sm
                  font-medium
                  text-slate-600
                  transition-colors
                  hover:text-blue-600
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}

          <div
            className="
              hidden
              items-center
              gap-3
              md:flex
            "
          >
            <Button variant="ghost">
              Login
            </Button>

            <Button>
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}