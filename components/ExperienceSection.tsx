import { ExperienceItem } from "@/types/portfolio";

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 md:py-28">
      <span className="font-label-mono text-secondary text-xs block mb-1">
        CAREER // 01
      </span>
      <h2 className="font-headline-lg text-primary mb-12">Experience</h2>

      <div className="space-y-10">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="border-b border-outline-variant pb-8 last:border-b-0 space-y-3"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
              <div>
                <h3 className="font-headline-mobile text-primary leading-snug">
                  {exp.title}{" "}
                  <span className="text-secondary font-normal text-base block md:inline md:ml-2">
                    @ {exp.org}
                  </span>
                </h3>
                {exp.type && (
                  <span className="font-label-mono text-[11px] text-secondary tracking-wide inline-block mt-0.5">
                    {exp.type}
                  </span>
                )}
              </div>
              <span className="font-label-mono text-xs text-secondary shrink-0">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-2.5 font-body text-sm text-on-surface-variant pt-1">
              {exp.bulletPoints.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
