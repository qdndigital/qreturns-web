/**
 * Pricing — SINGLE SOURCE OF TRUTH for QReturns.
 *
 * Direct authority:
 *   - prices          → apps/dashboard/app/lib/plans.ts (PLAN_PRICE)
 *   - plan names      → apps/dashboard/app/lib/plans.ts (ALL_PLAN_NAMES)
 *   - return quotas   → apps/dashboard/app/lib/plans.ts (PLAN_QUOTA)
 *   - trial days      → apps/dashboard/app/lib/plans.ts (SHOPIFY_TRIAL_DAYS: 14)
 */

export const REVERSE_TRIAL_DAYS = 14;
export const PAYMENT_TRIAL_DAYS = 14;
export const TEASER_BULLETS = 5;

export interface Plan {
  name: string;
  price: string;
  period: string;
  quota: string;
  desc: string;
  features: string[];
  badge?: string;
  feat?: boolean;
  cta: 'install' | 'demo';
}

export const PLANS: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    period: '/ month',
    quota: '20 returns / month',
    desc: 'Self-service return portal running forever on your store.',
    features: [
      '20 returns per month included',
      'Branded customer return portal on Shopify App Proxy',
      'Original payment refunds & basic store credit',
      'Standard return window enforcement (e.g. 30 days)',
      'Merchant manual return approval workflow',
      'Shopify Admin embedded app (Polaris interface)',
      'Basic return reason categorization',
    ],
    cta: 'install',
  },
  {
    name: 'Starter',
    price: '$19',
    period: '/ month',
    quota: '100 returns / month',
    desc: 'Automate approvals and turn returns into future sales with store credit bonuses.',
    features: [
      '100 returns per month included',
      '3 automated return policy rules',
      'Auto-approve low-risk return requests',
      'Size & color variant exchanges',
      'Store credit with custom bonus incentives (e.g. +10%)',
      'Restocking fee & shipping fee deductions',
      'Automated customer email notifications',
    ],
    cta: 'install',
  },
  {
    name: 'Growth',
    price: '$49',
    period: '/ month',
    quota: '500 returns / month',
    desc: 'Complete returns & reverse logistics automation for scaling Shopify brands.',
    badge: 'Most Popular',
    feat: true,
    features: [
      '500 returns per month included',
      'Unlimited automated return policy rules',
      'Any-product catalog exchanges (Shopify draft orders)',
      'Shopify-native reverse delivery labels & QR drop-offs',
      'Custom customer portal branding & CSS styling',
      'Full 13-template notification engine (Email & SMS)',
      'Retained revenue analytics & reason trends',
      'Keep-item / green return automation',
    ],
    cta: 'install',
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/ month',
    quota: 'Unlimited returns',
    desc: 'High-volume merchants needing multi-location routing and deep API control.',
    features: [
      'Unlimited returns & exchanges per month',
      'Order-edit exchanges directly on original order',
      'Multi-warehouse & multi-location return routing',
      'Warranty claims & damaged product workflows',
      'Full REST & GraphQL API access + webhooks',
      'CSV data export & custom financial reporting',
      'Dedicated onboarding & priority live support',
    ],
    cta: 'install',
  },
];

export interface MatrixRow {
  label: string;
  cells: string[];
}

export const MATRIX: MatrixRow[] = [
  { label: 'Monthly return volume', cells: ['20 / mo', '100 / mo', '500 / mo', 'Unlimited'] },
  { label: 'Shopify App Proxy portal', cells: ['✓', '✓', '✓', '✓'] },
  { label: 'Automated return rules', cells: ['1 policy', '3 rules', 'Unlimited', 'Unlimited'] },
  { label: 'Auto-approve low-risk returns', cells: ['—', '✓', '✓', '✓'] },
  { label: 'Store credit + bonus credit %', cells: ['Basic credit', '✓ (+ bonus %)', '✓ (+ bonus %)', '✓ (+ bonus %)'] },
  { label: 'Variant exchanges (size/color)', cells: ['—', '✓', '✓', '✓'] },
  { label: 'Full catalog exchanges', cells: ['—', '—', '✓', '✓'] },
  { label: 'Shopify reverse delivery labels & QR', cells: ['—', '—', '✓', '✓'] },
  { label: 'Keep-item / Green returns', cells: ['—', '—', '✓', '✓'] },
  { label: 'Custom portal branding', cells: ['—', '—', '✓', '✓'] },
  { label: 'Retained revenue analytics', cells: ['Basic (7 days)', '30 days', 'Full history', 'Full history + Export'] },
  { label: 'Multi-location return routing', cells: ['—', '—', '—', '✓'] },
  { label: 'Warranty claim workflows', cells: ['—', '—', '—', '✓'] },
  { label: 'API & webhook access', cells: ['—', '—', '—', '✓'] },
  { label: 'Support SLA', cells: ['Standard', 'Standard', 'Priority email', 'Dedicated priority'] },
];
