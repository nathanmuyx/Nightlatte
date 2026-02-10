import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ],
  "Follow us": [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black px-6">
      <div className="mx-auto max-w-[1440px]">
        {/* Top section */}
        <div className="border-t border-[#323232] py-10">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr_1fr_1.5fr]">
            {/* Brand */}
            <div>
              <Link href="/" className="text-xl font-bold tracking-tight text-white">
                Nightlatte
              </Link>
              <div className="mt-4">
                <span className="block text-sm font-medium text-white">
                  We Build.
                </span>
                <span className="gradient-text-hero text-sm font-medium italic">
                  We Ship.
                </span>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="mb-4 text-xs text-[#8f9199]">{heading}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm font-medium text-white transition-colors hover:text-white/70"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Help / contact */}
            <div>
              <h4 className="mb-4 text-xs text-[#8f9199]">Help</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-[#8f9199]">For project inquiries</p>
                  <p className="text-sm font-medium text-white">
                    hello@nightlatte.com
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#8f9199]">For partnership inquiries</p>
                  <p className="text-sm font-medium text-white">
                    partners@nightlatte.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-[#323232] py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs text-white">Nightlatte</p>
              <p className="mt-1 text-xs leading-relaxed text-[#8f9199]">
                &copy; {new Date().getFullYear()} Nightlatte. All rights
                reserved. Philippines (Remote-first).
              </p>
            </div>
            <p className="text-xs text-white">
              Privacy policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
