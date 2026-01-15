---
name: seo_blog_expert
description: Automated SEO Blog Content Generator specialized for the Australian Aluminium Window & Door industry.
---

# SEO Blog Expert Skill

This skill allows the agent to generate high-quality, SEO-optimized blog posts for `isupabuild.com`, specifically targeting the Australian construction and renovation market.

## Workflow

### 1. Keyword Research & Topic Selection
*   **Action:** Search for trending keywords related to "Aluminium Windows Australia", "Glass Doors Sydney", "NCC 2025 energy standards", "Bushfire rated windows BAL", etc.
*   **Goal:** Identify a high-volume, low-competition keyword.
*   **Output:** A compelling blog title and a slug.

### 2. Content Structure Planning
Every article must follow the established UI/UX pattern:
*   **Intro:** A punchy introduction with an italicized lead paragraph (using `border-l-4 border-cyan-500/50`).
*   **Thematically Grouped Sections:** 3-5 major sections wrapped in `<section class="mb-16">`.
*   **Visual Integration:** At least 2-3 figures with high-quality descriptions and SEO-friendly alt text.
*   **Compliance & Technical Details:** Mention specific Australian standards (AS 2047, AS 1288) or technologies (Thermal Break).
*   **CTA:** A closing section with a link to `Contact Superbuild`, `Products`, or `Certificates`.

### 3. Content Generation (Writing)
*   **Tone:** Authoritative, Professional, and Helpful ("Superbuild Expert").
*   **Keywords:** Sprinkle primary and secondary keywords naturally.
*   **Formatting:**
    *   `h2`: `text-3xl font-bold text-slate-900 mb-8 tracking-tight`
    *   `h3`: `text-2xl font-bold text-slate-800 mb-4`
    *   `ul`: `space-y-4 my-8 list-none pr-6`
    *   `li`: `<li class="flex items-start"><span class="text-cyan-600 mr-3">•</span>...</li>`
    *   `span.blog-highlight`: Use for key technical terms.

### 4. Image Generation
*   **Tool:** Use `generate_image`.
*   **Prompting:** Create realistic, high-end architectural photos of aluminium windows/doors in Australian settings (coastal, modern suburban, etc.).
*   **Placement:** Insert images into the content using the `<figure>` pattern.

### 5. Code Integration
*   **Action:** Append the generated object to `blogPosts` array in `/src/data/blogData.js`.
*   **Verification:** Ensure IDs are sequential and slug is unique.

## Design Tokens (HTML Snippets)

### Lead Paragraph
```html
<p class="text-xl md:text-2xl text-slate-600 italic mb-12 leading-relaxed border-l-4 border-cyan-500/50 pl-8">
  [Lead Text Here]
</p>
```

### Section Heading
```html
<h2 class="text-3xl font-bold text-slate-900 mb-8 tracking-tight">[Heading]</h2>
```

### Figure (Image)
```html
<figure class="my-14 overflow-hidden rounded-2xl border border-slate-200 shadow-2xl shadow-cyan-500/10">
  <img src="[Image Path]" alt="[SEO Alt Text]" class="w-full h-auto" />
  <figcaption class="text-center text-sm text-slate-500 mt-6 italic">[Captivating Caption]</figcaption>
</figure>
```

### List Item
```html
<li class="flex items-start">
  <span class="text-cyan-600 mr-3">•</span>
  <div><strong class="text-slate-900">[Point]:</strong> [Description]</div>
</li>
```

## Example Metadata
*   **Author:** `Superbuild Expert`
*   **Date:** Current date in `YYYY-MM-DD` format.
*   **Slug:** lowercase-kebab-case.
