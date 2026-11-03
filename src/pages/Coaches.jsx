
import SectionHeading from "../components/SectionHeading";
import { coaches } from "../data/siteData";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Award,
  Dumbbell,
  Heart,
  Target,
  Users,
  Zap,
} from "lucide-react";

const coachImages = [
  "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
];

const coachingValues = [
  {
    icon: Target,
    title: "Personalised training",
    description:
      "Every athlete has different goals. Our coaches adapt sessions to your ability and ambitions.",
  },
  {
    icon: Heart,
    title: "Supportive environment",
    description:
      "We create a welcoming space where beginners and experienced players can improve together.",
  },
  {
    icon: Zap,
    title: "Performance focused",
    description:
      "Build strength, speed, technique and confidence through structured coaching.",
  },
];

const highlights = [
  { number: "12+", label: "Expert coaches" },
  { number: "10+", label: "Years of experience" },
  { number: "1.2K+", label: "Athletes supported" },
  { number: "5", label: "Sports covered" },
];

function Coaches() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#17251f] py-20 text-white md:py-28">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10 md:h-[500px] md:w-[500px]" />
        <div className="absolute -right-8 -top-8 h-64 w-64 rounded-full border border-white/10 md:h-[400px] md:w-[400px]" />

        <div className="container-custom relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c7f36b]">
              <span className="h-[2px] w-8 bg-[#c7f36b]" />
              The people behind your progress
            </p>

            <h1 className="mt-7 text-6xl font-black leading-[0.9] tracking-tighter md:text-8xl">
              TRAIN WITH
              <br />
              <span className="text-[#c7f36b]">PURPOSE.</span>
              <br />
              GROW WITH
              <br />
              THE BEST.
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-8 text-gray-300">
              Great athletes are built with great guidance. Meet the passionate
              coaches who bring experience, energy and dedication to every
              training session at STRIDE.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/membership"
                className="primary-button inline-flex items-center gap-3"
              >
                Train with us <ArrowUpRight size={17} />
              </Link>

              <a
                href="#team"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold transition hover:border-[#c7f36b] hover:text-[#c7f36b]"
              >
                Meet the coaches
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative h-[390px] overflow-hidden rounded-3xl md:h-[490px]">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1100&q=90"
                alt="Athletes training in a modern gym"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17251f]/80 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c7f36b]">
                  Stronger together
                </p>
                <p className="mt-2 text-3xl font-black text-white">
                  YOUR NEXT LEVEL
                  <br />
                  STARTS HERE.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-[#c7f36b] p-5 text-[#17251f] shadow-xl md:-left-8">
              <Award size={25} />
              <p className="mt-2 text-3xl font-black">100%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest">
                Passion for sport
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#c7f36b] py-9">
        <div className="container-custom grid grid-cols-2 gap-7 md:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="text-center">
              <h2 className="text-4xl font-black tracking-tighter text-[#17251f] md:text-5xl">
                {item.number}
              </h2>
              <p className="mt-2 text-[10px] font-extrabold uppercase tracking-widest text-[#17251f]/70">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-padding container-custom">
        <SectionHeading
          eyebrow="The STRIDE family"
          title="MEET YOUR GAME CHANGERS."
          description="From technical experts to performance mentors, our coaching team is here to help you become a stronger, smarter and more confident athlete."
        />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach, index) => (
            <article
              key={coach.name}
              className="group overflow-hidden rounded-2xl bg-[#e8ebdf] transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-[330px] overflow-hidden bg-[#d4dccb]">
                <img
                  src={coachImages[index % coachImages.length]}
                  alt={`${coach.name}, ${coach.role}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#17251f]/80 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-[#c7f36b] px-4 py-2 text-[9px] font-black uppercase tracking-widest text-[#17251f]">
                  Coach {String(index + 1).padStart(2, "0")}
                </span>

                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#c7f36b]">
                    {coach.experience}
                  </p>
                  <h2 className="mt-2 text-3xl font-black tracking-tight">
                    {coach.name}
                  </h2>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm font-bold text-[#526b37]">
                  {coach.role}
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Helping athletes improve their skills, develop discipline
                  and enjoy the journey of becoming better every day.
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#17251f]/10 pt-5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500">
                    STRIDE Coaching Team
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#17251f] text-[#c7f36b] transition group-hover:bg-[#c7f36b] group-hover:text-[#17251f]">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Coaching philosophy */}
      <section className="bg-[#17251f] py-20 text-white md:py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c7f36b]">
              More than just coaching
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tighter md:text-6xl">
              WE BUILD
              <span className="text-[#c7f36b]"> ATHLETES.</span>
              <br />
              WE BUILD CHARACTER.
            </h2>

            <p className="mt-5 text-sm leading-8 text-gray-300">
              Our coaching philosophy combines expert guidance, positive
              motivation and practical training to help every member reach
              their potential.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {coachingValues.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-2 hover:border-[#c7f36b]/60"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-[#c7f36b] text-[#17251f]">
                    <Icon size={25} />
                  </div>

                  <p className="mt-7 text-xs font-bold text-[#c7f36b]">
                    0{index + 1} / OUR APPROACH
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training journey */}
      <section className="section-padding container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1100&q=85"
              alt="Athlete working on strength and fitness"
              className="h-[400px] w-full object-cover md:h-[470px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17251f]/70 to-transparent" />
            <p className="absolute bottom-7 left-7 text-3xl font-black text-white md:text-4xl">
              EVERY REP.
              <br />
              EVERY SESSION.
              <br />
              EVERY VICTORY.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-800">
              Your journey matters
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tighter text-[#17251f] md:text-6xl">
              SMALL STEPS.
              <br />
              BIG RESULTS.
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-600">
              Whether you are stepping onto the court for the first time or
              preparing for your next competition, our coaches will guide you
              through every stage of your journey.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Understand your goals and current skill level",
                "Follow a structured training programme",
                "Track your progress and celebrate improvements",
                "Build confidence through practice and teamwork",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#c7f36b] text-[#17251f]">
                    <Target size={15} />
                  </span>
                  <p className="text-sm font-semibold text-[#17251f]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/sports"
              className="primary-button mt-9 inline-flex items-center gap-3"
            >
              Explore our sports <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#c7f36b] py-16 md:py-20">
        <div className="container-custom flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#17251f]/60">
              Your potential is waiting
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tighter text-[#17251f] md:text-6xl">
              READY TO LEVEL UP?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#17251f]/75">
              Find your sport, meet your coach and start building the stronger
              version of yourself at STRIDE.
            </p>
          </div>

          <Link
            to="/membership"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#17251f] px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black"
          >
            Join STRIDE <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Coaches;
