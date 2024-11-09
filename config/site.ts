export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Discover Local Gems',
  description: 'Make beautiful websites regardless of your design experience.',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Categories',
      href: '/categories',
    },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'Reviews',
      href: '/reviews',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ],
  navMenuItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Categories',
      href: '/categories',
    },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'Reviews',
      href: '/reviews',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
    ,
  ],
  links: {
    github: 'https://github.com/nextui-org/nextui',
    twitter: 'https://twitter.com/getnextui',
    docs: 'https://nextui.org',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
