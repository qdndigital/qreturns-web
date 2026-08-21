# QReturns — Website & Marketing Landing Page

Marketing website and customer return portal for **QReturns** — the Shopify returns, exchanges, and reverse logistics app built to turn product returns into retained revenue.

Built with **Astro 4**, **Tailwind CSS 3**, and the **Polaris Pro** design system (Inter typography, emerald accent tokens, responsive layouts, and zero heavy client framework runtimes).

---

## Key Pages & Features

* **Marketing Landing Page (`/`)**: High-converting SaaS homepage featuring an interactive engine console, 6-card bento grid, problem vs. solution breakdown, and 4-tier pricing ladder.
* **How It Works (`/how-it-works`)**: Technical breakdown of the 4 return stages, rules engine criteria, and state machine transitions.
* **Pricing & Plans (`/pricing`)**: 4-tier pricing matrix (`Free $0`, `Starter $19`, `Growth $49`, `Pro $149`) with soft quotas and feature comparison.
* **Shopify Integrations (`/integrations`)**: Breakdown of Shopify App Proxy, Store Credit Accounts API, Reverse Deliveries, Draft Orders, and Files API.
* **Interactive Customer Portal Demo (`/demo`)**: Live return wizard demo with preloaded test account `#1042`.
* **Live Return Status Tracking (`/status`)**: Multi-stage progress tracking demo (`RET-894201`).
* **FAQ & Policies (`/faq`)**: Merchant setup instructions and customer policy guides.
* **GDPR & Legal (`/privacy`, `/terms`)**: Data protection and compliance policies.

---

## Tech Stack

* **Astro 4**: Static site generation and minimal bundle size.
* **Tailwind CSS 3**: Polaris Pro design tokens (`#00a36b`, `#101317`, `#f6f7f8`).
* **TypeScript**: Strict type safety.

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/<username>/qreturns-web.git
cd qreturns-web

# Install dependencies
pnpm install

# Start local dev server
pnpm run dev
```

---

## Quick Demo Test Accounts

| Order # | Email | Description |
| :--- | :--- | :--- |
| `#1042` | `sarah.jenkins@example.com` | Multi-item order with 3 eligible items and 1 final sale item. |
| `#1088` | `alex.rivera@example.com` | Fragrance and electronics order. |
| `#1005` | `expired@example.com` | Order past 30-day return window (validation demo). |
| `RET-894201` | — | Return status tracking demo in **In Transit** state. |
| `RET-720194` | — | Return status tracking demo in **Refund Completed** state. |
