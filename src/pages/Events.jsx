
import SectionHeading from "../components/SectionHeading";
import { events } from "../data/siteData";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  MapPin,
  Trophy,
  Users,
  Zap,
  Medal,
  Ticket,
} from "lucide-react";

const eventImages = [
  "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1000&q=85",
];

const benefits = [
  {
    icon: Trophy,
    title: "Compete & achieve",
    description:
      "Challenge yourself, test your skills and celebrate every sporting achievement.",
  },
  {
    icon: Users,
    title: "Meet your community",
    description:
      "Connect with other players, build friendships and enjoy the team spirit.",
  },
  {
    icon: Medal,
    title: "Win new experiences",
    description:
      "Discover new opportunities, develop your talent and create lasting memories.",
  },
];

function Events() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#17251f] py-20 text-white md:py-28">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full border border-white/10" />

        <div className="container-custom relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c7f36b]">
              <span className="h-[2px] w-8 bg-[#c7f36b]" />
              Experience the excitement
            </p>

            <h1 className="mt-7 text-6xl font-black leading-[0.9] tracking-tighter md:text-8xl">
              PLAY.
              <br />
              COMPETE.
              <br />
              <span className="text-[#c7f36b]">CELEBRATE.</span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-8 text-gray-300">
              From friendly matches to exciting tournaments, STRIDE brings
              people together through the power of sport. Find your event,
              gather your team and make every moment count.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#upcoming-events"
                className="primary-button inline-flex items-center gap-3"
              >
                Explore events <ArrowUpRight size={17} />
              </a>

              <Link
                to="/contact"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold transition hover:border-[#c7f36b] hover:text-[#c7f36b]"
              >
                Ask a question
              </Link>
            </div>

            <div className="mt-12 flex gap-10 border-t border-white/15 pt-7">
              <div>
                <h3 className="text-3xl font-black text-[#c7f36b]">12+</h3>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Annual events
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-[#c7f36b]">1.2K+</h3>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Club members
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-[#c7f36b]">5</h3>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Sports
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="h-[400px] overflow-hidden rounded-3xl md:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=90"
                alt="Athletes competing in a sporting event"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#17251f]/80 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c7f36b]">
                  The STRIDE experience
                </p>
                <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                  EVERY GAME
                  <br />
                  HAS A STORY.
                </h2>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-[#c7f36b] p-5 text-[#17251f] shadow-xl md:-left-7">
              <Trophy size={26} />
              <p className="mt-2 text-2xl font-black">GAME ON!</p>
              <p className="text-[10px] font-bold uppercase tracking-widest">
                Make your moment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event ticker */}
      <section className="overflow-hidden bg-[#c7f36b] py-5">
        <div className="flex justify-around gap-8 whitespace-nowrap text-xs font-black uppercase tracking-[0.2em] text-[#17251f]">
          <span>✳ FRIENDLY MATCHES</span>
          <span>✳ CLUB CHAMPIONSHIPS</span>
          <span>✳ COMMUNITY DAYS</span>
          <span>✳ TEAM TOURNAMENTS</span>
        </div>
      </section>

      {/* Upcoming events */}
      <section
        id="upcoming-events"
        className="section-padding container-custom scroll-mt-24"
      >
        <SectionHeading
          eyebrow="What's happening at STRIDE"
          title="FIND YOUR NEXT BIG GAME."
          description="Explore upcoming tournaments, club activities and community events. There is always something exciting waiting for you."
        />

        <div className="grid gap-7 md:grid-cols-2">
          {events.map((event, index) => (
            <article
              key={event.name}
              className="group overflow-hidden rounded-3xl bg-[#e8ebdf] transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={eventImages[index % eventImages.length]}
                  alt={event.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#17251f]/80 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-xl bg-[#c7f36b] px-5 py-3 text-center text-[#17251f] shadow-lg">
                  <span className="block text-3xl font-black leading-none">
                    {event.day}
                  </span>
                  <span className="mt-1 block text-[10px] font-black uppercase tracking-widest">
                    {event.month}
                  </span>
                </div>

                <span className="absolute bottom-5 left-5 rounded-full border border-white/40 bg-black/20 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur">
                  {event.category}
                </span>

                <span className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white text-[#17251f] transition group-hover:bg-[#c7f36b]">
                  <ArrowUpRight size={20} />
                </span>
              </div>

              <div className="p-7">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-green-800">
                  STRIDE CLUB EVENT / {String(index + 1).padStart(2, "0")}
                </p>

                <h2 className="mt-3 text-2xl font-black tracking-tight text-[#17251f]">
                  {event.name}
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {event.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#17251f]/10 pt-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <CalendarDays size={15} />
                    {event.day} {event.month}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#17251f] transition hover:text-green-800"
                  >
                    Enquire now <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-7 text-xs leading-6 text-gray-500">
          Event dates and descriptions are sample project content. Please
          confirm actual schedules and registration details with the club.
        </p>
      </section>

      {/* Why participate */}
      <section className="bg-[#17251f] py-20 text-white md:py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c7f36b]">
              More than a competition
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tighter md:text-6xl">
              COME FOR THE GAME.
              <br />
              <span className="text-[#c7f36b]">STAY FOR THE PEOPLE.</span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-gray-300">
              Every STRIDE event is an opportunity to learn, connect and
              discover what you can achieve together.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-2 hover:border-[#c7f36b]/60"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-[#c7f36b] text-[#17251f]">
                    <Icon size={26} />
                  </div>

                  <p className="mt-7 text-xs font-bold text-[#c7f36b]">
                    0{index + 1} / THE EXPERIENCE
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event experience banner */}
      <section className="section-padding container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-[#dce4d2]">
          <div className="grid items-center lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-14">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-green-800">
                Bring your team together
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tighter text-[#17251f] md:text-6xl">
                YOUR TEAM.
                <br />
                YOUR MOMENT.
                <br />
                YOUR VICTORY.
              </h2>

              <p className="mt-6 text-sm leading-8 text-gray-600">
                Interested in participating in a tournament or organising
                a friendly match? Contact our team and let's make it happen.
              </p>

              <Link
                to="/contact"
                className="primary-button mt-8 inline-flex items-center gap-3"
              >
                Organise an event <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="h-72 overflow-hidden lg:h-full lg:min-h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1100&q=85"
                alt="Sports team celebrating together"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to participate */}
      <section className="bg-[#e8ebdf] py-20">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Getting involved is easy"
            title="THREE STEPS. ONE GREAT EXPERIENCE."
            description="Join the STRIDE community and get ready for your next sporting adventure."
          />

          <div className="grid gap-7 md:grid-cols-3">
            {[
              {
                number: "01",
                icon: CalendarDays,
                title: "Choose your event",
                description:
                  "Browse the activities and find a tournament or event that interests you.",
              },
              {
                number: "02",
                icon: Ticket,
                title: "Contact our team",
                description:
                  "Ask about available places, participation details and registration.",
              },
              {
                number: "03",
                icon: Zap,
                title: "Show up & play",
                description:
                  "Bring your energy, enjoy the competition and make new memories.",
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="rounded-2xl bg-[#f5f6f0] p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black tracking-tighter text-[#c7f36b]">
                      {step.number}
                    </span>
                    <Icon size={27} className="text-[#526b37]" />
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-[#17251f]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#c7f36b] py-16 md:py-20">
        <div className="container-custom flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#17251f]/60">
              The next event is waiting
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tighter text-[#17251f] md:text-6xl">
              READY TO GET IN THE GAME?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#17251f]/75">
              Get in touch with STRIDE and discover upcoming tournaments,
              activities and opportunities to play.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#17251f] px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black"
          >
            Contact STRIDE <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Events;
