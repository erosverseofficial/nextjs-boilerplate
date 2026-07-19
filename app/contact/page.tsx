import type { Metadata } from "next";

type Member = {
  name: string;
  role: string;
  photo: string;
  email: string;
  phone: string;
  about: string;
  vision: string;
  accent: string;
};

const members: Member[] = [
  {
    name: "Nitin Gupta",
    role: "Engineering Director (Software Development)",
    photo: "/images/team/nitin-gupta.png",
    email: "nitin.gupta@example.com",
    phone: "+91-90000-00001",
    about:
      "I am an IT professional with a core background in software development and product engineering. As an Engineering Director at a consulting firm, I focus on building high-performing teams, delivering scalable digital solutions, and translating business goals into reliable technology outcomes.",
    vision:
      "My vision is to work for the betterment of society by helping create a community where no one feels alone. Most of us live in nuclear families, so it is important that our society feels like an extended family. I am deeply inspired by something one resident shared after last Diwali: he could not travel to his hometown, but here he felt at home with family. That feeling is exactly what I want to nurture for everyone.",
    accent: "#E83E8C",
  },
  {
    name: "Tvarit Gujrati",
    role: "Senior Consultant (Networking)",
    photo: "/images/team/tvarit-gujrati.png",
    email: "tvarit.gujrati@example.com",
    phone: "+91-90000-00002",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac neque in lorem scelerisque volutpat. This section is placeholder text for Tvarit's profile and domain expertise.",
    vision:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tvarit's vision placeholder: enabling connected communities through secure network-led innovation and practical technology guidance.",
    accent: "#1D4EDB",
  },
];

export const metadata: Metadata = {
  title: "Contact Us — ErosVerse",
  description: "Meet the ErosVerse team and connect with us.",
};

export default function ContactPage() {
  return (
    <div style={{ background: "#0D0D0D", color: "#fff" }}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <p
          className="text-xs font-bold tracking-[0.25em] uppercase mb-3"
          style={{ color: "#E83E8C" }}
        >
          Contact Us
        </p>
        <h1
          className="font-extrabold leading-none mb-4"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
          }}
        >
          The Team Behind ErosVerse
        </h1>
        <p className="max-w-3xl text-base sm:text-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
          We are IT professionals passionate about building stronger communities through technology,
          collaboration, and celebration.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {members.map((member) => (
            <article
              key={member.name}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#171717",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
              }}
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6 sm:items-center mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover"
                    style={{ border: `2px solid ${member.accent}` }}
                  />

                  <div>
                    <h2
                      className="text-2xl font-extrabold"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {member.name}
                    </h2>
                    <p className="mt-2 text-sm font-semibold" style={{ color: member.accent }}>
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: member.accent }}>
                      About Me
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                      {member.about}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: member.accent }}>
                      Vision
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                      {member.vision}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: member.accent }}>
                      Contact
                    </p>
                    <div className="flex flex-col gap-2 text-sm" style={{ color: "rgba(255,255,255,0.78)" }}>
                      <a href={`mailto:${member.email}`} className="hover:underline">
                        {member.email}
                      </a>
                      <a href={`tel:${member.phone.replace(/[^+\d]/g, "")}`} className="hover:underline">
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}