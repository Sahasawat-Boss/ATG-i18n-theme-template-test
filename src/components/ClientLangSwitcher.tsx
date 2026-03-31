"use client";

import { usePathname, useRouter } from "@/i18n/routing";

export default function ClientLangSwitcher({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: "en" | "th") => {
    router.replace(pathname, { locale });
  };

  return (
    <div className="lang-switcher">
      <button 
        className={currentLocale === "en" ? "active" : ""} 
        onClick={() => handleLanguageChange("en")}
      >
        EN
      </button>
      <button 
        className={currentLocale === "th" ? "active" : ""} 
        onClick={() => handleLanguageChange("th")}
      >
        TH
      </button>
    </div>
  );
}
