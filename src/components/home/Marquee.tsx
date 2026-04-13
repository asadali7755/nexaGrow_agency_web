export default function Marquee() {
  const items = [
    'Social Media Marketing',
    '★',
    'AI Automation',
    '★',
    'Google Ads',
    '★',
    'Web Development',
    '★',
    'Brand Strategy',
    '★',
    'Content Creation',
    '★',
    'SEO Optimization',
    '★',
  ];

  return (
    <section className="always-black py-4 overflow-hidden border-y border-white/10">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`mx-6 text-sm font-semibold tracking-wider uppercase ${
              item === '★' ? 'text-brand' : 'text-white/80'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
