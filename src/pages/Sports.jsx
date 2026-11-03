
import { sports } from "../data/siteData";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Trophy,
  Users,
  Dumbbell,
} from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Expert Coaching",
    description:
      "Learn from experienced coaches who help you develop your sporting skills.",
  },
  {
    icon: Users,
    title: "Team Community",
    description:
      "Meet new people, build friendships and become part of the STRIDE family.",
  },
  {
    icon: Dumbbell,
    title: "All Skill Levels",
    description:
      "Whether you are a beginner or experienced athlete, there is a place for you.",
  },
];

function Sports() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#101713] text-white">
        <img
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1800&q=85"
          alt="Athletes training on a running track"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#101713] via-[#101713]/80 to-transparent" />

        <div className="container-custom relative z-10 py-28 md:py-36">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c7f36b]">
            ✦ Discover your game
          </p>

          <h1 className="mt-7 text-6xl font-black leading-[0.95] tracking-tighter md:text-8xl">
            FIND YOUR
            <br />
            <span className="text-[#c7f36b]">SPORT.</span>
            <br />
            OWN YOUR
            <br />
            GAME.
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-8 text-gray-200">
            From the excitement of team sports to the precision of
            racket sports, discover new challenges, build your skills
            and find your place at STRIDE.
          </p>

          <Link to="/membership" className="primary-button mt-8">
            Join the club <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* SPORTS INTRO AND CARDS */}
      <section className="section-padding container-custom">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-green-700">
              01 / Explore our activities
            </p>

            <h2 className="mt-4 text-5xl font-black leading-tight tracking-tighter text-[#17251f] md:text-6xl">
              PICK YOUR
              <br />
              PLAYGROUND.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-8 text-gray-600">
            Every sport has its own energy. Find the one that inspires
            you, challenge yourself and enjoy expert coaching in a
            welcoming environment.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {sports.map((sport, index) => (
            <article
              key={sport.name}
              className="group relative isolate min-h-[390px] overflow-hidden rounded-3xl bg-[#17251f] text-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* SPORT IMAGE WITH FALLBACK */}
              <img
                src={sport.image || sport.fallbackImage}
                alt={`${sport.name} at STRIDE Athletic Club`}
                loading="lazy"
                className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                onError={(e) => {
                  const img = e.currentTarget;

                  if (img.dataset.fallbackApplied === "true") {
                    img.style.display = "none";
                    return;
                  }

                  img.dataset.fallbackApplied = "true";
                  img.src =
                    sport.fallbackImage ||
                    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=85";
                }}
              />

              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101713] via-[#101713]/40 to-transparent" />

              <div className="flex h-full min-h-[390px] flex-col justify-between p-7">
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-white/30 bg-black/20 px-4 py-2 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                    {sport.category}
                  </span>

                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#c7f36b] text-[#17251f] transition group-hover:rotate-45">
                    <ArrowUpRight size={22} />
                  </span>
                </div>

                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#c7f36b]">
                    SPORT {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="text-4xl font-black tracking-tighter md:text-5xl">
                    {sport.name}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-gray-200">
                    {sport.description}
                  </p>

                  <Link
                    to="/membership"
                    className="mt-6 inline-flex items-center gap-2 border-b-2 border-[#c7f36b] pb-2 text-xs font-black uppercase tracking-widest transition hover:text-[#c7f36b]"
                  >
                    Start training
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE STRIDE */}
      <section className="bg-[#17251f] py-20 text-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c7f36b]">
              02 / The STRIDE difference
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tighter md:text-6xl">
              MORE THAN JUST PLAY.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-300">
              We create an environment where every player can improve,
              compete and enjoy the journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/15 bg-white/5 p-8 transition hover:-translate-y-2 hover:bg-white/10"
                >
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-xl bg-[#c7f36b] text-[#17251f]">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#c7f36b] py-24 text-center text-[#17251f]">
        <div className="container-custom">
          <p className="text-xs font-black uppercase tracking-[0.2em]">
            03 / Your next move
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-black leading-tight tracking-tighter md:text-7xl">
            READY TO PLAY
            <br />
            YOUR BEST GAME?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7">
            Choose your sport, meet your coaches and become part of
            a community that motivates you to do more.
          </p>

          <Link
            to="/membership"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#17251f] px-8 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:-translate-y-1 hover:bg-black"
          >
            Explore membership
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Sports;
