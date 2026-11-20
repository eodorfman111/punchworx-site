# PunchWorx

A rebuilt website for [PunchWorx](https://www.punchworx.org), a Parkinson’s fitness nonprofit in Lakeland, Florida. Classes are Rock Steady Boxing and seasonal Aqua-Box Fitness at Kelly Recreation Complex.

The original Squarespace site was crawled and its wording, prices, schedule, addresses, phone numbers, and photos were kept. Layout, type, and color are new. The palette comes from the PunchWorx logo: navy `#03285D`, sky blue `#36B6FF`, and silver.

## Run locally

```bash
npm install
npm run dev
```

The dev server listens on port **43219**.

```bash
npm run build
```

`npm run build` writes a static site to `out/`. You can host that folder on any static host.

Netlify is set up in `netlify.toml`: the build command is `npm run build` and the publish directory is `out`. The site is a static export (`output: "export"`), with unoptimized images and no server routes, so Netlify does not need a Next.js runtime.

## Pages

| New page | Original page | What lives here |
| --- | --- | --- |
| `/` and `/home/` | `/` and `/home` | Name, “Where Exercise is Medicine,” the stay strong and fight back line, four focus words, the boxing program paragraph, Alexander the Great quote, class preview, 20 years announcement, testimonials, hours, address, map |
| `/about/` | `/about` | Affiliate description, mission, what we offer (including the original wording), member photos, testimonials |
| `/classes/` and the Services link | `/classes` | Membership prices, assessment fee, facility fee note, Aqua Box fall 2026 notice, Rock Steady and Aqua-Box descriptions, weekly tables, anniversary reel |
| `/team/` and `/team-2/` | `/team-2` | Coaches, board, Jerry L. quote, logo card, fight back / inspire hope / improve lives line |
| `/get-involved/` | `/get-involved` | Donation copy, mailing address for checks, 501(c)(3) registration, supporters and the 2026 sponsor list |
| `/contact/` and `/contact-1/` | `/contact-1` | Phone, email, visit address, hours, Name / Email / Message form, map |
| `/join/` | `/join` | The original page body was empty. This page gathers the existing join line, hours, address, and membership facts. |

Navigation labels match the original site: About, Services, Meet the Team, Donate Now, Contact.

## Phone numbers

The site shows one number, **865-219-7660** (also written **(865) 219-7660**). The footer line is “Phone: 865-219-7660”.

The original Squarespace site also printed **865-219-7600** in the footer. That second number is not shown.

## Form

The contact form still asks for Name, Email, and Message, and still says “Thank you!” after submit. There is no Squarespace form backend on this static site, so Submit opens the visitor’s email app addressed to Punchworx.inc@gmail.com.

## Images

Photos, the logo, Rock Steady class photos, coach and board portraits, and sponsor marks are the files from the Squarespace site, stored in `public/images/`. Stock photos of people from unused template pages are not used.

The Aqua-Box photo is the pool image the original classes page used (an Unsplash file, no people). The contact page also had a product-style boxing glove photo with no people. Class photos are used instead of that glove shot. The file is still in `public/images/contact-photo.jpg`.

## Pages crawled and not republished as offerings

These URLs were in the sitemap or returned a page, and they are not in the original navigation.

- `/contact` is an unpublished template page. Visible body text is “Please feel free to contact us with any questions.”, Phone `(555) 555-5555`, and E-mail `email@example.com`, with a stock photo. The real contact page is `/contact-1`.
- `/classes1` is an unpublished template page with generic class names (Pull Your Weight I and II, Obstacle Course I and II, Cardio Circuit, Strength Training) and stock photos of people. Those are not PunchWorx classes.
- `/cart` is the empty Squarespace cart.
- `/search` is the Squarespace search page.

## Original facts worth knowing while editing

- Rock Steady Boxing: Monday, Wednesday, and Friday at 8am, 9am, 10am, 11am, and Noon. Each class is 1 hour. The building line says Mon, Wed, Fri / 8am-1pm.
- Aqua-Box: Tuesday and Thursday, seasonal times, 10 weeks in spring and fall. “AQUA BOX FITNESS will resume class in the fall 2026.” The about page also says one seasonal Aqua-box class per week. Both lines are on the site.
- Membership: `$67/MONTH` for up to 3 classes per week. `$75` one-time assessment, includes boxing gloves. “Facility Fee required” has no dollar amount on the original site, so none is shown.
- Place: Kelly Recreation Complex, 404 Imperial Blvd., Lakeland, FL 33803.
- Mail: P.O. Box #5572, Lakeland, FL 33807. Check donations use “Lakeland, Florida 33807.”
- Email: Punchworx.inc@gmail.com
- Registration # CH78056. Toll-free consumer services line `(800-435-7352)`.
