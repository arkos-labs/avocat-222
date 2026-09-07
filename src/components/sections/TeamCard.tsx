import Image from "next/image";
import type { TeamMember } from "@/types";

interface Props { member: TeamMember; }

export function TeamCard({ member }: Props) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-sm border bg-white transition-all duration-300 hover:shadow-[0_20px_48px_-12px_rgba(7,9,15,0.14)]"
      style={{ borderColor: "#e8e2d5" }}
      aria-labelledby={`team-${member.id}-name`}
    >
      {/* Barre accent top */}
      <div className="h-1 w-full bg-[#07090f] transition-colors duration-300 group-hover:bg-[#8c1212]" aria-hidden="true" />

      {/* Avatar + fond sombre */}
      <div className="relative bg-[#07090f] px-8 pt-10 pb-0 flex flex-col items-start">
        {/* Monogramme */}
        <div className="relative mb-6 flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden border-2 border-white/10 bg-[#8c1212] text-2xl font-bold text-white"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          {member.imageUrl ? (
            <Image
              src={member.imageUrl}
              alt={`Photo de ${member.name}`}
              fill
              className="object-cover"
            />
          ) : (
            member.imageInitials
          )}
        </div>

        {/* Nom + titre sur fond sombre */}
        <div className="pb-8">
          <h3
            id={`team-${member.id}-name`}
            className="text-xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem" }}
          >
            {member.name}
          </h3>
          <p className="mt-1 text-xs font-semibold text-[#8c1212] uppercase tracking-wider">
            {member.title}
          </p>
          <p className="mt-1 text-xs text-[#475569]">
            Barreau de Toulouse — {member.barYear}
          </p>
        </div>

        {/* Décoration géométrique */}
        <div
          aria-hidden="true"
          className="absolute right-6 top-8 text-7xl font-bold text-white/4 select-none leading-none"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          {member.imageInitials}
        </div>
      </div>

      {/* Corps de la carte */}
      <div className="flex flex-1 flex-col p-7">
        {/* Description */}
        <p className="flex-1 text-sm leading-relaxed text-[#475569]">
          {member.description}
        </p>

        {/* Engagements */}
        {member.engagements.length > 0 && (
          <div className="mt-6 border-t pt-5" style={{ borderColor: "#e8e2d5" }}>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#0f172a]">
              Engagements
            </p>
            <ul className="flex flex-col gap-1.5">
              {member.engagements.map((eng, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-[#64748b]"
                >
                  <span className="mt-1.5 h-1 w-3 shrink-0 bg-[#8c1212]" aria-hidden="true" />
                  {eng}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
