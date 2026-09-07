import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, Tag, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog — Actualités et Conseils en Droit Pénal Toulouse",
  description:
    "Actualités, analyses et conseils pratiques en droit pénal par les avocates du Cabinet 222 de Toulouse. Garde à vue, violences conjugales, pénal routier, pénal des affaires.",
  keywords: [
    "blog droit pénal Toulouse", "actualités droit pénal", "conseils avocat pénal Toulouse",
    "garde à vue droits", "violence conjugale recours", "homicide routier 2024",
  ],
  alternates: { canonical: "https://cabinet222-avocat.com/blog" },
};

// Couleurs de catégorie
const catColors: Record<string, string> = {
  "Droit pénal": "#8c1212",
  "Pénal des affaires": "#1e3a5f",
  "Pénal routier": "#14532d",
  "Protection des mineurs": "#7c3aed",
  "Pénal de la famille": "#92400e",
};

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const categories = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <>
      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-[#07090f] py-24 md:py-32">
        <div className="absolute inset-0">
          <img src="/images/gavel.jpg" alt="Marteau de justice" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-[#07090f]/60" />
        </div>
        <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-1 bg-[#8c1212] z-10" />
        <span
          aria-hidden="true"
          className="absolute right-8 bottom-8 select-none leading-none hidden lg:block"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "10rem",
            color: "rgba(255,255,255,0.03)",
          }}
        >
          Blog
        </span>
        <div className="relative mx-auto max-w-6xl px-6 md:px-10">
          <span className="divider-red" aria-hidden="true" />
          <h1
            className="text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            Le Blog
            <br />
            <em className="not-italic" style={{ color: "#c0392b" }}>du Cabinet</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[#64748b] leading-relaxed">
            Analyses, explications et actualités en droit pénal, rédigées par
            les avocates du Cabinet 222 pour informer les justiciables toulousains.
          </p>

          {/* Catégories */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-sm border px-3 py-1 text-xs font-medium text-[#64748b]"
                style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grille articles ── */}
      <section className="bg-[#f5f0e8] py-20 md:py-28" aria-labelledby="blog-heading">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2 id="blog-heading" className="sr-only">Articles récents</h2>

          {/* Article vedette */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group mb-10 flex flex-col overflow-hidden rounded-sm border bg-white transition-all duration-300 hover:shadow-[0_20px_48px_-12px_rgba(7,9,15,0.14)] md:flex-row"
              style={{ borderColor: "#e8e2d5" }}
            >
              {/* Visuel éditorial */}
              <div
                className="flex h-52 shrink-0 flex-col justify-end px-10 py-8 md:h-auto md:w-[38%]"
                style={{ background: "linear-gradient(150deg, #07090f 0%, #1e293b 100%)" }}
                aria-hidden="true"
              >
                <span
                  className="text-[5rem] font-bold leading-none text-white/5 select-none"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  01
                </span>
                <span className="mt-2 text-xs font-bold uppercase tracking-widest text-[#8c1212]">
                  À la une
                </span>
              </div>

              {/* Contenu */}
              <div className="flex flex-1 flex-col p-8 md:p-10">
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full shrink-0"
                    style={{ background: catColors[featured.category] ?? "#8c1212" }}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: catColors[featured.category] ?? "#8c1212" }}>
                    {featured.category}
                  </span>
                </div>
                <h3
                  className="mb-3 text-[#07090f] transition-colors duration-200 group-hover:text-[#8c1212]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  {featured.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-[#64748b]">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between border-t pt-4" style={{ borderColor: "#e8e2d5" }}>
                  <div className="flex items-center gap-3 text-xs text-[#94a3b8]">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {featured.readingTime} min
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-bold text-[#8c1212] group-hover:gap-2 transition-all duration-200">
                    Lire
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Grille des autres articles */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, index) => (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden rounded-sm border bg-white transition-all duration-300 hover:shadow-[0_16px_40px_-8px_rgba(7,9,15,0.12)]"
                style={{ borderColor: "#e8e2d5" }}
                aria-labelledby={`post-${post.id}-title`}
              >
                {/* Visuel */}
                <div
                  aria-hidden="true"
                  className="relative flex h-32 items-end overflow-hidden px-6 pb-5"
                  style={{ background: "linear-gradient(150deg, #07090f 0%, #12192b 100%)" }}
                >
                  <span
                    className="absolute right-4 bottom-2 select-none text-7xl font-bold leading-none text-white/5"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {String(index + 2).padStart(2, "0")}
                  </span>
                  <span className="relative z-10 text-xs font-bold uppercase tracking-wider text-[#8c1212]">
                    {post.category}
                  </span>
                </div>

                {/* Contenu */}
                <div className="flex flex-1 flex-col p-6">
                  <h3
                    id={`post-${post.id}-title`}
                    className="mb-3 text-[#0f172a] transition-colors duration-150 group-hover:text-[#8c1212]"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 600, lineHeight: 1.25 }}
                  >
                    {post.title}
                  </h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-[#64748b]">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between border-t pt-4" style={{ borderColor: "#f5f0e8" }}>
                    <div className="flex items-center gap-3 text-xs text-[#94a3b8]">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {post.readingTime} min
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-xs font-bold text-[#8c1212] transition-all duration-150 hover:gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c1212] focus-visible:ring-offset-1 rounded-sm"
                      aria-label={`Lire l'article : ${post.title}`}
                    >
                      Lire
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Note de publication */}
          <div className="mt-14 rounded-sm border p-8 text-center" style={{ borderColor: "#e8e2d5", background: "rgba(255,255,255,0.6)" }}>
            <p className="text-sm text-[#64748b]">
              De nouveaux articles sont publiés régulièrement.{" "}
              <Link href="/contact" className="font-semibold text-[#8c1212] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c1212] rounded-sm">
                Contactez-nous
              </Link>{" "}
              pour toute question juridique spécifique à votre situation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
