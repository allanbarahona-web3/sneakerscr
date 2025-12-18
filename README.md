# � **SneakersCR**
**An eCommerce storefront for athletic footwear and sports gear.**

SneakersCR is a modern, single-tenant **sports eCommerce platform** built with Next.js 16, React 19, and TypeScript. Designed for high performance and seamless user experience.

---

## ✨ **Features**

- 🛍️ **Product Catalog** - Featured products with descriptions and pricing
- 🛒 **Shopping Cart** - Add/remove items with real-time updates
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ⚡ **Fast Performance** - Next.js 16 with Turbopack bundler
- 🎨 **Modern UI** - Radix UI components + Lucide React icons
- 💬 **WhatsApp Integration** - Direct customer support via WhatsApp
- 📊 **Cart Management** - Context-based state management with React Context API

---

## 🛠 **Tech Stack**

| Technology | Version |
|-----------|---------|
| **Framework** | Next.js 16.0.7 |
| **Language** | TypeScript 5.9.3 |
| **UI Library** | React 19.2.1 |
| **Styling** | Tailwind CSS 3.4.14 |
| **Components** | Radix UI + shadcn/ui |
| **Icons** | Lucide React 0.554.0 |
| **Package Manager** | pnpm 10.26.0 |

---

## 📁 **Project Structure**

```
sneakerscr/
├── app/                              # Next.js application
│   ├── app/                          # App Router routes
│   │   ├── page.tsx                  # Home page
│   │   └── sports/                   # Sports theme routes
│   ├── src/
│   │   ├── themes/sports/            # Sports theme components
│   │   │   ├── components/           # Hero, Header, Products, Footer, etc.
│   │   │   ├── context/              # CartContext for state management
│   │   │   ├── data/                 # Product data
│   │   │   └── page.tsx              # Main theme page
│   │   ├── components/ui/            # Reusable UI components
│   │   ├── lib/                      # Utilities and helpers
│   │   └── styles/                   # Global styles
│   ├── public/                       # Static assets
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.js
├── .git/                             # Git repository
└── README.md                         # This file
```

---

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+ 
- pnpm 10.x

### Installation

```bash
# Clone the repository
git clone https://github.com/allanbarahona-web3/sneakerscr.git
cd sneakerscr/app

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
```

### Running the Development Server

```bash
# Start development server on port 3002
pnpm dev

# Open in browser
# http://localhost:3002/
# or http://localhost:3002/sports
```

### Building for Production

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

---

## 🔗 **Key Pages**

- **`/`** - Home page (redirects to sports theme)
- **`/sports`** - Main sports eCommerce storefront

---

## 🎨 **Themes Structure**

Currently running **Sports Theme Only**:
- Hero section with featured banner
- Product showcase with add-to-cart functionality
- Benefits section
- How it works guide
- Testimonials
- FAQ section
- Footer with links
- WhatsApp floating button for support

---

## 📦 **Environment Variables**

Create `.env.local` in `/app/` directory:

```dotenv
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
NEXT_PUBLIC_APP_URL=http://localhost:3002
NODE_ENV=development
```

---

## 🔄 **State Management**

- **Cart State**: React Context API (`CartContext`)
- **Global State**: Component-level with useState
- **No external state library** - Lightweight and focused

---

## 📱 **Components**

### Sports Theme Components
- `Hero` - Main banner section
- `Header` - Navigation and cart icon
- `FeaturedProducts` - Product grid with add to cart
- `Benefits` - Key value propositions
- `HowItWorks` - Process explanation
- `Testimonials` - Customer reviews
- `FAQ` - Common questions
- `Footer` - Site footer with links
- `WhatsAppFloat` - Floating WhatsApp button
- `ProductCard` - Individual product display
- `ShippingModal` - Shipping information modal

---

## 🧪 **Development**

### Code Quality
- TypeScript for type safety
- Strict mode enabled
- ESLint configured
- Path aliases for cleaner imports (`@/`, `@/themes/`, etc.)

### Build Process
- Turbopack (Next.js 16 bundler)
- Optimized for fast builds and HMR

---

## 🚢 **Deployment**

Ready to deploy on:
- **Vercel** (recommended - native Next.js support)
- **Netlify**
- **AWS**, **GCP**, **Azure** (with Docker)

### Vercel Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

---

## 📝 **Git Workflow**

```bash
# Check changes
git status

# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add feature description"

# Push to remote
git push origin master
```

---

## 🤝 **Contributing**

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit: `git commit -m "feat: your feature"`
4. Push: `git push origin feature/your-feature`
5. Create a Pull Request

