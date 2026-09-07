import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Clock, Tag, Calendar, Phone, CheckCircle2 } from "lucide-react";
import { BLOG_POSTS, PHONE_URGENCE_LINK, CABINET_INFO } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article introuvable" };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      "droit pénal Toulouse",
      post.category,
      "avocat Toulouse",
      "Cabinet 222",
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Cabinet d'Avocats 222"],
    },
    alternates: {
      canonical: `https://cabinet222-avocat.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  // Autres articles (3 max, hors article courant)
  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  // JSON-LD Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Cabinet d'Avocats 222",
      url: "https://cabinet222-avocat.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Cabinet d'Avocats 222",
      url: "https://cabinet222-avocat.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://cabinet222-avocat.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="relative bg-[#0f172a] pb-16 pt-16 md:pb-20 md:pt-20 overflow-hidden">
        {post.imageUrl ? (
          <div className="absolute inset-0">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-[#0f172a]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/40 via-[#0f172a]/60 to-[#0f172a]" />
        )}
        <div className="relative mx-auto max-w-3xl px-6 md:px-8">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[#94a3b8] hover:text-white transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Retour au blog
          </Link>

          {/* Catégorie */}
          <div className="mb-4 flex items-center gap-2">
            <Tag className="h-3.5 w-3.5 text-[#991b1b]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#991b1b]">
              {post.category}
            </span>
          </div>

          {/* Titre */}
          <h1 className="mb-6 text-3xl font-extrabold leading-tight text-white md:text-4xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#64748b]">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {post.readingTime} min de lecture
            </span>
            <span>Cabinet d&apos;Avocats 222</span>
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="mx-auto max-w-3xl px-6 py-12 md:px-8 md:py-16">
        {/* Chapeau */}
        <p className="mb-10 text-lg font-medium leading-relaxed text-[#0f172a] border-l-4 border-[#991b1b] pl-6 italic">
          {post.excerpt}
        </p>

        {/* Corps de l'article */}
        <article className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-[#b91c1c] prose-li:marker:text-[#b91c1c]">
          {post.content ? (
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h2 className="text-2xl mt-10 mb-4 border-l-4 border-[#991b1b] pl-4" {...props} />,
                h2: ({node, ...props}) => <h3 className="text-xl mt-8 mb-3" {...props} />,
                p: ({node, ...props}) => <p className="mb-4 leading-relaxed text-slate-600" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />,
                strong: ({node, ...props}) => <strong className="font-semibold text-slate-900" {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          ) : (
            <p className="text-[#475569]">Contenu en cours de rédaction.</p>
          )}
        </article>

        {/* CTA avocat */}
        <div className="mt-16 rounded-sm bg-[#07090f] p-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#991b1b]">
            Besoin d&apos;un conseil ?
          </p>
          <h2 className="mb-4 text-xl font-bold text-white">
            Votre situation est unique. Parlons-en.
          </h2>
          <p className="mb-8 text-sm text-[#94a3b8]">
            Le Cabinet 222 répond à vos questions du lundi au vendredi de 9h à
            19h. Urgences pénales disponibles 24h/24.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-[#f5f0e8] px-6 py-3 text-sm font-semibold text-[#07090f] hover:bg-[#e8e2d5] transition-colors"
            >
              Prendre rendez-vous
            </Link>
            <a
              href={PHONE_URGENCE_LINK}
              className="inline-flex items-center gap-2 rounded-lg bg-[#991b1b] px-6 py-3 text-sm font-semibold text-white hover:bg-[#7f1d1d] transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {CABINET_INFO.phone.urgence}
            </a>
          </div>
        </div>

        {/* Articles liés */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-lg font-bold text-[#0f172a]">
              Articles liés
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/blog/${r.slug}`}
                  className="group rounded-sm border border-[#e8e2d5] bg-white p-6 transition-all hover:shadow-md"
                >
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#991b1b]">
                    {r.category}
                  </span>
                  <h3 className="text-sm font-bold leading-snug text-[#0f172a] group-hover:text-[#991b1b] transition-colors">
                    {r.title}
                  </h3>
                  <span className="mt-3 block text-xs text-[#94a3b8]">
                    {formatDate(r.date)} · {r.readingTime} min
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
