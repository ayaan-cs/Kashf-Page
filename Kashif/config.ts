/**
 * Site Configuration
 *
 * Update these values to customize your Kashf landing page.
 * This file contains all the contact information, social links,
 * and external URLs used throughout the site.
 */

export const siteConfig = {
  // Email Configuration
  email: {
    // The email address where contact form submissions will be sent
    contact: 'contact@kashfapp.com',
    // You can add more email addresses as needed
    support: 'support@kashfapp.com',
  },

  // Social Media Links
  social: {
    // Replace '#' with your actual social media URLs
    github: 'https://github.com/yourusername',
    instagram: 'https://www.instagram.com/kashf.app/',
    email: 'mailto:kashf.team@gmail.com',
    // You can add more social links here as needed
    twitter: '',
    facebook: '',
    linkedin: '',
  },

  // Buy Me a Coffee
  // Replace with your actual Buy Me a Coffee URL
  buyMeACoffee: 'https://www.buymeacoffee.com/yourusername',

  // Footer Links
  links: {
    home: '#',
    features: '#features',
    contact: '#contact',
    privacy: '#privacy',
  },

  // Site Metadata
  meta: {
    title: 'Kashf - Discover Muslim essentials in a few clicks',
    description: 'Finding mosques, halal food & Muslim-owned businesses made effortless',
    author: 'Kashf Team',
    year: new Date().getFullYear(),
  },
} as const;

export default siteConfig;