---

## 📄 **License**

This project is licensed under the MIT License - see LICENSE file for details.

---

## 👨‍💻 **Author**

**Allan Barahona**  
- GitHub: [@allanbarahona-web3](https://github.com/allanbarahona-web3)
- Repository: [sneakerscr](https://github.com/allanbarahona-web3/sneakerscr)

---

## 📞 **Support**

For support, reach out via WhatsApp through the floating button on the site or open an issue on GitHub.

---

## 🗺️ **Roadmap**

- [ ] Backend API integration
- [ ] Payment gateway integration
- [ ] User authentication system
- [ ] Order management
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Email notifications
- [ ] Analytics tracking


🔐 **Each tenant has its own users, domain, products, orders, settings, contacts and data rules.**

---

## 🛠 **Tech Architecture (High-Level)**
> Stack: **NestJS + PostgreSQL (RLS) + Next.js App Router + Stripe + Docker**

┌────────────── Storefront (Next.js) ───────────────┐
│ Auth • Cart • Checkout • Admin • Custom Themes │
└──────────────────────────┬────────────────────────┘
↓
┌──────────────────── Backend (NestJS) ─────────────┐
│ Modules: Commerce • CRM • Billing • Automations │
│ RLS + Auth + JTI + Rate Limit + DTO Validation │
└──────────────────────┬────────────────────────────┘
↓
PostgreSQL + Row-Level Security (RLS)


---

## 🔐 **Security & Isolation**
✔ PostgreSQL **Row-Level Security (32+ policies)**  
✔ JWT with **JTI revocation**  
✔ Rate limiting + CORS rules  
✔ Role-based access control (admin, customer, super admin)  
✔ Domain-to-tenant routing with middleware + guards  
✔ Strict tenant isolation in every service  

---

## 🚀 **Project Status**
🔧 **Backend — Production-Ready (85%+)**
- NestJS + Prisma  
- Multi-tenancy + Host extraction  
- RLS Policies across all modules  
- Auth + JTI + Rate limiting  
- 32+ endpoints shipped  
- Tests in progress  

🛒 **Storefront — Functional (App Router)**
- Multi-tenant UI + Themes  
- Cart + Checkout flow  
- Admin panel with products, media, payments  
- Auth modal + context + reusable hooks  

💬 **CRM & Automations — Architecture Complete**
- WebSockets + gateway  
- WhatsApp API + Telegram ready  
- Automation layer planned around events, queues and webhooks 
---

## 📦 **Module Activation (Tenant-Based)**

Tenant 1 → Storefront + Billing
Tenant 2 → CRM + Automations
Tenant 3 → Storefront + CRM + Billing + Automations


📌 **This makes the platform scalable as a SaaS business**, not just an eCommerce template.

---

## 📁 **Project Structure**

<details>
<summary><b>Backend (NestJS + Prisma) — click to expand</b></summary>



api/
├── src/
│ ├── common/ # Decorators, guards, interceptors
│ ├── modules/ # Commerce, CRM, Billing, Automations
│ ├── prisma/ # ORM & migrations
│ ├── app.module.ts
│ └── main.ts
└── prisma/
├── schema.prisma
├── enable-rls.sql
└── seed.ts


</details>

<details>
<summary><b>Frontend (Next.js App Router) — click to expand</b></summary>



app/
├── (storefront)/ # Public store per tenant
├── (tenant-admin)/ # Admin Panel
├── components/ # Shared UI + modals + hooks
├── lib/ # API config + helpers + tenant utils
└── middleware.ts # Multi-tenant domain handling


</details>

---

## 🧪 **Tests**
> Tests cover security rules, RLS policies, domain isolation and business flows.

- Backend: **Jest + Supertest**  
- Frontend: **Vitest + Playwright**  
- Payment testing via **Stripe CLI & Paypal Sandbox & Crypto**

---

## 🚧 **Roadmap**

### Phase 1 — Finishing Commerce & Billing
- Complete checkout & order tracking  
- Stripe + PayPal + Crypto payments  
- Email + receipt automation  

### Phase 2 — CRM Release
- Webhooks + smart routing  
- Full WhatsApp/Telegram/Instagram/Tiktok/Emails/etc flows  
- Chat assignment + analytics  

### Phase 3 — Automations Hub
- Business rules engine  
- Workflow automation via APIs, webhooks, and messaging triggers
- API marketplace for modules  

---

## 📌 **License & Contact**
This project is currently **not open for contributions.**  
Business inquiries: *(add your email or LinkedIn link here)*

Nov27/2025