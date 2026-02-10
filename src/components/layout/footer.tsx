import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black px-6">
      <div className="mx-auto max-w-[1440px]">
        <div className="border-t border-[#323232] py-8">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-[#8f9199]">
              &copy; {new Date().getFullYear()} Nightlatte. All rights reserved.
            </p>
            <a
              href="mailto:nightlatte.team@gmail.com"
              className="text-xs text-white transition-colors hover:text-white/70"
            >
              nightlatte.team@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
