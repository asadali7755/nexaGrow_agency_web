import Image from 'next/image';
import { images } from '@/lib/pexels';

// The three stat cards that used to sit here ("100+ Clients Served",
// "10+ Years Experience", "24+ Markets Reached") were invented. Unverifiable
// counts are easy for a buyer to doubt and impossible to defend on a call, so
// the section now leads with what the agency actually does instead.

const skills = ['Digital Strategy', 'Growth Marketing', 'AI Solutions', 'Brand Building', 'Team Leadership', 'Innovation'];

export default function FounderSection() {
  return (
    <section className="always-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image — LEFT */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-4 border-brand/30">
              <Image
                src={images.asad}
                alt="Asad Ali — Founder & CEO"
                fill
                className="object-cover"
                style={{ filter: 'grayscale(15%)' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-brand text-white px-6 py-3 rounded-xl shadow-lg">
              <p className="font-bold text-lg">Asad Ali</p>
              <p className="text-sm text-white/80">Founder & CEO</p>
            </div>
          </div>

          {/* Content — RIGHT */}
          <div>
            <span className="text-sm font-semibold tracking-wider uppercase text-brand">
              The Founder
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white font-display">
              Driven by Results, Inspired by Growth
            </h2>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Asad Ali founded NexaGrow to help businesses across the Gulf, Pakistan and North America get measurable results from digital marketing instead of vanity metrics. He works hands-on with every client on strategy, campaigns and AI automation.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              The agency is deliberately small, which means the person who plans your campaign is the person who runs it — no account-manager layer between you and the work.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-full bg-white/10 text-gray-300 border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
