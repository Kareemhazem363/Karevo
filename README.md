# Karevo

A modern e-commerce web app for clothing and accessories, built with **Next.js 15**, **React 19**, **TypeScript** and **Tailwind CSS v4**. It was developed as the final project of the Route Front-End Diploma, and it talks to the public [Route E-commerce API](https://ecommerce.routemisr.com).

**Live demo:** _add your Vercel link here_

## Features

- **Authentication**: register and sign in with email and password using NextAuth (Credentials provider), with the session kept in a JWT.
- **Product browsing**: home page with a hero slider and promo banners, a products page, product details, search, categories (with sub-categories) and brands.
- **Shopping cart**: add, update quantity, remove items and clear the cart.
- **Wishlist**: save products to a personal wishlist.
- **Checkout**: choose a shipping address, then pay by **cash on delivery** or **online** (an online payment session created through the API).
- **Orders**: view your order history.
- **Profile**: manage saved addresses and account settings.
- **Responsive UI**: designed to work on mobile, tablet and desktop, with toast notifications and loading states.

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4, shadcn/ui (Base UI), lucide-react, react-icons |
| Data and state | TanStack Query, Next.js Server Actions |
| Forms and validation | React Hook Form, Zod |
| Auth | NextAuth.js v4 |
| UI extras | Swiper, AOS, react-hot-toast, react-spinners |
| Fonts | Poppins and Playfair Display (`next/font`) |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/Kareemhazem363/Karevo.git
cd Karevo
npm install
```

### Environment variables

Create a `.env.local` file in the project root (note the trailing slash in `API`):

```env
API=https://ecommerce.routemisr.com/api/v1/
NEXTAUTH_SECRET=your_long_random_secret
NEXTAUTH_URL=https://karevo-eight.vercel.app
```

Generate a secret with `openssl rand -base64 32` or any long random string. Never commit this file.

### Run the app

```bash
npm run dev      # development server at http://localhost:3000
npm run build    # production build
npm run start    # run the production build
```

## Project Structure

```
src/
├── app/
│   ├── (auth)/            # Login and Register
│   ├── actions/           # Server Actions (auth, cart, wishlist, ...)
│   ├── _apis/             # API helpers
│   ├── _components/       # Navbar, Slider, Cart, Wishlist, Logo, ...
│   ├── products/ productDetails/ categories/ brands/
│   ├── cart/ wishlist/ checkout/ orders/
│   ├── profile/           # addresses and settings
│   ├── about/ contact/
│   └── layout.tsx
├── Footer/
└── assets/                # images
```

## Notes

- Products, categories, brands, carts, wishlists and orders are served by the Route API, so the data lives on its server and is tied to each user's account.
- No real payments are processed. This is a training project.

## Author

**Kareem Hazem**: Computer Science student, Ain Shams University.

- GitHub: [@Kareemhazem363](https://github.com/Kareemhazem363)
