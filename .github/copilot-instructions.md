# Copilot Instructions for cgb37.github.io

Personal portfolio and technical blog built with Jekyll and GitHub Pages.

## Architecture Overview

- **Static Site Generator**: Jekyll with GitHub Pages gem
- **Theme**: Custom dark theme using Bootstrap (Superhero variant)
- **Content Types**: Blog posts (`_posts/`), projects, courses, presentations
- **Layouts**: Nested layout system - `default.html` → `blog/post.html` for posts

## Development Commands

```bash
npm run serve    # Start dev server with live reload at localhost:4000
npm run build    # Build static site to _site/
npm run stop     # Kill Jekyll server process
```

## Blog Post Conventions

### File Naming
Posts must follow: `YYYY-MM-DD-slug-title.{html,md}` in `_posts/`

### Required Front Matter
```yaml
---
posttype: blog
category: howto                    # Post category
layout: blog/post                  # Always use this layout
title: "Title in Quotes"
author: Charles Brown-Roberts
tags: [tag1, tag2]                # Array format for tags
keywords: [keyword1, keyword2]    # SEO keywords
description: "Brief description"   # Used in meta tags & structured data
abstract: "Longer summary"         # Used in structured data
thumb: YYYY-MM-DD-slug-thumb.webp  # Thumbnail in images/posts/thumb/
jumbo: YYYY-MM-DD-slug-jumbo.webp  # Header image in images/posts/jumbo/
programming_languages: [Python, JavaScript]  # Languages used in post
difficulty_level: "beginner"       # beginner, intermediate, advanced
learning_objectives:               # What readers will learn
  - "First objective"
  - "Second objective"
technologies:                      # Tech stack with Schema.org data
  - name: "Docker"
    category: "DevOps"
    url: "https://docker.com"
---
```

### Content Structure
Posts use semantic HTML sections, not markdown headings:
```html
<section>
  <h2>Section Title</h2>
  <p>Content...</p>
</section>
```

Use `<pre><code class="language-{lang}">` for code blocks (Rouge highlighter).

## Image Conventions

- **Thumbnails**: 250×200px WebP → `images/posts/thumb/`
- **Jumbo headers**: Full-width WebP → `images/posts/jumbo/`
- **Naming**: Match post filename: `YYYY-MM-DD-slug-{thumb,jumbo}.webp`
- **Conversion script**: `_scripts/convert_svg_to_webp.sh`

## Template Files

- `_posts/blog-post-template.html` - Base template for new posts
- `_layouts/blog/post.html` - Full post layout with structured data
- `_includes/structured-data-blog-post.html` - Schema.org JSON-LD

## Key Configuration

`_config.yml` defines:
- `posts_jumbo_image_path`: "images/posts/jumbo"
- `posts_thumb_image_path`: "images/posts/thumb"
- Permalink pattern: `/:title` (no date prefix in URLs)

## Include Components

Located in `_includes/`:
- `head.html` - Meta tags, Open Graph, Twitter Cards
- `structured-data-blog-post.html` - SEO structured data (244 lines)
- `tags/related_posts_by_tag.html` - Related posts by tag matching
- `adsense-blog-post.html` - Ad placement

## Supporting Content

`_topics/` contains source materials and scripts referenced in blog posts (e.g., AppleScript files, documentation).

## Do NOT Modify

- `_site/` - Auto-generated build output
- `Gemfile.lock` - Ruby dependency lock
