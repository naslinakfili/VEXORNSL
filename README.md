# VEXOR

VEXOR is an electronics storefront demo built with Next.js, TypeScript, and Tailwind CSS. Visitors can browse a small catalog, search by product name, view product details, and add items to a shared cart.

This is a personal frontend portfolio project focused on responsive layouts, reusable React components, and authentication. The catalog uses local sample data, and checkout is a UI demo.

[Repository](https://github.com/naslinakfili/VEXORNSL)

## Features

- **Browse and search:** filter the homepage catalog by category or search from the header. Search is case-insensitive and includes an empty state when nothing matches.
- **Product details:** view product images and prices, choose available sizes, and use quantity controls.
- **Shared cart:** add products from their detail pages and view them at `/cartdrawer`. Cart state uses React Context and is written to `sessionStorage`.
- **Account access:** sign in with email and password or Google through Supabase, view a profile, and sign out.
- **Responsive UI:** product grids and page layouts adapt across screen sizes, with separate desktop and mobile checkout views.
- **Theme and media controls:** switch between dark and light themes from the desktop header, or play the hero video from its poster.

## Tech stack

- **Application:** Next.js 16.3 with the App Router, React 19.2, and TypeScript with strict checking.
- **UI:** Tailwind CSS 4, shadcn/ui components, Radix UI primitives, and Lucide icons.
- **State and theming:** React Context, React hooks, `sessionStorage`, and `next-themes`.
- **Authentication:** Supabase Auth with `@supabase/supabase-js` and `@supabase/ssr`.
- **Tooling:** ESLint 9 and the React Compiler, enabled in `next.config.ts`.

Exact dependency versions are recorded in [package.json](./package.json) and [package-lock.json](./package-lock.json).

## Implementation notes

- **URL-based search.** The header submits a GET form to `/shop?search=...`. The shop page reads the query on the server and filters the catalog, so a search can be shared as a link.
- **One typed catalog.** [lib/products.ts](./lib/products.ts) supplies the homepage, shop, product detail pages, and `GET /api/products`. The endpoint returns the same sample data as JSON; the storefront reads the module directly.
- **Shared and local state.** A cart provider wraps the page content and merges added items by product ID. Category selection, size selection, quantity inputs, and video playback use component state.
- **Browser and server authentication.** The header subscribes to Supabase auth changes. Google sign-in returns to `/auth/callback`, where a server client exchanges the authorization code for a session.
- **Reusable UI styling.** Shared controls live in `components/ui/`. CSS variables in `app/globals.css` define theme colors and component tokens.

## Project structure

```text
app/
  (auth)/                  Login and registration pages
  api/products/            JSON catalog endpoint
  auth/callback/           OAuth callback
  component/               Shared header and footer
  homepage/                Homepage sections and category state
  shop/                    Catalog and search
  productdescriptive/[id]/ Product detail route
  cartdrawer/              Cart page
  checkoutshipping/        Desktop and mobile checkout UI
  profile/                 Account details and sign-out
  layout.tsx               Global layout and providers
components/ui/             Shared UI primitives
lib/                       Product data, cart context, Supabase clients, utilities
public/                    Product images, hero artwork, and videos
```

Both `/` and `/homepage` render the homepage. To change the sample catalog, edit `lib/products.ts` and place product images in `public/`. No product database or migrations are required.

## Run locally

You need Node.js **20.9 or later**, npm, and a Supabase project. Supabase configuration is required because the shared header initializes an auth client.

### 1. Install dependencies

```bash
git clone https://github.com/naslinakfili/VEXORNSL.git
cd VEXORNSL
npm ci
```

### 2. Configure the environment

Create `.env.local` beside `package.json`:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_YOUR_KEY
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_YOUR_KEY
```

Use your project's URL and the same publishable key for both key variables. The auth pages use the browser client in `lib/supabase/client.ts`, which reads `ANON_KEY`; the server client reads `PUBLISHABLE_KEY`.

These must be public client keys, never a secret or `service_role` key. `.env.local` is ignored by Git. See [Supabase API keys](https://supabase.com/docs/guides/getting-started/api-keys) for the key types.

### 3. Set up Supabase Auth

Enable email/password sign-in. Set the Site URL to `http://localhost:3000` and add these Redirect URLs:

```text
http://localhost:3000/login
http://localhost:3000/auth/callback
```

For Google sign-in, enable the Google provider and follow the [Supabase Google setup guide](https://supabase.com/docs/guides/auth/social-login/auth-google) to configure OAuth credentials and the Supabase callback URL in Google Cloud.

Use an existing Supabase Auth account to try email/password login; the registration form has a known issue described below.

### 4. Start the application

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000). Restart the server after changing `.env.local`.

For another port, use `npm run dev -- --port 3001` and update the Supabase URLs accordingly. The development script binds to `0.0.0.0`, allowing access from another device on the same network when the firewall permits it.

### Lint and production build

```bash
npm run lint
npm run build
npm run start
```

Run `start` after a successful build. Lint is a separate check; Next.js 16 does not run it automatically during a build.

For deployment, set the same environment variables before building and update Supabase's Site URL and redirect allowlist to the deployed origin. Builds download the Geist fonts through `next/font/google`, so the build environment needs access to Google Fonts.

## Current limitations

- **Catalog controls:** homepage category filtering and name search are connected to the data. Shop filters, sorting, layout toggles, pagination, and the product-card plus buttons are still UI controls. Wearables has no sample products.
- **Cart behavior:** adding an item increments its quantity by one per click, regardless of the product page's quantity input. Cart quantity edits and removal do not update shared state, color selection is not connected to the stored variant, and cart counts and totals are static.
- **Checkout and sample content:** checkout does not process payments or save orders. Order summaries, discounts, stock messages, ratings, and testimonials use sample content.
- **Authentication:** the registration confirmation field is bound to the password state instead of `confirmPassword`, so sign-up stops at the password check. The session-refresh helper in `lib/middleware.ts` is not wired to a root Proxy/Middleware entry point; the profile page redirects unauthenticated visitors on the client.
- **Images:** some gallery thumbnails and recommendation cards reference image files that are not included in `public/`.

