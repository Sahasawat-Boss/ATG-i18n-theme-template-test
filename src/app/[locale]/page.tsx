import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import ClientLangSwitcher from "@/components/ClientLangSwitcher";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocalePage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations("Index");

  return (
    <>
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <main>
        <section className="hero">
          <h1 className="hero-title">{t("title")}</h1>
          <p className="hero-subtitle">{t("subtitle")}</p>
          <div className="cta-group">
            <a href="#features" className="btn btn-primary">{t("cta")}</a>
            <a href="#features" className="btn btn-secondary">{t("features")}</a>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3 className="feature-title">Dynamic Design</h3>
              <p className="feature-desc">{t("description")}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Next.js 15</h3>
              <p className="feature-desc">Powered by the latest React features and extremely fast server-side rendering.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3 className="feature-title">i18n Support</h3>
              <p className="feature-desc">Seamlessly translate your experiences across multiple languages with next-intl.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
