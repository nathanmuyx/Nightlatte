"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  TrendingUp,
  Users,
  CreditCard,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Search,
  Bell,
  ChevronRight,
} from "lucide-react";

function TypidShowcase() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-[#0a0a0a]">
      {/* Background glow blobs */}
      <div className="absolute left-[calc(50%+9px)] top-[-6px] -translate-x-1/2">
        <div
          className="h-[414px] w-[414px] rounded-full bg-white"
          style={{ filter: "blur(50px)", transform: "rotate(131deg)" }}
        />
      </div>
      <div className="absolute -left-[230px] top-[-25px]">
        <div
          className="h-[786px] w-[786px] rounded-full bg-[#17bff9]"
          style={{ filter: "blur(50px)", transform: "rotate(131deg)" }}
        />
      </div>

      {/* Stacked screenshots — absolute positions from Figma */}
      {/* Back — Aisen Fest */}
      <div className="absolute left-[18.5%] top-[22%] w-[62.3%] overflow-hidden rounded-[8px] border-4 border-white/20 shadow-2xl">
        <Image
          src="/images/aisen-fest.png"
          alt="Aisen Fest event page"
          width={808}
          height={452}
          className="block w-full"
        />
      </div>

      {/* Middle — Himaya */}
      <div className="absolute left-[15.4%] top-[32.5%] w-[69.1%] overflow-hidden rounded-[8px] border-4 border-white/20 shadow-2xl">
        <Image
          src="/images/himaya.png"
          alt="Himaya event page"
          width={896}
          height={500}
          className="block w-full"
        />
      </div>

      {/* Front — Typid Landing */}
      <div className="absolute left-[12.3%] top-[44.3%] w-[75.3%] overflow-hidden rounded-[8px] border-4 border-white/20 shadow-2xl">
        <Image
          src="/images/typid-landing.png"
          alt="Typid landing page"
          width={976}
          height={548}
          className="block w-full"
        />
      </div>
    </div>
  );
}

function YouTubeEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [loaded, setLoaded] = useState(false);

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden rounded-lg">
      {isInView && (
        <iframe
          src="https://www.youtube.com/embed/pd9PTSZ15Yk?autoplay=1&mute=1&loop=1&playlist=pd9PTSZ15Yk,PdvDt1TCXkg&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className={`pointer-events-none absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ border: 0, aspectRatio: "16/9" }}
          onLoad={() => setLoaded(true)}
        />
      )}
      <div
        className={`absolute inset-0 flex items-center justify-center rounded-lg transition-opacity duration-700 ${loaded ? "pointer-events-none opacity-0" : "opacity-100"}`}
        style={{
          background: "linear-gradient(135deg, #1c1917, #292524, #44403c)",
        }}
      >
        <span className="text-sm font-medium text-white/40">
          Motion Design Reel
        </span>
      </div>
    </div>
  );
}

const miniChartBars = [40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95];

function DashboardMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-[#0a0a0a]">
      {/* Background glow blobs */}
      <div className="absolute left-[calc(50%-20px)] top-[-30px] -translate-x-1/2">
        <div
          className="h-[300px] w-[300px] rounded-full bg-[#8b5cf6]"
          style={{ filter: "blur(60px)", opacity: 0.4 }}
        />
      </div>
      <div className="absolute -right-[120px] bottom-[10%]">
        <div
          className="h-[400px] w-[400px] rounded-full bg-[#6366f1]"
          style={{ filter: "blur(70px)", opacity: 0.25 }}
        />
      </div>

      {/* Back page — Settings/Profile */}
      <div className="absolute left-[18%] top-[8%] w-[64%] overflow-hidden rounded-[6px] border border-black/10 bg-white shadow-2xl">
        <div className="border-b border-gray-100 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-[7px] font-medium text-gray-400">Settings</span>
          </div>
        </div>
        <div className="p-3 text-[8px]">
          <div className="mb-2 text-[9px] font-semibold text-gray-800">Account Settings</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between rounded-md border border-gray-100 bg-gray-50 p-2">
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6]">
                  <Users className="h-2.5 w-2.5 text-white" />
                </div>
                <div>
                  <div className="text-[8px] font-medium text-gray-700">Organization</div>
                  <div className="text-[7px] text-gray-400">Nightlatte Studio</div>
                </div>
              </div>
              <ChevronRight className="h-2.5 w-2.5 text-gray-300" />
            </div>
            <div className="flex items-center justify-between rounded-md border border-gray-100 bg-gray-50 p-2">
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#f0a030] to-[#dc5078]">
                  <Bell className="h-2.5 w-2.5 text-white" />
                </div>
                <div>
                  <div className="text-[8px] font-medium text-gray-700">Notifications</div>
                  <div className="text-[7px] text-gray-400">Email & push alerts</div>
                </div>
              </div>
              <ChevronRight className="h-2.5 w-2.5 text-gray-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Middle page — Analytics */}
      <div className="absolute left-[14%] top-[24%] w-[72%] overflow-hidden rounded-[6px] border border-black/10 bg-white shadow-2xl">
        <div className="border-b border-gray-100 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-[7px] font-medium text-gray-400">Analytics</span>
          </div>
        </div>
        <div className="p-3 text-[8px]">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-[9px] font-semibold text-gray-800">Revenue Overview</div>
            <div className="rounded-full bg-gray-100 px-2 py-0.5 text-[7px] font-medium text-gray-500">Monthly</div>
          </div>
          {/* Mini bar chart */}
          <div className="flex items-end gap-[3px] rounded-md border border-gray-100 bg-gray-50 p-2.5">
            {miniChartBars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h * 0.32}px`,
                  background:
                    i === miniChartBars.length - 1
                      ? "linear-gradient(to top, #6366f1, #8b5cf6)"
                      : i >= miniChartBars.length - 3
                        ? "rgba(99,102,241,0.3)"
                        : "rgba(0,0,0,0.06)",
                }}
              />
            ))}
          </div>
          {/* Mini metrics row */}
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {[
              { label: "Total", value: "₱26.4K", color: "text-gray-800" },
              { label: "Growth", value: "+12.5%", color: "text-emerald-600" },
              { label: "Events", value: "12", color: "text-gray-800" },
            ].map((m) => (
              <div key={m.label} className="rounded-md border border-gray-100 bg-gray-50 p-1.5 text-center">
                <div className="text-[7px] text-gray-400">{m.label}</div>
                <div className={`text-[9px] font-semibold ${m.color}`}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Front page — Dashboard */}
      <div className="absolute left-[10%] top-[42%] w-[80%] overflow-hidden rounded-[6px] border border-black/10 bg-white shadow-2xl">
        <div className="border-b border-gray-100 px-3 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-[7px] font-medium text-gray-400">Dashboard</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex h-4 items-center gap-1 rounded border border-gray-200 bg-gray-50 px-1.5">
                <Search className="h-2 w-2 text-gray-300" />
                <span className="text-[7px] text-gray-300">Search...</span>
              </div>
              <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6]" />
            </div>
          </div>
        </div>
        <div className="p-3 text-[8px]">
          {/* Metric cards row */}
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { label: "Revenue", value: "₱26.4K", change: "+12.5%", icon: CreditCard, up: true },
              { label: "Attendees", value: "1,284", change: "+8.2%", icon: Users, up: true },
              { label: "Events", value: "12", change: "+3", icon: BarChart3, up: true },
              { label: "Growth", value: "24.5%", change: "+4.1%", icon: TrendingUp, up: true },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-md border border-gray-100 bg-gray-50 p-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[7px] text-gray-400">{m.label}</span>
                  <m.icon className="h-2.5 w-2.5 text-gray-300" />
                </div>
                <div className="mt-1 text-[10px] font-semibold text-gray-800">{m.value}</div>
                <div className="mt-0.5 flex items-center gap-0.5">
                  <ArrowUpRight className="h-2 w-2 text-emerald-500" />
                  <span className="text-[7px] text-emerald-500">{m.change}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Recent activity */}
          <div className="mt-2 rounded-md border border-gray-100 bg-gray-50 p-2">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[8px] font-medium text-gray-600">Recent Activity</span>
              <MoreHorizontal className="h-2.5 w-2.5 text-gray-300" />
            </div>
            {[
              { name: "Aisen Fest", amount: "+₱12,400", status: "Completed" },
              { name: "Himaya", amount: "+₱8,200", status: "Completed" },
              { name: "Platform Fee", amount: "-₱1,240", status: "Processed" },
            ].map((tx, i) => (
              <div key={i} className={`flex items-center justify-between py-1 ${i > 0 ? "border-t border-gray-100" : ""}`}>
                <div className="flex items-center gap-1.5">
                  <div className={`flex h-3.5 w-3.5 items-center justify-center rounded ${tx.amount.startsWith("+") ? "bg-emerald-50" : "bg-red-50"}`}>
                    {tx.amount.startsWith("+") ? (
                      <ArrowUpRight className="h-2 w-2 text-emerald-500" />
                    ) : (
                      <ArrowDownRight className="h-2 w-2 text-red-500" />
                    )}
                  </div>
                  <div>
                    <div className="text-[7px] font-medium text-gray-700">{tx.name}</div>
                    <div className="text-[6px] text-gray-400">{tx.status}</div>
                  </div>
                </div>
                <span className={`text-[7px] font-medium ${tx.amount.startsWith("+") ? "text-emerald-600" : "text-red-500"}`}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkGrid() {
  return (
    <section id="work" className="bg-black px-6 py-16">
      <motion.div
        className="mx-auto max-w-[1440px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid gap-6 md:grid-cols-[1fr_0.46fr] md:grid-rows-[420px_360px]">
          {/* Top left — Typid stacked screenshots */}
          <motion.div variants={fadeInUp} className="overflow-hidden rounded-[24px]">
            <TypidShowcase />
          </motion.div>

          {/* Top right — Dashboard UI Mockup */}
          <motion.div
            variants={fadeInUp}
            className="row-span-2 hidden overflow-hidden rounded-[24px] md:block"
          >
            <DashboardMockup />
          </motion.div>

          {/* Bottom left — Motion Design Reel (YouTube autoplay on scroll) */}
          <motion.div
            variants={fadeInUp}
            className="ml-0 overflow-hidden rounded-lg md:ml-[15%] md:mr-0"
          >
            <YouTubeEmbed />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
