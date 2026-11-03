
import SectionHeading from "../components/SectionHeading";
import Forms from "../components/Forms";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  MessageCircle,
  Send,
  Headphones,
} from "lucide-react";
import { Link } from "react-router-dom";

function Contact() {
  const details = [
    {
      icon: MapPin,
      title: "Visit our club",
      value: "12 Sports Avenue, Madurai, Tamil Nadu, India",
      extra: "Come and experience STRIDE",
      color: "bg-[#c7f36b]",
    },
    {
      icon: Phone,
      title: "Give us a call",
      value: "+91 98765 43210",
      extra: "We're happy to help",
      color: "bg-[#d9c49a]",
    },
    {
      icon: Mail,
      title: "Send an email",
      value: "hello@strideclub.example",
      extra: "We usually respond within 24 hours",
      color: "bg-[#b9d4c8]",
    },
    {
      icon: Clock,
      title: "Opening hours",
      value: "Monday – Saturday",
      extra: "6:00 AM – 9:00 PM",
      color: "bg-[#d8d9f2]",
    },
  ];

  const reasons = [
    "Membership and pricing information",
    "Sports facilities and training sessions",
    "Personal coaching enquiries",
    "Events and tournament registration",
  ];

  const socialButton =
    "grid h-14 w-14 place-items-center rounded-2xl bg-[#17251f] text-[#c7f36b] transition hover:-translate-y-1 hover:bg-[#c7f36b] hover:text-[#17251f]";

  return (
    <>
      {/* Hero section */}
      <section className="relative overflow-hidden bg-[#17251f] py-20 text-white md:py-28">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full border border-white/10" />

        <div className="container-custom relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c7f36b]">
              <span className="h-[2px] w-8 bg-[#c7f36b]" />
              We'd love to hear from you
            </p>

            <h1 className="mt-7 text-6xl font-black leading-[0.9] tracking-tighter md:text-8xl">
              LET'S
              <br />
              TALK
              <br />
              <span className="text-[#c7f36b]">SPORT.</span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-8 text-gray-300">
              Have a question, an idea or simply want to get started?
              Our friendly team is here to help you find your place at
              STRIDE Athletic Club.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="primary-button inline-flex items-center gap-3"
              >
                Send an enquiry <ArrowUpRight size={17} />
              </a>

              <a
                href="tel:+919876543210"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold transition hover:border-[#c7f36b] hover:text-[#c7f36b]"
              >
                Call our team
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4 border-t border-white/15 pt-7">
              <div className="flex -space-x-3">
                {[
                  "photo-1534528741775-53994a69daeb",
                  "photo-1500648767791-00dcc994a43e",
                  "photo-1506794778202-cad84cf45f1d",
                ].map((photo) => (
                  <img
                    key={photo}
                    src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=100&q=80`}
                    alt="STRIDE community member"
                    className="h-10 w-10 rounded-full border-2 border-[#17251f] object-cover"
                  />
                ))}
              </div>

              <div>
                <p className="text-sm font-bold">A community that cares.</p>
                <p className="mt-1 text-xs text-gray-400">
                  We're ready to welcome you.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="h-[400px] overflow-hidden rounded-3xl md:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1100&q=90"
                alt="Modern athletic club training facility"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#17251f]/80 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c7f36b]">
                  STRIDE Athletic Club
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-4xl">
                  YOUR GAME.
                  <br />
                  YOUR PEOPLE.
                  <br />
                  YOUR PLACE.
                </h2>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl bg-[#c7f36b] p-5 text-[#17251f] shadow-xl md:-right-6">
              <MessageCircle size={30} />
              <div>
                <p className="text-sm font-black">Let's connect!</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider">
                  We're listening
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact information */}
      <section className="section-padding container-custom">
        <SectionHeading
          eyebrow="Find your way to us"
          title="WE'RE EASY TO REACH."
          description="Whether you want to visit, call or send a message, getting in touch with our team is simple."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl bg-[#e8ebdf] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl ${item.color} text-[#17251f] transition group-hover:rotate-6`}
                >
                  <Icon size={25} />
                </div>

                <h3 className="mt-6 text-xl font-black text-[#17251f]">
                  {item.title}
                </h3>

                <p className="mt-3 break-words text-sm font-semibold leading-7 text-gray-700">
                  {item.value}
                </p>

                <p className="mt-3 text-xs text-gray-500">
                  {item.extra}
                </p>

                <div className="mt-6 h-[2px] w-10 bg-[#c7f36b] transition-all group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </section>

      {/* Form and information */}
      <section
        id="contact-form"
        className="scroll-mt-24 bg-[#17251f] py-20 text-white md:py-24"
      >
        <div className="container-custom grid items-start gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c7f36b]">
              Get started today
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-tighter md:text-7xl">
              TELL US
              <br />
              WHAT YOU
              <br />
              <span className="text-[#c7f36b]">NEED.</span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-gray-300">
              We're always excited to meet new members. Send us your
              questions and our team will help you choose the right
              membership, sport or coaching programme.
            </p>

            <div className="mt-10 space-y-5">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#c7f36b] text-[#17251f]">
                    <ArrowUpRight size={15} />
                  </span>

                  <p className="text-sm font-medium text-gray-200">
                    {reason}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.05] p-6">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#c7f36b] text-[#17251f]">
                  <Headphones size={24} />
                </div>

                <div>
                  <h3 className="font-black">Need quick assistance?</h3>
                  <p className="mt-1 text-xs text-gray-400">
                    Talk directly with our club team.
                  </p>
                </div>
              </div>

              <a
                href="tel:+919876543210"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#c7f36b] hover:underline"
              >
                +91 98765 43210 <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-[#f5f6f0] p-6 text-[#17251f] shadow-2xl md:p-9">
            <div className="mb-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-green-800">
                Contact form
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                SEND US A MESSAGE.
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Complete the form below and we'll be happy to assist you.
              </p>
            </div>

            <Forms type="contact" />
          </div>
        </div>
      </section>

      {/* Location section */}
      <section className="section-padding container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-800">
              Find us in Madurai
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tighter text-[#17251f] md:text-6xl">
              YOUR NEXT
              <br />
              GAME IS
              <br />
              <span className="text-green-800">CLOSER.</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-8 text-gray-600">
              Visit STRIDE Athletic Club and discover a place where
              fitness, friendship and sport come together.
            </p>

            <div className="mt-8 flex items-start gap-4">
              <div className="rounded-xl bg-[#c7f36b] p-3">
                <MapPin size={23} />
              </div>

              <div>
                <h3 className="font-black">Our club location</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  12 Sports Avenue,
                  <br />
                  Madurai, Tamil Nadu, India.
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=12+Sports+Avenue+Madurai+Tamil+Nadu+India"
              target="_blank"
              rel="noreferrer"
              className="primary-button mt-8 inline-flex items-center gap-3"
            >
              Get directions <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#e8ebdf]">
            <img
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1100&q=85"
              alt="Athletic outdoor sports and cycling"
              className="h-[350px] w-full object-cover md:h-[440px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#17251f]/70 to-transparent" />

            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c7f36b]">
                STRIDE Athletic Club
              </p>
              <h3 className="mt-2 text-3xl font-black">
                COME BE PART
                <br />
                OF THE TEAM.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Social section */}
      <section className="bg-[#e8ebdf] py-16">
        <div className="container-custom flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-800">
              Follow the STRIDE community
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#17251f] md:text-4xl">
              THE GAME DOESN'T STOP HERE.
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Stay connected with club updates, sports events and member stories.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className={socialButton}
            >
              <span className="text-3xl font-bold">◎</span>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className={socialButton}
            >
              <span className="text-2xl font-black">f</span>
            </a>

            <a
              href="mailto:hello@strideclub.example"
              aria-label="Email STRIDE"
              className={socialButton}
            >
              <Send size={22} />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#c7f36b] py-16 md:py-20">
        <div className="container-custom flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#17251f]/60">
              Your journey starts here
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tighter text-[#17251f] md:text-6xl">
              READY TO JOIN STRIDE?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#17251f]/75">
              Find your sport, meet your people and become part of something
              bigger. Let's get moving!
            </p>
          </div>

          <Link
            to="/membership"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#17251f] px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black"
          >
            Explore membership <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Contact;
