import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ContactPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");

  return (
    <>
      <div className="bg-blob blob-1" style={{ top: '100px', left: 'auto', right: '-100px' }}></div>
      <div className="bg-blob blob-2" style={{ bottom: '-100px', right: 'auto', left: '-100px' }}></div>

      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5%', paddingTop: '80px' }}>
        <section className="contact-box" style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '3rem', maxWidth: '600px', width: '100%', textAlign: 'center' }}>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>{t("title")}</h1>
          <p className="feature-desc" style={{ marginBottom: '2rem' }}>{t("description")}</p>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} aria-label="Contact Form">
            <input 
              type="text" 
              placeholder="Your Name" 
              style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-main)', outline: 'none', fontFamily: 'inherit' }} 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-main)', outline: 'none', fontFamily: 'inherit' }} 
            />
            <textarea 
              placeholder="Message" 
              rows={4}
              style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-main)', outline: 'none', fontFamily: 'inherit', resize: 'none' }} 
            ></textarea>
            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Send Message</button>
          </form>
        </section>
      </main>
    </>
  );
}
