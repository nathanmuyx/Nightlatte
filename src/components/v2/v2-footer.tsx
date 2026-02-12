import Image from "next/image";
import Link from "next/link";

const switzer = "var(--font-switzer)";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function V2Footer() {
  return (
    <footer className="bg-black">
      {/* ── Large logo wordmark section ── */}
      <div className="flex flex-col gap-[4vw] pb-[3vw]">
        {/* Pre-cropped arc shapes at top */}
        <div style={{ width: "82%" }}>
          <Image
            src="/images/footer-logo-arcs.svg"
            alt=""
            width={1180}
            height={132}
            className="w-full h-auto"
            aria-hidden
          />
        </div>

        {/* NIGHT LATTE™ wordmark — inline TM as superscript */}
        <div className="flex items-baseline whitespace-nowrap">
          <p
            className="uppercase text-white"
            style={{
              fontFamily: switzer,
              fontWeight: 700,
              fontSize: "14.4vw",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
            }}
          >
            Night Latte
          </p>
          <span
            className="text-white uppercase self-start"
            style={{
              fontFamily: switzer,
              fontWeight: 400,
              fontSize: "3.5vw",
              lineHeight: 1,
              letterSpacing: "0.04em",
              marginLeft: "0.1em",
              marginTop: "0.15em",
            }}
          >
            TM
          </span>
        </div>
      </div>

      {/* ── Links + info section ── */}
      <div className="px-6">
        <div className="border-t border-[#323232] py-10">
          <div className="flex items-start justify-between">
            {/* Left: columns */}
            <div className="flex gap-12">
              {/* Company column */}
              <div className="flex flex-col gap-4">
                <p
                  className="text-[#8f9199]"
                  style={{ fontFamily: switzer, fontWeight: 400, fontSize: 12, lineHeight: "16px" }}
                >
                  Company
                </p>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-white transition-colors hover:text-white/70"
                      style={{ fontFamily: switzer, fontWeight: 500, fontSize: 14, lineHeight: "20px" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Help column */}
              <div className="flex flex-col gap-4">
                <p
                  className="text-[#8f9199]"
                  style={{ fontFamily: switzer, fontWeight: 400, fontSize: 12, lineHeight: "16px" }}
                >
                  Help
                </p>
                <div className="flex flex-col gap-4">
                  <div>
                    <p
                      className="text-[#8f9199]"
                      style={{ fontFamily: switzer, fontWeight: 400, fontSize: 12, lineHeight: "16px" }}
                    >
                      For project inquiries
                    </p>
                    <a
                      href="mailto:nightlatte@gmail.com"
                      className="text-white transition-colors hover:text-white/70"
                      style={{ fontFamily: switzer, fontWeight: 500, fontSize: 14, lineHeight: "20px" }}
                    >
                      nightlatte@gmail.com
                    </a>
                  </div>
                  <div>
                    <p
                      className="text-[#8f9199]"
                      style={{ fontFamily: switzer, fontWeight: 400, fontSize: 12, lineHeight: "16px" }}
                    >
                      Our work samples
                    </p>
                    <a
                      href="https://dribbble.com/nightlatte"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white transition-colors hover:text-white/70"
                      style={{ fontFamily: switzer, fontWeight: 500, fontSize: 14, lineHeight: "20px" }}
                    >
                      Dribbble
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: outline logo mark */}
            <div className="hidden sm:block">
              <Image
                src="/images/footer-logo-outline.svg"
                alt="Nightlatte"
                width={201}
                height={101}
              />
            </div>
          </div>
        </div>

        {/* ── Copyright bar ── */}
        <div className="border-t border-[#323232] py-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <p
                className="text-white"
                style={{ fontFamily: switzer, fontWeight: 400, fontSize: 12, lineHeight: "16px" }}
              >
                Nightlatte
              </p>
              <p
                className="text-[#8f9199]"
                style={{ fontFamily: switzer, fontWeight: 400, fontSize: 12, lineHeight: "19.5px" }}
              >
                &copy; 2026 Nightlatte. All rights reserved. Philippines (Remote-first).
              </p>
            </div>
            <Link
              href="/privacy"
              className="text-white transition-colors hover:text-white/70"
              style={{ fontFamily: switzer, fontWeight: 400, fontSize: 12, lineHeight: "16px" }}
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
