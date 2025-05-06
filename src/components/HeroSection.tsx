import Link from "next/link";
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/mask-group.png" alt="hero-section" width={1400} height={600} />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0a0a3c]/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">Khelo Tech & Strategy</h1>
          <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl lg:text-4xl">Innovative and Futuristic</h2>
          <p className="mt-4 max-w-2xl text-sm text-gray-200 md:text-base">
            Empowering Players, Coaches and Clubs with the simplest and most engaging game analysis solution
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/get-started"
              className="rounded-full bg-secondary px-6 py-2.5 font-medium text-[#0a0a3c] transition-colors hover:bg-[#d4a900]"
            >
              Get Started
            </Link>

            <Link
              href="/video"
              className="flex items-center gap-2 bg-primary-ex-dark rounded-full border border-white/30 px-6 py-2.5 font-medium text-white transition-colors hover:bg-white/10"
            >
              {/* <Play size={16} className="fill-white" /> */}
              <span>Video</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}