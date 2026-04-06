import { hexToHsl } from './colorUtils';

export interface DynamicIdentity {
  primaryColor: string;
  name?: string;
}

export interface DynamicIdentityEntity {
  name: string;
  primaryColor: string;
  logo: string;
  fonts: string[];
  colors: {
    background: string;
    primary: string;
    secondary: string;
  };
  buttons: {
    style: 'rounded' | 'square' | 'pill';
    hover: 'darken' | 'highlight' | 'scale';
  };
  animated_header_images: string[];
  auto_apply?: boolean;
}

/**
 * GCC Chameleon Sovereign Mirror — Full Entity Registry
 * Covers: Shipping Carriers, Government Systems, Banks, Wallets, Service Types
 * Colors normalized to official live-app hex values.
 */
const entityRegistry: Record<string, DynamicIdentityEntity> = {

  // ========================
  // SHIPPING CARRIERS (GCC)
  // ========================
  aramex: {
    name: 'Aramex',
    primaryColor: '#DC291E',
    logo: '/aramex-logo.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFF5F5', primary: '#DC291E', secondary: '#8B1A12' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-aramex.svg'],
    auto_apply: true,
  },
  dhl: {
    name: 'DHL',
    primaryColor: '#FFCC00',
    logo: '/dhl-logo.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFFDE7', primary: '#FFCC00', secondary: '#D40511' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-dhl.svg'],
    auto_apply: true,
  },
  fedex: {
    name: 'FedEx',
    primaryColor: '#4D148C',
    logo: '/fedex-logo.png',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#F3E8FF', primary: '#4D148C', secondary: '#FF6600' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-fedex.svg'],
    auto_apply: true,
  },
  smsa: {
    name: 'SMSA Express',
    primaryColor: '#662D91',
    logo: '/smsa-logo.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#EDE7F6', primary: '#662D91', secondary: '#FF6600' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-smsa.svg'],
    auto_apply: true,
  },
  naqel: {
    name: 'Naqel Express',
    primaryColor: '#E61838',
    logo: '/og-naqel.jpg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFF5F5', primary: '#E61838', secondary: '#002E60' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-naqel.svg'],
    auto_apply: true,
  },
  ups: {
    name: 'UPS',
    primaryColor: '#351C15',
    logo: '/ups-logo.png',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFF3E0', primary: '#351C15', secondary: '#FFB500' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-ups.svg'],
    auto_apply: true,
  },
  zajil: {
    name: 'Zajil',
    primaryColor: '#1C4587',
    logo: '/og-zajil.jpg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E3F2FD', primary: '#1C4587', secondary: '#FF9900' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-zajil.svg'],
    auto_apply: true,
  },
  empost: {
    name: 'Emirates Post',
    primaryColor: '#C8102E',
    logo: '/og-empost.jpg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFF5F5', primary: '#C8102E', secondary: '#003087' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-empost.svg'],
    auto_apply: true,
  },
  saudipost: {
    name: 'Saudi Post',
    primaryColor: '#006C35',
    logo: '/og-saudipost.jpg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E8F5E9', primary: '#006C35', secondary: '#FFB81C' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-saudipost.svg'],
    auto_apply: true,
  },
  qpost: {
    name: 'Qatar Post',
    primaryColor: '#8E1838',
    logo: '/og-qpost.jpg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FCE4EC', primary: '#8E1838', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-qpost.svg'],
    auto_apply: true,
  },
  kwpost: {
    name: 'Kuwait Post',
    primaryColor: '#007A33',
    logo: '/og-kwpost.jpg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E8F5E9', primary: '#007A33', secondary: '#CE1126' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-kwpost.svg'],
    auto_apply: true,
  },
  omanpost: {
    name: 'Oman Post',
    primaryColor: '#ED1C24',
    logo: '/og-omanpost.jpg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFF5F5', primary: '#ED1C24', secondary: '#009639' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-omanpost.svg'],
    auto_apply: true,
  },
  bahpost: {
    name: 'Bahrain Post',
    primaryColor: '#EF3F32',
    logo: '/og-bahpost.jpg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFF5F5', primary: '#EF3F32', secondary: '#007CC2' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-bahpost.svg'],
    auto_apply: true,
  },
  albaraka: {
    name: 'Al Baraka Group',
    primaryColor: '#D89A00',
    logo: '/og-albaraka.jpg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFF8E1', primary: '#D89A00', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-albaraka.svg'],
    auto_apply: true,
  },
  alfuttaim: {
    name: 'Al-Futtaim Group',
    primaryColor: '#00559B',
    logo: '/og-alfuttaim.jpg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E3F2FD', primary: '#00559B', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-alfuttaim.svg'],
    auto_apply: true,
  },
  alshaya: {
    name: 'Alshaya Group',
    primaryColor: '#D71920',
    logo: '/og-alshaya.jpg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFF5F5', primary: '#D71920', secondary: '#000000' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-alshaya.svg'],
    auto_apply: true,
  },
  national: {
    name: 'National Shipping',
    primaryColor: '#003366',
    logo: '/og-bahri.jpg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E3F2FD', primary: '#003366', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-national.svg'],
    auto_apply: true,
  },
  shipco: {
    name: 'Shipco Transport',
    primaryColor: '#0A5FB4',
    logo: '/og-shipco.jpg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E3F2FD', primary: '#0A5FB4', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-shipco.svg'],
    auto_apply: true,
  },
  hellmann: {
    name: 'Hellmann Worldwide',
    primaryColor: '#0C4DA2',
    logo: '/og-hellmann.jpg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E3F2FD', primary: '#0C4DA2', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-hellmann.svg'],
    auto_apply: true,
  },
  dsv: {
    name: 'DSV',
    primaryColor: '#0056A6',
    logo: '/og-dsv.jpg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E3F2FD', primary: '#0056A6', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-dsv.svg'],
    auto_apply: true,
  },
  agility: {
    name: 'Agility Logistics',
    primaryColor: '#003A63',
    logo: '/og-genacom.jpg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E3F2FD', primary: '#003A63', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-agility.svg'],
    auto_apply: true,
  },
  jinaken: {
    name: 'Jinaken (Genacom)',
    primaryColor: '#E82424',
    logo: '/og-jinaken.jpg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFF5F5', primary: '#E82424', secondary: '#F7C24A' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-jinaken.svg'],
    auto_apply: true,
  },
  jinakum: {
    name: 'Jinakum',
    primaryColor: '#0EA5E9',
    logo: '/og-jinakum.jpg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E0F7FA', primary: '#0EA5E9', secondary: '#06B6D4' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-jinakum.svg'],
    auto_apply: true,
  },
  dhlkw: {
    name: 'DHL Kuwait',
    primaryColor: '#FFCC00',
    logo: '/dhl-logo.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFFDE7', primary: '#FFCC00', secondary: '#D40511' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-dhl.svg'],
    auto_apply: true,
  },
  dhlqa: {
    name: 'DHL Qatar',
    primaryColor: '#FFCC00',
    logo: '/dhl-logo.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFFDE7', primary: '#FFCC00', secondary: '#D40511' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-dhl.svg'],
    auto_apply: true,
  },
  dhlom: {
    name: 'DHL Oman',
    primaryColor: '#FFCC00',
    logo: '/dhl-logo.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFFDE7', primary: '#FFCC00', secondary: '#D40511' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-dhl.svg'],
    auto_apply: true,
  },
  dhlbh: {
    name: 'DHL Bahrain',
    primaryColor: '#FFCC00',
    logo: '/dhl-logo.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFFDE7', primary: '#FFCC00', secondary: '#D40511' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-dhl.svg'],
    auto_apply: true,
  },

  // ========================
  // GOVERNMENT PAYMENT SYSTEMS (GCC)
  // ========================
  sadad: {
    name: 'SADAD (سداد)',
    primaryColor: '#F58220',
    logo: '/gov-sadad.png',
    fonts: ['Taysir', 'Inter', 'sans-serif'],
    colors: { background: '#FFF8F0', primary: '#F58220', secondary: '#333333' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-sadad.svg'],
    auto_apply: true,
  },
  jaywan: {
    name: 'Jaywan (جيوان)',
    primaryColor: '#CE1126',
    logo: '/gov-jaywan.png',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFF5F5', primary: '#CE1126', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-jaywan.svg'],
    auto_apply: true,
  },
  knet: {
    name: 'KNET (كي نت)',
    primaryColor: '#007A3D',
    logo: '/gov-knet.png',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E8F5E9', primary: '#007A3D', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-knet.svg'],
    auto_apply: true,
  },
  benefit: {
    name: 'BENEFIT (بنفت)',
    primaryColor: '#CE1126',
    logo: '/gov-benefit.png',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFF5F5', primary: '#CE1126', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-benefit.svg'],
    auto_apply: true,
  },
  maal: {
    name: 'Maal (مال)',
    primaryColor: '#D0032C',
    logo: '/gov-maal.png',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFF5F5', primary: '#D0032C', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-maal.svg'],
    auto_apply: true,
  },
  qatar_gov: {
    name: 'Qatar Government Payment',
    primaryColor: '#8D1B3D',
    logo: '/gov-qatar.png',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFF5F5', primary: '#8D1B3D', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-qatar-gov.svg'],
    auto_apply: true,
  },
  nafath: {
    name: 'Nafath IAM',
    primaryColor: '#006C35',
    logo: '/gov-nafath.png',
    fonts: ['Taysir', 'Inter', 'sans-serif'],
    colors: { background: '#E8F5E9', primary: '#006C35', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-nafath.svg'],
    auto_apply: true,
  },
  absher: {
    name: 'Absher',
    primaryColor: '#006C35',
    logo: '/gov-absher.png',
    fonts: ['Taysir', 'Inter', 'sans-serif'],
    colors: { background: '#E8F5E9', primary: '#006C35', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-absher.svg'],
    auto_apply: true,
  },
  uae_pass: {
    name: 'UAE Pass',
    primaryColor: '#007CC2',
    logo: '/gov-uae-pass.png',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E3F2FD', primary: '#007CC2', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-uae-pass.svg'],
    auto_apply: true,
  },
  sahel: {
    name: 'Sahel App',
    primaryColor: '#006C35',
    logo: '/gov-sahel.png',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E8F5E9', primary: '#006C35', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-sahel.svg'],
    auto_apply: true,
  },
  metrash2: {
    name: 'Metrash2',
    primaryColor: '#8D1B3D',
    logo: '/gov-metrash2.png',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFF5F5', primary: '#8D1B3D', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-metrash2.svg'],
    auto_apply: true,
  },

  // ========================
  // BANKS (GCC)
  // ========================
  alrajhi_bank: {
    name: 'Al Rajhi Bank',
    primaryColor: '#1B3A6B',
    logo: '/bank-logos/alrajhi-bank.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#F0F4F8', primary: '#1B3A6B', secondary: '#F7C24A' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-alrajhi.svg'],
    auto_apply: true,
  },
  snb: {
    name: 'SNB (Saudi National Bank)',
    primaryColor: '#1A1A6E',
    logo: '/bank-logos/snb.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#F0F0FF', primary: '#1A1A6E', secondary: '#D4AF37' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-snb.svg'],
    auto_apply: true,
  },
  enbd: {
    name: 'Emirates NBD',
    primaryColor: '#F37021',
    logo: '/bank-logos/emirates-nbd.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFF8F0', primary: '#F37021', secondary: '#333333' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-enbd.svg'],
    auto_apply: true,
  },
  nbk: {
    name: 'NBK (National Bank of Kuwait)',
    primaryColor: '#1A1A6E',
    logo: '/bank-logos/nbk.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#F0F0FF', primary: '#1A1A6E', secondary: '#D4AF37' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-nbk.svg'],
    auto_apply: true,
  },
  qnb: {
    name: 'QNB Group',
    primaryColor: '#F7B500',
    logo: '/bank-logos/qnb.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#FFF8E1', primary: '#F7B500', secondary: '#333333' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-qnb.svg'],
    auto_apply: true,
  },
  bank_muscat: {
    name: 'Bank Muscat',
    primaryColor: '#003A63',
    logo: '/bank-logos/bank-muscat.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E3F2FD', primary: '#003A63', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-bank-muscat.svg'],
    auto_apply: true,
  },
  stc_pay: {
    name: 'STC Pay',
    primaryColor: '#5F259F',
    logo: '/bank-logos/stc-pay.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#F3E8FF', primary: '#5F259F', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-stc-pay.svg'],
    auto_apply: true,
  },
  mada: {
    name: 'mada',
    primaryColor: '#004D8F',
    logo: '/bank-logos/mada.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E3F2FD', primary: '#004D8F', secondary: '#69BE28' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-mada.svg'],
    auto_apply: true,
  },
  riyad_bank: {
    name: 'Riyad Bank',
    primaryColor: '#004D8F',
    logo: '/bank-logos/riyad-bank.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E3F2FD', primary: '#004D8F', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-riyad-bank.svg'],
    auto_apply: true,
  },
  alahli_bank: {
    name: 'Al Ahli Bank',
    primaryColor: '#1A1A6E',
    logo: '/bank-logos/alahli-bank.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#F0F0FF', primary: '#1A1A6E', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-alahli-bank.svg'],
    auto_apply: true,
  },
  alinma_bank: {
    name: 'Alinma Bank',
    primaryColor: '#006C35',
    logo: '/bank-logos/alinma-bank.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E8F5E9', primary: '#006C35', secondary: '#FFFFFF' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-alinma-bank.svg'],
    auto_apply: true,
  },

  // ========================
  // SERVICE TYPES (Non-Shipping)
  // ========================
  government_payment: {
    name: 'Government Payment',
    primaryColor: '#F58220',
    logo: '/assets/dynamic-identity/hero-gov.svg',
    fonts: ['Taysir', 'Inter', 'sans-serif'],
    colors: { background: '#FFF8F0', primary: '#F58220', secondary: '#333333' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-gov.svg', 'hero-sadad.svg'],
    auto_apply: true,
  },
  health_links: {
    name: 'Health Services',
    primaryColor: '#00A651',
    logo: '/assets/dynamic-identity/hero-health.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E8F5E9', primary: '#00A651', secondary: '#333333' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-health.svg'],
    auto_apply: true,
  },
  chalets: {
    name: 'Chalet Booking',
    primaryColor: '#0EA5E9',
    logo: '/assets/dynamic-identity/hero-chalets.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E0F7FA', primary: '#0EA5E9', secondary: '#06B6D4' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-chalets.svg'],
    auto_apply: true,
  },
  invoices: {
    name: 'Invoice Management',
    primaryColor: '#6366F1',
    logo: '/assets/dynamic-identity/hero-invoice.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#EEF2FF', primary: '#6366F1', secondary: '#333333' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-invoice.svg'],
    auto_apply: true,
  },
  contracts: {
    name: 'Contract Management',
    primaryColor: '#8B5CF6',
    logo: '/assets/dynamic-identity/hero-contract.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#F3E8FF', primary: '#8B5CF6', secondary: '#333333' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-contract.svg'],
    auto_apply: true,
  },
  local_payment: {
    name: 'Local Payment',
    primaryColor: '#0EA5E9',
    logo: '/assets/dynamic-identity/hero-local.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#E0F7FA', primary: '#0EA5E9', secondary: '#06B6D4' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-local.svg'],
    auto_apply: true,
  },
  bank_pages: {
    name: 'Bank Pages',
    primaryColor: '#1B3A6B',
    logo: '/assets/dynamic-identity/hero-bank.svg',
    fonts: ['Inter', 'sans-serif'],
    colors: { background: '#F0F4F8', primary: '#1B3A6B', secondary: '#F7C24A' },
    buttons: { style: 'rounded', hover: 'darken' },
    animated_header_images: ['hero-bank.svg'],
    auto_apply: true,
  },
};

export function detectEntityFromURL(): string | null {
  if (typeof window === 'undefined') return null;
  const pathname = window.location.pathname;
  const parts = pathname.split('/').filter(Boolean);

  // /p/:id/:company/...
  if (parts[0] === 'p' && parts.length >= 2) {
    const company = parts[1].toLowerCase();
    if (entityRegistry[company]) return company;
  }

  // /pay/:company/...
  if (parts[0] === 'pay' && parts.length >= 2) {
    const company = parts[1].toLowerCase();
    if (entityRegistry[company]) return company;
  }

  // Query param fallback
  const params = new URLSearchParams(window.location.search);
  const queryCompany = params.get('company') || params.get('c') || params.get('service');
  if (queryCompany) {
    const key = queryCompany.toLowerCase();
    if (entityRegistry[key]) return key;
  }

  return null;
}

export function getEntityIdentity(entityKey: string): DynamicIdentityEntity | null {
  return entityRegistry[entityKey.toLowerCase()] || null;
}

export function applyDynamicIdentity(identity: DynamicIdentity | string): void {
  const root = document.documentElement;
  const color = typeof identity === 'string' ? identity : identity.primaryColor;
  try {
    const { h, s, l } = hexToHsl(color);
    root.style.setProperty('--dynamic-primary-h', `${h}`);
    root.style.setProperty('--dynamic-primary-s', `${s}%`);
    root.style.setProperty('--dynamic-primary-l', `${l}%`);
    root.style.setProperty('--dynamic-primary-hsl', `${h} ${s}% ${l}%`);
    root.style.setProperty('--dynamic-primary', `hsl(${h} ${s}% ${l}%)`);
    root.style.setProperty('--dynamic-primary-hover', `hsl(${h} ${s}% ${Math.max(l - 8, 0)}%)`);
    root.style.setProperty('--dynamic-primary-active', `hsl(${h} ${s}% ${Math.max(l - 16, 0)}%)`);
    root.style.setProperty('--dynamic-primary-highlight', `hsl(${h} ${Math.round(s * 0.3)}% ${Math.min(l + 38, 96)}%)`);
    console.log(`✅ Identity applied: hsl(${h}, ${s}%, ${l}%)`);
  } catch (err) {
    console.error('❌ HSL injection failed:', err);
  }
}

export function removeDynamicIdentity(): void {
  const props = [
    '--dynamic-primary-h', '--dynamic-primary-s', '--dynamic-primary-l',
    '--dynamic-primary-hsl', '--dynamic-primary', '--dynamic-primary-hover',
    '--dynamic-primary-active', '--dynamic-primary-highlight',
  ];
  props.forEach(p => document.documentElement.style.removeProperty(p));
  document.documentElement.removeAttribute('data-entity');
}

export { removeDynamicIdentity as resetDynamicIdentity };

export function getEntityPaymentShareImage(entityKey: string): string | null {
  const entity = entityRegistry[entityKey.toLowerCase()];
  if (!entity) return null;
  return `/og-${entityKey.toLowerCase()}.jpg`;
}

export function getBankOGImage(bankId: string): string | null {
  if (!bankId) return null;
  return `/og-bank-${bankId}.jpg`;
}

export function getEntityLogo(entityKey: string): string | null {
  const entity = entityRegistry[entityKey.toLowerCase()];
  if (!entity) return null;
  return entity.logo;
}

export function getEntityHeaderImages(entityKey: string): { images: string[]; primaryColor: string } | null {
  const entity = entityRegistry[entityKey.toLowerCase()];
  if (!entity) return null;
  return {
    images: entity.animated_header_images,
    primaryColor: entity.primaryColor,
  };
}
