/**
 * Pricing — SINGLE SOURCE OF TRUTH for Qreturns.
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
    desc: 'A self-service return portal on your store, free forever.',
    features: [
      '20 returns per month included',
      'Branded customer return portal on your own domain',
      'Customers sign in and see only their own orders',
      '1 return policy (window, fees, final-sale items)',
      'Per-product Free Return / Non-Returnable lists',
      'Approve, inspect and refund inside Shopify Admin',
      'Analytics for the last 7 days',
    ],
    cta: 'install',
  },
  {
    name: 'Starter',
    price: '$19',
    period: '/ month',
    quota: '100 returns / month',
    desc: 'Approve less by hand and keep customers informed.',
    features: [
      '100 returns per month included',
      '3 return policy rules',
      'Auto-approve the returns you always accept',
      'Restocking fee and return shipping fee',
      'Customer email notifications at each step',
      'Portal logo and accent colour',
      'Analytics for the last 30 days',
    ],
    cta: 'install',
  },
  {
    name: 'Growth',
    price: '$49',
    period: '/ month',
    quota: '500 returns / month',
    desc: 'Prepaid labels and free-return shipping for growing stores.',
    badge: 'Most Popular',
    feat: true,
    features: [
      '500 returns per month included',
      'Unlimited return policy rules',
      'Prepaid return labels on your own Shippo account',
      'Protect Product: free return shipping at checkout',
      'Portal logo, colours and custom CSS',
      'Analytics for the last 12 months',
      'Everything in Starter',
    ],
    cta: 'install',
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/ month',
    quota: 'Unlimited returns',
    desc: 'High-volume stores that never want to think about a quota.',
    features: [
      'Unlimited returns per month',
      'CSV export of your analytics',
      'Everything in Growth',
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
  { label: 'Return portal on your domain', cells: ['✓', '✓', '✓', '✓'] },
  { label: 'Return policy rules', cells: ['1 policy', '3 rules', 'Unlimited', 'Unlimited'] },
  { label: 'Free Return / Non-Returnable products', cells: ['✓', '✓', '✓', '✓'] },
  { label: 'Auto-approve returns', cells: ['—', '✓', '✓', '✓'] },
  { label: 'Customer email notifications', cells: ['—', '✓', '✓', '✓'] },
  { label: 'Prepaid labels (Shippo) & Protect Product', cells: ['—', '—', '✓', '✓'] },
  { label: 'Portal branding', cells: ['Logo', 'Logo + colours', 'Logo, colours, CSS', 'Logo, colours, CSS'] },
  { label: 'Analytics history', cells: ['7 days', '30 days', '12 months', '12 months + CSV export'] },
];
