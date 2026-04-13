import Image from 'next/image';
import { images } from '@/lib/pexels';
import { Award, Briefcase, Globe } from 'lucide-react';

const stats = [
  { icon: Award, value: '100+', label: 'Clients Served' },
  { icon: Briefcase, value: '10+', label: 'Years Experience' },
  { icon: Globe, value: '24+', label: 'Markets Reached' },
];

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
              Asad Ali founded NexaGrow with a clear mission: to help businesses across the Arab world, USA, and Canada unlock the full potential of digital marketing. With over a decade of experience in growth marketing, AI automation, and brand strategy, Asad has personally guided 100+ businesses to measurable digital success.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              His hands-on approach and deep understanding of both Eastern and Western markets makes NexaGrow uniquely positioned to deliver global results with local insight.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                  <Icon className="w-6 h-6 text-brand mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-xs text-gray-400 mt-1">{label}</div>
                </div>
              ))}
            </div>

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
