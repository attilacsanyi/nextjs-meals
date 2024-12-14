## Next Meals

![Next.js 15](https://img.shields.io/badge/-Next.js%2015-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![CSS](https://img.shields.io/badge/-CSS-1572B6?style=flat-square&logo=css3)
![SQLite](https://img.shields.io/badge/-SQLite-003B57?style=flat-square&logo=sqlite)
![better-sqlite3](https://img.shields.io/badge/-better--sqlite3-4479A1?style=flat-square)
![slugify](https://img.shields.io/badge/-slugify-9cf?style=flat-square)
![xss](https://img.shields.io/badge/-xss-red?style=flat-square)

Example project following the **Next.js 15 & React - The Complete Guide** based on [Maximilian Schwarzmüller's Udemy course](https://www.udemy.com/course/react-the-complete-guide-incl-redux).

<img src="public/images/logo.png" width="150" alt="Next Meal Logo" />

## Next Meal Demo

- **Next.js 15 Core Features**

  - App Router with file-based routing
  - Server Components as default
  - Server Actions for form handling (meals sharing)
  - Dynamic Routes for meal details (`[mealSlug]`)
  - Static Metadata API for SEO
  - Loading UI and Error Boundaries
  - Not Found pages handling

- **React Hooks & Patterns**

  - `useActionState` for form submission states
  - `useFormStatus` for indicating form submission state
  - `useRef` for file input handling
  - `useState` for image preview
  - `useEffect` for image slideshow
  - `usePathname` for active link detection

- **Data & Image Handling**

  - SQLite database integration with `better-sqlite3`
  - Image optimization with `Next/Image` component
  - File upload handling for meal images
  - XSS protection with `xss` package
  - Slug generation with `slugify`

- **Styling & UI**

  - CSS Modules for scoped styling
  - Responsive design with media queries
  - Custom animations and transitions
  - SVG background with gradient
  - Google Fonts integration
  - Image slideshow component

## Screenshots

Meal Home

<img src="public/readme/next-meals-home.png" width="500" alt="Next Meal Home" />

Meal Detail

<img src="public/readme/next-meals-detail.png" width="500" alt="Next Meal Detail" />

Share Meal Page

<img src="public/readme/next-meals-share.png" width="500" alt="Next Meal Share" />
