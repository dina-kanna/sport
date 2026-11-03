
import { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Dumbbell,
  Trophy,
} from "lucide-react";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Sports", path: "/sports" },
  { name: "Membership", path: "/membership" },
  { name: "Coaches", path: "/coaches" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const socialClass =
    "grid h-10 w-10 place-items-center rounded-xl border border-white/15 text-gray-300 transition hover:border-[#c7f36b] hover:bg-[#c7f36b] hover:text-[#17251f]";

  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#17251f]/10 bg-[#f5f6f0]/95 backdrop-blur-xl">
        <div className="container-custom flex min-h-[82px] items-center justify-between gap-5">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-2"
          >
            <span className="grid h-11 w-11 rotate-[-6deg] place-items-center rounded-xl bg-[#c7f36b] text-2xl font-black text-[#17251f] transition duration-300 group-hover:rotate-0">
              S
            </span>

            <span>
              <span className="block text-2xl font-black leading-none tracking-tighter text-[#17251f]">
                STRIDE<span className="text-green-800">.</span>
              </span>
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.28em] text-gray-500">
                Athletic Club
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative py-3 text-[11px] font-extrabold uppercase tracking-wider transition ${
                    isActive
                      ? "text-green-800 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#c7f36b]"
                      : "text-gray-600 hover:text-green-800"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/membership"
            className="hidden shrink-0 items-center gap-3 rounded-full bg-[#17251f] px-6 py-3.5 text-[10px] font-black uppercase tracking-wider text-white transition duration-300 hover:-translate-y-1 hover:bg-green-900 md:inline-flex"
          >
            Join the club
            <ArrowUpRight size={16} className="text-[#c7f36b]" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-11 w-11 place-items-center rounded-xl bg-[#17251f] text-[#c7f36b] transition hover:bg-green-900 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={`overflow-hidden border-t border-[#17251f]/10 bg-[#f5f6f0] transition-all duration-300 lg:hidden ${
            menuOpen
              ? "max-h-[650px] opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }`}
        >
          <nav className="container-custom py-5">
            <div className="grid gap-1">
              {navigation.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-black uppercase tracking-wider transition ${
                      isActive
                        ? "bg-[#c7f36b] text-[#17251f]"
                        : "text-gray-600 hover:bg-[#e8ebdf] hover:text-[#17251f]"
                    }`
                  }
                >
                  <span>
                    <span className="mr-4 text-[10px] opacity-40">
                      0{index + 1}
                    </span>
                    {item.name}
                  </span>
                  <ArrowUpRight size={17} />
                </NavLink>
              ))}
            </div>

            <Link
              to="/membership"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-center gap-3 rounded-full bg-[#17251f] px-6 py-4 text-xs font-black uppercase tracking-wider text-white"
            >
              Become a member
              <ArrowUpRight size={17} className="text-[#c7f36b]" />
            </Link>
          </nav>
        </div>
      </header>

      {/* Main page */}
      <main key={location.pathname}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="overflow-hidden bg-[#101713] text-white">
        {/* Footer CTA */}
        <div className="border-b border-white/10 bg-[#17251f] py-12">
          <div className="container-custom flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#c7f36b]">
                Your next chapter starts here
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight tracking-tighter md:text-5xl">
                READY TO FIND YOUR STRIDE?
              </h2>

              <p className="mt-3 text-sm text-gray-400">
                Move more. Play better. Become part of our community.
              </p>
            </div>

            <Link
              to="/membership"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#c7f36b] px-7 py-4 text-xs font-black uppercase tracking-wider text-[#17251f] transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Join STRIDE
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* Footer content */}
        <div className="container-custom py-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#c7f36b] text-2xl font-black text-[#17251f]">
                  S
                </span>

                <span>
                  <span className="block text-3xl font-black leading-none tracking-tighter">
                    STRIDE.
                  </span>
                  <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                    Athletic Club
                  </span>
                </span>
              </Link>

              <p className="mt-6 max-w-xs text-sm leading-8 text-gray-400">
                More than a sports club. A community built on passion,
                teamwork and the belief that everyone has a stronger
                version of themselves waiting to emerge.
              </p>

              {/* Social links */}
              <div className="mt-7 flex gap-3">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className={socialClass}
                >
                  <span className="text-xl font-bold">◎</span>
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className={socialClass}
                >
                  <span className="text-xl font-black">f</span>
                </a>

                <a
                  href="mailto:hello@strideclub.example"
                  aria-label="Email"
                  className={socialClass}
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider">
                Explore
              </h3>

              <div className="mt-6 h-[3px] w-10 bg-[#c7f36b]" />

              <ul className="mt-6 space-y-4">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="group inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#c7f36b]"
                    >
                      <ArrowUpRight
                        size={13}
                        className="text-[#c7f36b] opacity-0 transition group-hover:opacity-100"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sports */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider">
                Our sports
              </h3>

              <div className="mt-6 h-[3px] w-10 bg-[#c7f36b]" />

              <ul className="mt-6 space-y-4">
                {[
                  "Cricket",
                  "Football",
                  "Basketball",
                  "Badminton",
                  "Tennis",
                ].map((sport) => (
                  <li key={sport}>
                    <Link
                      to="/sports"
                      className="group inline-flex items-center gap-3 text-sm text-gray-400 transition hover:text-[#c7f36b]"
                    >
                      <Dumbbell
                        size={14}
                        className="text-[#c7f36b] transition group-hover:rotate-12"
                      />
                      {sport}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider">
                Get in touch
              </h3>

              <div className="mt-6 h-[3px] w-10 bg-[#c7f36b]" />

              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={19}
                    className="mt-1 shrink-0 text-[#c7f36b]"
                  />
                  <p className="text-sm leading-7 text-gray-400">
                    12 Sports Avenue,
                    <br />
                    Salem, Tamil Nadu, India
                  </p>
                </div>

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-[#c7f36b]"
                >
                  <Phone size={18} className="text-[#c7f36b]" />
                  +91 98765 43210
                </a>

                <a
                  href="mailto:hello@strideclub.example"
                  className="flex items-center gap-3 break-all text-sm text-gray-400 transition hover:text-[#c7f36b]"
                >
                  <Mail size={18} className="shrink-0 text-[#c7f36b]" />
                  hello@strideclub.example
                </a>
              </div>
            </div>
          </div>

          {/* Footer highlight */}
          <div className="mt-16 overflow-hidden rounded-2xl bg-[#c7f36b] p-6 text-[#17251f] md:flex md:items-center md:justify-between md:px-9">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#17251f] text-[#c7f36b]">
                <Trophy size={23} />
              </div>

              <div>
                <h3 className="text-lg font-black">
                  MOVE WITH PURPOSE.
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#17251f]/70">
                  Play with heart. Grow together.
                </p>
              </div>
            </div>

            <Link
              to="/events"
              className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider transition hover:gap-4 md:mt-0"
            >
              Explore club events
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* Copyright */}
          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-[10px] font-semibold uppercase tracking-wider text-gray-500 md:flex-row md:items-center">
            <p>
              © {new Date().getFullYear()} STRIDE Athletic Club. All rights reserved.
            </p>

            <p>
              Made for the love of the game{" "}
              <span className="text-[#c7f36b]">✳</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
