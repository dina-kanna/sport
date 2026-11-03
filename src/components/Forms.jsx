
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Trophy,
  Dumbbell,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

function Forms({ type = "contact" }) {
  const isMembership = type === "membership";

  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    plan: "",
    sport: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [success, setSuccess] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSuccess(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSuccess(true);
    setFormData(initialFormData);
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#dce2d5] bg-white px-4 py-3.5 text-sm font-medium text-[#17251f] outline-none transition duration-300 placeholder:text-gray-400 hover:border-[#a6bd80] focus:border-[#789c42] focus:ring-4 focus:ring-[#c7f36b]/30";

  const labelClass =
    "block text-[10px] font-black uppercase tracking-[0.15em] text-[#526052]";

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-[26px] border border-[#dce2d5] bg-[#f5f6f0] p-5 shadow-xl shadow-[#17251f]/5 sm:p-8 md:p-10"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border-[25px] border-[#c7f36b]/20" />

      {/* Form heading */}
      <div className="relative mb-8">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#c7f36b]/30 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#354b24]">
          <Sparkles size={14} />
          {isMembership ? "Become a member" : "We are here to help"}
        </div>

        <h3 className="text-3xl font-black leading-tight tracking-tighter text-[#17251f] sm:text-4xl">
          {isMembership ? (
            <>
              START YOUR
              <br />
              <span className="text-green-800">STRIDE JOURNEY.</span>
            </>
          ) : (
            <>
              LET'S TALK
              <br />
              <span className="text-green-800">SPORTS.</span>
            </>
          )}
        </h3>

        <p className="mt-3 max-w-md text-sm leading-7 text-gray-500">
          {isMembership
            ? "Fill in your details and our team will help you find the right membership."
            : "Have a question or an idea? Send us a message. We'd love to hear from you."}
        </p>
      </div>

      {/* Form fields */}
      <div className="relative grid gap-5 md:grid-cols-2">

        {/* Name */}
        <label className={labelClass}>
          <span className="flex items-center gap-2">
            <User size={14} className="text-green-800" />
            Full Name
          </span>

          <input
            className={inputClass}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            autoComplete="name"
            minLength={2}
            required
          />
        </label>

        {/* Email */}
        <label className={labelClass}>
          <span className="flex items-center gap-2">
            <Mail size={14} className="text-green-800" />
            Email Address
          </span>

          <input
            className={inputClass}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </label>

        {/* Membership fields */}
        {isMembership && (
          <>
            <label className={labelClass}>
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-green-800" />
                Phone Number
              </span>

              <input
                className={inputClass}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                autoComplete="tel"
                pattern="[0-9+() -]{8,16}"
                required
              />
            </label>

            <label className={labelClass}>
              <span className="flex items-center gap-2">
                <Trophy size={14} className="text-green-800" />
                Membership Plan
              </span>

              <select
                className={inputClass}
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                required
              >
                <option value="">Choose your plan</option>
                <option value="Starter">Starter — ₹999/month</option>
                <option value="All Access">All Access — ₹1,799/month</option>
                <option value="Performance">Performance — ₹2,999/month</option>
              </select>
            </label>

            <label className={`${labelClass} md:col-span-2`}>
              <span className="flex items-center gap-2">
                <Dumbbell size={14} className="text-green-800" />
                Preferred Sport
              </span>

              <select
                className={inputClass}
                name="sport"
                value={formData.sport}
                onChange={handleChange}
                required
              >
                <option value="">Choose your favourite sport</option>
                <option value="Cricket">Cricket</option>
                <option value="Football">Football</option>
                <option value="Basketball">Basketball</option>
                <option value="Badminton">Badminton</option>
                <option value="Tennis">Tennis</option>
              </select>
            </label>
          </>
        )}

        {/* Contact fields */}
        {!isMembership && (
          <>
            <label className={`${labelClass} md:col-span-2`}>
              <span className="flex items-center gap-2">
                <MessageSquare size={14} className="text-green-800" />
                Subject
              </span>

              <select
                className={inputClass}
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">What would you like to know?</option>
                <option value="Membership enquiry">Membership enquiry</option>
                <option value="Sports and coaching">Sports and coaching</option>
                <option value="Events and tournaments">
                  Events and tournaments
                </option>
                <option value="Facilities">Facilities</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label className={`${labelClass} md:col-span-2`}>
              <span className="flex items-center gap-2">
                <MessageSquare size={14} className="text-green-800" />
                Your Message
              </span>

              <textarea
                className={`${inputClass} min-h-[145px] resize-y`}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you..."
                minLength={10}
                rows={5}
                required
              />
            </label>
          </>
        )}
      </div>

      {/* Submit button */}
      <div className="relative mt-7">
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#17251f] px-7 py-4 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-[#17251f]/15 transition duration-300 hover:-translate-y-1 hover:bg-green-900 hover:shadow-xl sm:w-auto"
        >
          {isMembership ? "Submit Application" : "Send Message"}

          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#c7f36b] text-[#17251f] transition duration-300 group-hover:rotate-45">
            <ArrowUpRight size={17} />
          </span>
        </button>

        <p className="mt-4 text-[10px] font-semibold leading-5 text-gray-400">
          {isMembership
            ? "Our membership team will contact you about the next steps."
            : "We appreciate your message and look forward to connecting with you."}
        </p>
      </div>

      {/* Success message */}
      {success && (
        <div
          className="relative mt-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-900"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-green-700" />

          <div>
            <h4 className="text-sm font-black">
              {isMembership
                ? "Application received!"
                : "Message sent successfully!"}
            </h4>

            <p className="mt-1 text-xs leading-5 text-green-800">
              {isMembership
                ? "Thank you for choosing STRIDE. Our team will be in touch with you."
                : "Thank you for contacting STRIDE Athletic Club. We appreciate you reaching out."}
            </p>
          </div>
        </div>
      )}
    </form>
  );
}

export default Forms;