import type { HeaderConfig } from "./HeaderConfig";



export const authHeaderConfig: HeaderConfig = {
    i18n: [
      {
        language: "English",
        nativeName: "English",
        link: "/en",
      },
      {
        language: "Deutsch",
        nativeName: "Deutsch",
        link: "/de",
      },
      {
        language: "Chinese",
        nativeName: "简体中文",
        link: "/zh",
      },
      {
        language: "Spanish",
        nativeName: "Español",
        link: "/es",
      },
      {
        language: "French",
        nativeName: "Français",
        link: "/fr",
      },
      {
        language: "Italian",
        nativeName: "Italiano",
        link: "/it",
      },
      {
        language: "Japanese",
        nativeName: "日本語",
        link: "/ja",
      },
      {
        language: "Thai",
        nativeName: "ไทย",
        link: "/th",
      }
    ],
  
    links: [
      {
        text: "Home",
        text_en: "Home",
        text_fr: "Accueil",
        href: "/app",
        text_de: "Startseite",
        text_es: "Inicio",
        text_ja: "ホーム",
        text_it: "Inizio",
        text_ar: "الرئيسية",
        text_hi: "होम",
        text_th: "หน้าแรก",
        text_zh: "首页",
      },
      {
        text: "showcase",
        href: "/app/test",
        text_en: "showcase",
        text_fr: "montrer",
        text_de: "Anzeigen",
        text_es: "mostrar",
        text_ja: "表示",
        text_it: "mostrare",
        text_ar: "عرض",
        text_hi: "दिखाएं",
        text_th: "แสดง",
        text_zh: "展示",
      },
      // {
      //   text: "translation",
      //   text_en: "translation",
      //   href: "/translation",
      //   text_de: "Übersetzung",
      //   text_es: "Traducción",
      //   text_fr: "Traduction",
      //   text_ja: "翻訳",
      //   text_it: "Traduzione",
      //   text_ar: "ترجمة",
      //   text_hi: "अनुवाद",
      //   text_th: "แปล",
      //   text_zh: "翻譯",
      //   links: [
      //     {
      //       text: "test",
      //       href: "/test",
      //       text_en: "test page",
      //       text_fr: "page de test",
      //       text_de: "Testseite",
      //       text_es: "página de prueba",
      //       text_ja: "テストページ",
      //       text_it: "Pagina di test",
      //       text_ar: "صفحة الاختبار",
      //       text_hi: "परीक्षण पृष्ठ",
      //       text_th: "หน้าทดสอบ",
      //       text_zh: "测试页面",
      //     },
      //     {
      //       text: "about",
      //       href: "/about",
      //       text_en: "about",
      //       text_fr: "a propos",
      //       text_de: "Über",
      //       text_es: "acerca de",
      //       text_ja: "約",
      //       text_it: "di",
      //       text_ar: "حول",
      //       text_hi: "के बारे में",
      //       text_th: "เกี่ยวกับ",
      //       text_zh: "关于",
      //     },
      //   ],
  
        
      // },
    ],
  
    // actions are btns on the right side in the header
    actions: [
      {
        text: "Logout",
        href: "/api/logout",
        target: "_self",
      },
    // {
    //   text: "Login",
    //   href: "/login",
    //   target: "_self",
    // },
    // {
    //   text: "The OG",
    //   href: "https://github.com/javayhu/haitang",
    //   target: "_self",
    // }
    ],
  };
  