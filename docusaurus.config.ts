import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'WiseGuard',
  tagline: 'Inteligentny audyt zasobów i antykradzież na budowach',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://wiseguard.netlify.app',
  baseUrl: '/',

  organizationName: 'WiseGuard',
  projectName: 'wiseguard-website',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
    localeConfigs: {
      pl: {
        label: 'Polski',
        direction: 'ltr',
        htmlLang: 'pl-PL',
        calendar: 'gregory',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/wiseguard-social-card.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'WiseGuard',
      logo: {
        alt: 'WiseGuard Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'Strona główna',
          position: 'left',
        },
        {
          to: '/solution',
          label: 'Rozwiązanie',
          position: 'left',
        },
        {
          to: '/offer',
          label: 'Oferta',
          position: 'left',
        },
        {
          to: '/calculator',
          label: 'Kalkulator kosztów',
          position: 'left',
        },
        {
          to: '/contact',
          label: 'Kontakt',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Produkt',
          items: [
            {
              label: 'Rozwiązanie',
              to: '/solution',
            },
            {
              label: 'Oferta',
              to: '/offer',
            },
            {
              label: 'Kalkulator kosztów',
              to: '/calculator',
            },
          ],
        },
        {
          title: 'Firma',
          items: [
            {
              label: 'O nas',
              to: '/about',
            },
            {
              label: 'Kontakt',
              to: '/contact',
            },
          ],
        },
        {
          title: 'Prawne',
          items: [
            {
              label: 'Polityka prywatności',
              to: '/privacy',
            },
            {
              label: 'Warunki użytkowania',
              to: '/terms',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WiseGuard. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
