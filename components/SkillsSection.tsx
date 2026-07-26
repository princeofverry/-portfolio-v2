import { SkillCategoryMap } from "@/types/portfolio";

interface SkillsSectionProps {
  skills: SkillCategoryMap;
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 md:py-28">
      <span className="font-label-mono text-secondary text-xs block mb-1">
        CAPABILITIES // 04
      </span>
      <h2 className="font-headline-lg text-primary mb-12">Skills & Taxonomy</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="p-5 border border-outline-variant rounded-DEFAULT bg-surface-container-low"
          >
            <h3 className="font-label-mono text-xs font-bold text-primary mb-4 border-b border-outline-variant pb-2 uppercase tracking-wider">
              {category}
            </h3>
            <ul className="space-y-2 font-body text-sm text-on-surface-variant">
              {items.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
