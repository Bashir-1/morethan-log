const CONFIG = {
  // profile setting (required)
  profile: {
    name: "NCC-17039",
    image: "https://s21.ax1x.com/2024/07/18/pkocfCn.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "网络初学者、高中生",
    bio: "嘿嘿，我——帅哥一枚",
    email: "ncc-17039@foxmail.com",
    linkedin: "",
    github: "",
    instagram: "",
    twitter: "",
    weibo: "",
    youtube: "492976551",
    send: "NCC17039",
  },
  projects: [
    {
      name: `免费影视`,
      href: "https://video.starshine.love/",
    },
    {
      name: `星辰音乐库`,
      href: "https://starshine.love/app/s/music.html",
    },
    {
      name: `今日热搜`,
      href: "https://news.starshine.love/",
    },
    {
      name: `更多项目`,
      href: "https://starshine.love/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "NCC-17039的博客",
    description: "愿星辰大海在你我心中长存",
  },

  // CONFIG configration (required)
  link: "https://blog.starshine.love",
  since: 2021, // If leave this empty, current year will be used.
  lang: "zh-CN", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: true,
    config: {
      host: "https://cusdis.com",
      appid: "c9dca8a3-248c-477e-a44f-8215665f6c17", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
