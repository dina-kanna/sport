
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { sports } from "../data/siteData";
import { ArrowUpRight, Trophy, Users, Dumbbell } from "lucide-react";

const fallbackSportImage =
  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=85";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#101713] text-white">
       <img
    src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=2000&q=90"
    alt="Athletes training and running"
    className="absolute inset-0 h-full w-full object-cover opacity-40"
    onError={(e) => {
      e.currentTarget.style.display = "none";
    }}
  />

        <div className="absolute inset-0 bg-gradient-to-r from-[#101713] via-[#101713]/80 to-transparent" />

        <div className="container-custom relative z-10 grid min-h-[650px] items-center py-20 md:grid-cols-2">
          <div>
            <span className="rounded-full border border-[#c7f36b]/50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#c7f36b]">
              ✦ More than a sports club
            </span>

            <h1 className="mt-8 text-6xl font-black leading-[0.95] tracking-tighter md:text-8xl">
              FIND YOUR
              <br />
              <span className="text-[#c7f36b]">STRIDE.</span>
              <br />
              OWN YOUR
              <br />
              GAME.
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-8 text-gray-200">
              Discover your passion for sports. Train with expert coaches,
              improve your fitness and become part of an energetic community.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/membership"
                onClick={scrollToTop}
                className="primary-button px-7 py-4"
              >
                Join the club <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/sports"
                onClick={scrollToTop}
                className="rounded-full border border-white/60 px-7 py-4 text-xs font-bold transition hover:bg-white hover:text-black"
              >
                Explore sports
              </Link>
            </div>

            <div className="mt-14 grid max-w-lg grid-cols-3 gap-5 border-t border-white/30 pt-7">
              <div>
                <Users className="mb-2 text-[#c7f36b]" />
                <h3 className="text-3xl font-black">1.2K+</h3>
                <p className="text-xs text-gray-300">Members</p>
              </div>

              <div>
                <Trophy className="mb-2 text-[#c7f36b]" />
                <h3 className="text-3xl font-black">12</h3>
                <p className="text-xs text-gray-300">Expert Coaches</p>
              </div>

              <div>
                <Dumbbell className="mb-2 text-[#c7f36b]" />
                <h3 className="text-3xl font-black">
                  {String(sports.length).padStart(2, "0")}
                </h3>
                <p className="text-xs text-gray-300">Sports</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 right-8 hidden rounded-2xl border border-white/30 bg-black/40 p-5 backdrop-blur-md md:block">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c7f36b]">
            Play. Train. Achieve.
          </p>
          <h3 className="mt-2 text-2xl font-black">
            YOUR GAME STARTS HERE.
          </h3>
        </div>
      </section>

      {/* MOVING MESSAGE */}
      <section className="overflow-hidden bg-[#c7f36b] py-4 text-center">
        <p className="text-xs font-black tracking-[0.2em] text-[#17251f]">
          MOVE WITH PURPOSE ✦ PLAY WITH HEART ✦ GROW TOGETHER ✦
        </p>
      </section>

      {/* SPORTS SECTION */}
      <section className="section-padding container-custom">
        <SectionHeading
          eyebrow="01 / Discover your passion"
          title="CHOOSE YOUR GAME."
          description="From the cricket ground to the swimming pool, discover exciting sports and take your performance to the next level."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sports.map((sport, index) => (
            <article
              key={sport.name}
              className="group overflow-hidden rounded-2xl bg-[#e8ebdf] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden bg-[#17251f]">
                <img
                  src={sport.image || sport.fallbackImage || fallbackSportImage}
                  alt={`${sport.name} at STRIDE Athletic Club`}
                  loading="lazy"
                  onError={(e) => {
                    if (!e.currentTarget.dataset.fallbackApplied) {
                      e.currentTarget.dataset.fallbackApplied = "true";
                      e.currentTarget.src =
                        sport.fallbackImage || fallbackSportImage;
                    }
                  }}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <span className="absolute bottom-5 left-5 text-4xl">
                  {sport.icon || "🏅"}
                </span>

                <span className="absolute right-5 top-5 rounded-full bg-[#c7f36b] px-3 py-2 text-[10px] font-black text-[#17251f]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="p-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-green-800">
                  {sport.category}
                </p>

                <h3 className="mt-2 text-2xl font-black text-[#17251f]">
                  {sport.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {sport.description}
                </p>

                <Link
                  to="/sports"
                  onClick={scrollToTop}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider transition group-hover:text-green-800"
                >
                  Explore sport <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/sports"
            onClick={scrollToTop}
            className="dark-button"
          >
            Discover all sports ↗
          </Link>
        </div>
      </section>

      {/* ABOUT PROMOTION */}
      <section className="bg-[#17251f] py-20 text-white">
        <div className="container-custom grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/images/our-story.jpg"
              alt="Athletes training together"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="h-[350px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#c7f36b]">
              02 / Our club
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight tracking-tighter">
              MORE THAN
              <br />
              A GAME.
              <br />
              <span className="text-[#c7f36b]">IT'S A LIFESTYLE.</span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-300">
              STRIDE is a place where passion meets performance.
              We bring people together through sports, fitness,
              teamwork and professional coaching.
            </p>

            <Link
              to="/about"
              onClick={scrollToTop}
              className="primary-button mt-8"
            >
              Discover our story ↗
            </Link>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP PROMOTION */}
      <section className="section-padding bg-[#e8ebdf]">
        <div className="container-custom flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-green-800">
              03 / Your next chapter
            </p>

            <h2 className="section-title mt-4 max-w-2xl">
              READY TO BECOME A CHAMPION?
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-gray-600">
              Find the right membership plan and start your journey
              with STRIDE Athletic Club today.
            </p>
          </div>

          <Link
            to="/membership"
            onClick={scrollToTop}
            className="primary-button"
          >
            View membership plans ↗
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
