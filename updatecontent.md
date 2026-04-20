# Masterplan: Global Peace Ministry Website Upgrade

## 1. Design System & Palette

Replace existing styling with the following specific color mappings to maintain a professional, spiritual, and high-density look.

- **Primary Background:** `#fdffd6` (Light Cream - use for main body and section backgrounds)
- **Primary Text & Main Buttons:** `#2f4858` (Dark Slate - use for high-contrast readability)
- **Accents/Hover States:** `#456c76` (Deep Teal)
- **Section Dividers/Cards:** `#64918f` (Muted Teal)
- **Subtle Highlights/Shadows:** `#8eb7a6` (Light Sage)

**Rule:** Minimize `padding-y` on sections (use `py-12` instead of `py-24`) to keep the content moving and reduce "empty" space.

---

## 2. Updated Home Page Structure (High Density)

### Section 1: Hero (Compact & Direct)

- **Background:** `#fdffd6` with a subtle gradient or low-opacity pattern.
- **Content:** - Headline: "Reaching the World with the Message of Faith."
  - Sub-headline: "Join us in our mission to spread peace and the Word of God globally."
  - CTA Buttons: Primary (`#2f4858`) for "Give Now", Secondary (Outline) for "Watch Live".
- **Optimization:** Keep the height to 70vh to ensure the next section is visible above the fold.

### Section 2: The Daily Word (Faith Food)

- **Background:** White or `#8eb7a6` (Light Sage) with `#2f4858` text.
- **Content:** - Small "Word of the Day" card.
  - Brief Scripture + 2-3 sentence devotional.
  - "Read More" link.
- **UI:** A horizontal bar or a compact card layout.

### Section 3: Media Hub (Grid Layout)

- **Inspiration:** Rhema's Video/Podcast section.
- **Structure:** 3-column grid.
  - Column 1: Featured Video (Latest Sermon).
  - Column 2: Recent Podcasts.
  - Column 3: "Word of Faith" Articles.
- **Styling:** Use `#64918f` for card borders and `#2f4858` for titles.

### Section 4: Training & Schools (Impact Cards)

- **Inspiration:** Rhema Bible Training College (RBTC).
- **Content:** - "Global Peace Training Center"
  - 3 Cards: "Biblical Studies," "Missionary Training," "Leadership Dev."
- **UI:** Use `#456c76` for card headers. Ensure zero margin between cards to maximize space usage.

### Section 5: Quick Response Banner (Action)

- **Background:** Full-width `#2f4858` (Dark Slate).
- **Content:** - Left: "Need Prayer? We are here for you."
  - Right: Button (`#fdffd6`) "Submit Prayer Request."
- **UI:** High contrast, minimal height.

---

## 3. Global UI Updates (Antigravity Instructions)

1.  **Typography:** - Keep current fonts but increase weight for headings.
    - Set base text color to `#2f4858` for better contrast against `#fdffd6`.
2.  **Buttons:**
    - `Border-radius: 4px` (Sharp/Professional).
    - Background: `#2f4858`.
    - Hover: `#456c76` with a smooth `transition-all`.
3.  **Components:**
    - **Navbar:** Sticky, background `#fdffd6` with a bottom shadow in `#8eb7a6`.
    - **Footer:** Background `#2f4858`, text `#fdffd6`. Include "Salvation Prayer" link and "Contact Us" info in a 4-column layout.
4.  **Whitespace Reduction:**
    - Reduce `gap` in Flex/Grid layouts.
    - Use `max-w-7xl` for containers to allow more content to fit horizontally on larger screens.

---

## 4. Implementation Roadmap

1.  **Step 1:** Update `tailwind.config.js` with the new color palette.
2.  **Step 2:** Refactor the Home page to include the "Daily Word" and "Media Hub" sections.
3.  **Step 3:** Apply the `#fdffd6` background to the `<body>` and specific sections.
4.  **Step 4:** Replace all standard buttons with the `#2f4858` style.
5.  **Step 5:** Test mobile responsiveness to ensure the "high density" doesn't feel cluttered on small screens.
