
import SectionHeading from "../components/SectionHeading";
import Forms from "../components/Forms";
import { plans } from "../data/siteData";
import { Link } from "react-router-dom";
import {
  Check,
  Crown,
  Zap,
  Trophy,
  ArrowUpRight,
  ShieldCheck,
  Users,
} from "lucide-react";

const planIcons = [Zap, Crown, Trophy];

function Membership() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#101713] text-white">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1800"
          alt="Modern athletic training facility"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#101713] via-[#101713]/85 to-transparent" />

        <div className="container-custom relative z-10 py-28 md:py-36">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c7f36b]">
            ✦ Your journey starts here
          </p>

          <h1 className="mt-7 text-6xl font-black leading-[0.95] tracking-tighter md:text-8xl">
            INVEST IN
            <br />
            <span className="text-[#c7f36b]">YOURSELF.</span>
            <br />
            PLAY BIGGER.
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-8 text-gray-200">
            Great things happen when you make time for yourself.
            Find your membership, train with passionate people
            and take your game to the next level.
          </p>

          <a
            href="#plans"
            className="primary-button mt-8"
          >
            Explore membership <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* MEMBERSHIP BENEFITS */}
      <section className="bg-[#c7f36b] py-10">
        <div className="container-custom grid grid-cols-1 gap-7 text-center sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Quality Coaching",
              text: "Guidance from experienced coaches",
            },
            {
              icon: Users,
              title: "Great Community",
              text: "Meet people who share your passion",
            },
            {
              icon: Trophy,
              title: "Real Progress",
              text: "Build skills and achieve your goals",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center justify-center gap-4"
              >
                <Icon size={32} className="text-[#17251f]" />
                <div className="text-left">
                  <h3 className="text-sm font-black text-[#17251f]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#17251f]/70">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRICING PLANS */}
      <section id="plans" className="section-padding bg-[#f5f6f0]">
        <div className="container-custom">
          <div className="mb-14 text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-green-700">
              01 / Membership options
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tighter text-[#17251f] md:text-6xl">
              CHOOSE YOUR
              <br />
              GAME PLAN.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600">
              Whether you are starting your fitness journey or
              training to perform, we have a plan to match your goals.
            </p>
          </div>

          <div className="grid items-stretch gap-7 md:grid-cols-3">
            {plans.map((plan, index) => {
              const Icon = planIcons[index % planIcons.length];

              return (
                <article
                  key={plan.name}
                  className={`relative flex flex-col overflow-hidden rounded-3xl p-8 transition duration-300 hover:-translate-y-3 hover:shadow-2xl ${
                    plan.featured
                      ? "bg-[#c7f36b] text-[#17251f] shadow-xl md:scale-105"
                      : "border border-gray-200 bg-white text-[#17251f] shadow-sm"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#17251f] px-5 py-3 text-[10px] font-black uppercase tracking-widest text-[#c7f36b]">
                      ★ Most popular
                    </div>
                  )}

                  <div
                    className={`mb-7 grid h-14 w-14 place-items-center rounded-2xl ${
                      plan.featured
                        ? "bg-[#17251f] text-[#c7f36b]"
                        : "bg-[#e8ebdf] text-[#17251f]"
                    }`}
                  >
                    <Icon size={28} />
                  </div>

                  <p className="text-xs font-bold uppercase tracking-widest opacity-60">
                    {plan.description}
                  </p>

                  <h3 className="mt-3 text-3xl font-black tracking-tight">
                    {plan.name}
                  </h3>

                  <div className="mt-5 flex items-end gap-2">
                    <span className="text-5xl font-black tracking-tighter">
                      {plan.price}
                    </span>
                    <span className="pb-2 text-xs font-bold opacity-60">
                      / month
                    </span>
                  </div>

                  <div
                    className={`my-7 h-px ${
                      plan.featured
                        ? "bg-[#17251f]/20"
                        : "bg-gray-200"
                    }`}
                  />

                  <p className="text-xs font-black uppercase tracking-widest">
                    What's included
                  </p>

                  <ul className="my-6 flex-1 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <span
                          className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                            plan.featured
                              ? "bg-[#17251f] text-[#c7f36b]"
                              : "bg-[#e8ebdf] text-green-800"
                          }`}
                        >
                          <Check size={13} strokeWidth={3} />
                        </span>

                        <span className="leading-6">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#register"
                    className={`mt-5 flex items-center justify-center gap-2 rounded-full px-5 py-4 text-xs font-black uppercase tracking-widest transition hover:opacity-80 ${
                      plan.featured
                        ? "bg-[#17251f] text-white"
                        : "bg-[#17251f] text-white"
                    }`}
                  >
                    Choose {plan.name}
                    <ArrowUpRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>

          <p className="mt-10 text-center text-xs text-gray-500">
            All plans are billed monthly. Contact our team for membership details.
          </p>
        </div>
      </section>

      {/* MEMBERSHIP EXPERIENCE */}
      <section className="bg-[#17251f] py-20 text-white">
        <div className="container-custom grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c7f36b]">
              02 / More than a membership
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight tracking-tighter md:text-6xl">
              YOUR CLUB.
              <br />
              YOUR PEOPLE.
              <br />
              <span className="text-[#c7f36b]">YOUR PROGRESS.</span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-300">
              At STRIDE, membership means becoming part of a sporting
              community. Enjoy coaching, meet new teammates, take part
              in events and keep challenging yourself.
            </p>

            <a
              href="#register"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#c7f36b] px-7 py-4 text-xs font-black uppercase tracking-widest text-[#17251f] transition hover:-translate-y-1"
            >
              Get started <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="relative">
       

<img
  src="https://images.pexels.com/photos/9501968/pexels-photo-9501968.jpeg?auto=compress&cs=tinysrgb&w=1200"
  alt="Sports team training"
  className="h-[450px] w-full rounded-3xl object-cover shadow-xl"
  loading="lazy"
  onError={(e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      "https://images.pexels.com/photos/6295751/pexels-photo-6295751.jpeg?auto=compress&cs=tinysrgb&w=1200";
  }}
/>



            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-[#c7f36b] p-6 text-[#17251f] shadow-xl md:-left-7">
              <Trophy size={28} />
              <p className="mt-3 text-2xl font-black">PLAY MORE.</p>
              <p className="text-xs font-bold uppercase tracking-widest">
                Grow every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section
        id="register"
        className="section-padding scroll-mt-24 bg-[#e8ebdf]"
      >
        <div className="container-custom">
          <div className="grid items-start gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-green-700">
                03 / Take the first step
              </p>

              <h2 className="mt-5 text-5xl font-black leading-tight tracking-tighter text-[#17251f] md:text-6xl">
                LET'S GET
                <br />
                YOU
                <br />
                <span className="text-green-700">STARTED.</span>
              </h2>

              <p className="mt-6 text-sm leading-8 text-gray-600">
                Ready to join the STRIDE family? Fill out the
                membership application and our team will help
                you take your next step.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#17251f] text-[#c7f36b]">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#17251f]">
                      Easy registration
                    </h4>
                    <p className="text-xs text-gray-600">
                      Simple membership application
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#17251f] text-[#c7f36b]">
                    <Users size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#17251f]">
                      Friendly support
                    </h4>
                    <p className="text-xs text-gray-600">
                      Our team is here to help
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-xl md:p-9">
              <div className="mb-7">
                <h3 className="text-2xl font-black text-[#17251f]">
                  Membership application
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Tell us a little about yourself.
                </p>
              </div>

              <Forms type="membership" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#c7f36b] py-20 text-center text-[#17251f]">
        <div className="container-custom">
          <p className="text-xs font-black uppercase tracking-[0.2em]">
            Your next chapter begins now
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-black leading-tight tracking-tighter md:text-7xl">
            DON'T JUST WATCH.
            <br />
            BE PART OF THE GAME.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7">
            Find your sport, meet your people and make every
            training session count.
          </p>

          <Link
            to="/sports"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#17251f] px-8 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:-translate-y-1"
          >
            Explore our sports <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Membership;
