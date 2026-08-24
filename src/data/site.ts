export const NAV_LINKS = [
  { href: '/projects', label: 'Work' },
  { href: '/studio', label: 'Studio' },
  { href: '/process', label: 'Process' },
  { href: '/contact', label: 'Contact' },
] as const;

export const CONTACT = {
  emails: ['allison@compass-design.studio', 'canyon@compass-design.studio'],
  phone: '256-384-3539',
  phoneHref: 'tel:+12563843539',
} as const;

export const SOCIAL = {
  instagram: 'https://www.instagram.com/compass_design.studio/',
  pinterest: 'https://www.pinterest.com/compassdesign_/',
  facebook: 'https://www.facebook.com/profile.php?id=61581900003345',
  linkedin: 'https://www.linkedin.com/company/compass-design-studio/?viewAsMember=true',
} as const;

export const PROJECT_TYPES = [
  'Whole-home remodel',
  'Kitchen or bath',
  'Addition',
  'New construction',
  'Interior design only',
  'Other',
] as const;

export const INVESTMENT_BANDS = [
  'Under $30,000',
  '$30,000 – $100,000',
  '$100,000 – $250,000',
  '$250,000 – $750,000',
  '$750,000+',
] as const;

export const TIMELINES = [
  'As soon as possible',
  'Within 3 months',
  '3–6 months',
  '6–12 months',
  'Just exploring for now',
] as const;

export const OWNERSHIP_OPTIONS = ['Yes', 'No'] as const;
