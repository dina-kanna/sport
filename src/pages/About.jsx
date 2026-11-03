
import SectionHeading from "../components/SectionHeading";
import { Link } from "react-router-dom";
import {
  Target,
  Heart,
  Users,
  Trophy,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";

function About() {
  const values = [
    {
      icon: Target,
      title: "Our Vision",
      description:
        "To create a healthier community where everyone can discover their sporting potential.",
    },
    {
      icon: Heart,
      title: "Our Passion",
      description:
        "We believe sports build confidence, discipline and lifelong friendships.",
    },
    {
      icon: Users,
      title: "Our Community",
      description:
        "A welcoming environment where beginners and professionals grow together.",
    },
    {
      icon: Trophy,
      title: "Our Excellence",
      description:
        "We encourage every member to challenge themselves and achieve more.",
    },
  ];

  return (
    <>
      {/* ABOUT HERO */}
      <section className="relative overflow-hidden bg-[#101713] text-white">

        <div className="absolute inset-0 bg-gradient-to-r from-[#101713] via-[#101713]/80 to-transparent" />

        <div className="container-custom relative z-10 py-28 md:py-36">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c7f36b]">
            ✦ Discover the STRIDE story
          </p>

          <h1 className="mt-7 text-6xl font-black leading-[0.95] tracking-tighter md:text-8xl">
            WE LIVE
            <br />
            FOR THE
            <br />
            <span className="text-[#c7f36b]">GAME.</span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-8 text-gray-200">
            More than a place to play. STRIDE is a community built on
            passion, teamwork, fitness and the belief that everyone
            has the power to achieve greatness.
          </p>

          <Link to="/sports" className="primary-button mt-8">
            Discover our sports <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section-padding container-custom">
        <div className="grid items-center gap-12 md:grid-cols-2">
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


            <div className="absolute -bottom-6 right-5 rounded-2xl bg-[#c7f36b] p-6 shadow-xl md:-right-6">
              <h3 className="text-4xl font-black text-[#17251f]">2012</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-[#17251f]">
                Our journey began
              </p>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-green-700">
              01 / Our story
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight tracking-tighter text-[#17251f]">
              BUILT ON
              <br />
              THE LOVE
              <br />
              OF THE GAME.
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-600">
              STRIDE began with a simple idea: create a place where
              people can come together through sports. What started
              as a small sporting community has grown into a club
              that celebrates fitness, friendship and achievement.
            </p>

            <p className="mt-4 text-sm leading-8 text-gray-600">
              Today, we welcome players of different ages and skill
              levels. From first-time beginners to experienced
              athletes, everyone has a place at STRIDE.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Professional sports coaching",
                "Friendly and inclusive environment",
                "Training for all skill levels",
                "Community events and tournaments",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-green-700" size={19} />
                  <span className="text-sm font-semibold text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="bg-[#c7f36b] py-14">
        <div className="container-custom grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[
            ["1,200+", "Happy Members"],
            ["12+", "Expert Coaches"],
            ["05", "Different Sports"],
            ["40+", "Club Tournaments"],
          ].map(([number, label]) => (
            <div key={label}>
              <h3 className="text-4xl font-black tracking-tighter text-[#17251f] md:text-5xl">
                {number}
              </h3>
              <p className="mt-2 text-xs font-black uppercase tracking-widest text-[#17251f]/70">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="section-padding bg-[#17251f] text-white">
        <div className="container-custom grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#c7f36b]">
              02 / Our purpose
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight tracking-tighter">
              BIGGER THAN
              <br />
              <span className="text-[#c7f36b]">THE SCORE.</span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-300">
              We believe success is not just about winning matches.
              It is about becoming stronger, learning new skills,
              supporting teammates and enjoying every step of
              the journey.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/20 p-5">
                <Target className="mb-4 text-[#c7f36b]" size={30} />
                <h3 className="text-xl font-black">Our Mission</h3>
                <p className="mt-3 text-xs leading-6 text-gray-300">
                  Make sports accessible, enjoyable and inspiring
                  for everyone.
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 p-5">
                <Trophy className="mb-4 text-[#c7f36b]" size={30} />
                <h3 className="text-xl font-black">Our Vision</h3>
                <p className="mt-3 text-xs leading-6 text-gray-300">
                  Build a community of confident, active and
                  passionate athletes.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1000"
              alt="Athlete running on a track"
              loading="lazy"
              className="h-[450px] w-full object-cover transition duration-700 hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="section-padding container-custom">
        <SectionHeading
          eyebrow="03 / What makes us different"
          title="THE VALUES THAT DRIVE US."
          description="Our culture is built around the things that make sports meaningful: passion, teamwork, determination and growth."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="group rounded-2xl border border-gray-200 bg-[#f5f6f0] p-7 transition duration-300 hover:-translate-y-2 hover:bg-[#17251f] hover:text-white hover:shadow-xl"
              >
                <div className="mb-7 grid h-14 w-14 place-items-center rounded-xl bg-[#c7f36b] text-[#17251f]">
                  <Icon size={27} />
                </div>

                <p className="text-xs font-black uppercase tracking-widest text-green-700 group-hover:text-[#c7f36b]">
                  0{index + 1} / STRIDE VALUES
                </p>

                <h3 className="mt-4 text-2xl font-black">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600 group-hover:text-gray-300">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* IMAGE BANNER */}
      <section className="relative overflow-hidden bg-[#101713] py-24 text-center text-white">
        <img
          src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=1600"
          alt="Football players on a sports field"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-[#101713]/40" />

        <div className="container-custom relative z-10">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c7f36b]">
            Your journey starts here
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tighter md:text-7xl">
            FIND YOUR PASSION.
            <br />
            <span className="text-[#c7f36b]">MAKE YOUR MOVE.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-200">
            Join the STRIDE community and discover what you can
            achieve through sports.
          </p>

          <Link to="/membership" className="primary-button mt-8">
            Become a member ↗
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;
