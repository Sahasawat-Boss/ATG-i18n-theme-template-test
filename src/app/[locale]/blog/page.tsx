import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function BlogPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations("Blog");

  const posts = [
    {
      id: "post1",
      title: t("posts.post1.title"),
      excerpt: t("posts.post1.excerpt"),
      date: t("posts.post1.date"),
    },
    {
      id: "post2",
      title: t("posts.post2.title"),
      excerpt: t("posts.post2.excerpt"),
      date: t("posts.post2.date"),
    },
    {
      id: "post3",
      title: t("posts.post3.title"),
      excerpt: t("posts.post3.excerpt"),
      date: t("posts.post3.date"),
    }
  ];

  return (
    <>
      <div className="bg-blob blob-1" style={{ top: '100px', left: '-50px', background: 'rgba(59, 130, 246, 0.4)' }}></div>
      <div className="bg-blob blob-2" style={{ bottom: '-100px', right: '-50px', background: 'rgba(139, 92, 246, 0.4)' }}></div>

      <main style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px', paddingLeft: '5%', paddingRight: '5%' }}>
        <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>{t("title")}</h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>{t("subtitle")}</p>
        </header>

        <section className="blog-grid">
          {posts.map((post) => (
            <article key={post.id} className="blog-card">
              <span className="blog-date">{post.date}</span>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href="#" className="blog-readmore">{t("readMore")}</a>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
