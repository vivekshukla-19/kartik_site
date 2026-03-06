# Alpha Bags — Premium Bag Store (React + Vite + Tailwind)

Modern premium e-commerce UI for a bag brand (Backpacks, Laptop Bags, Travel Bags, Handbags).

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173/`.

## Replace the logo

- Current logo file: `public/logo.jpeg` (used in navbar + footer).
- To change it, replace `public/logo.jpeg` with your file (keeping the same name), or update the `src="/logo.jpeg"` in `Navbar.tsx` and `Footer.tsx`.
- The logo is sized with `className="h-9 w-auto object-contain"` to avoid stretching.

## Pages

- `/` Home (hero, categories, featured products, about, contact/newsletter)
- `/shop` Product grid + filters + skeleton loading
- `/product/:slug` Product detail (gallery, quantity, add to cart/wishlist, reviews)
- `/cart` Cart page (qty controls, summary)
- `/wishlist` Wishlist page

## Notes

- Cart + wishlist persist in `localStorage`.
- Product images are lightweight SVGs in `public/products/`.

