---
name: nano-banana-prompt
description: Generates optimized image prompts for Google AI Studio (Gemini 2.5 Flash Image). Use when asked to create a prompt for blog featured images, thumbnails, icons, diagrams, or any visual content. Reads blog posts to extract context and outputs copy-paste ready prompts.
metadata:
  author: cgb37
  version: "2.0"
---

# Nano Banana Prompt Generator

Generate optimized image prompts for copy-paste into [Google AI Studio](https://aistudio.google.com/prompts/new_chat?model=gemini-2.5-flash-image).

## Reference Images

**CRITICAL**: Before generating prompts, analyze the reference images in `assets/` to extract the established brand identity.

| Example | Jumbo | Thumb |
|---------|-------|-------|
| Conventional Commits | [assets/jumbo/2024-03-07-choosing-the-right-conventional-commit-type-for-a-composer-library-switch-jumbo.webp](assets/jumbo/2024-03-07-choosing-the-right-conventional-commit-type-for-a-composer-library-switch-jumbo.webp) | [assets/thumb/2024-03-07-choosing-the-right-conventional-commit-type-for-a-composer-library-switch-thumb.webp](assets/thumb/2024-03-07-choosing-the-right-conventional-commit-type-for-a-composer-library-switch-thumb.webp) |
| Composer Dependencies | [assets/jumbo/2024-03-07-managing-composer-dependencies-across-multiple-environments-jumbo.webp](assets/jumbo/2024-03-07-managing-composer-dependencies-across-multiple-environments-jumbo.webp) | [assets/thumb/2024-03-07-managing-composer-dependencies-across-multiple-environments-thumb.webp](assets/thumb/2024-03-07-managing-composer-dependencies-across-multiple-environments-thumb.webp) |
| Doom Emacs Navigation | [assets/jumbo/2024-03-14-simplifying-window-navigation-in-doom-emacs-with-super-key-bindings-jumbo.webp](assets/jumbo/2024-03-14-simplifying-window-navigation-in-doom-emacs-with-super-key-bindings-jumbo.webp) | [assets/thumb/2024-03-14-simplifying-window-navigation-in-doom-emacs-with-super-key-bindings-thumb.webp](assets/thumb/2024-03-14-simplifying-window-navigation-in-doom-emacs-with-super-key-bindings-thumb.webp) |
| Symfony API Platform | [assets/jumbo/2024-03-28-creating-your-first-symfony-project-with-api-platform-a-beginners-guide-jumbo.webp](assets/jumbo/2024-03-28-creating-your-first-symfony-project-with-api-platform-a-beginners-guide-jumbo.webp) | [assets/thumb/2024-03-28-creating-your-first-symfony-project-with-api-platform-a-beginners-guide-thumb.webp](assets/thumb/2024-03-28-creating-your-first-symfony-project-with-api-platform-a-beginners-guide-thumb.webp) |
| Symfony Dependency Injection | [assets/jumbo/2024-03-30-demystifying-dependency-injection-in-symfony-for-beginners-jumbo.webp](assets/jumbo/2024-03-30-demystifying-dependency-injection-in-symfony-for-beginners-jumbo.webp) | [assets/thumb/2024-03-30-demystifying-dependency-injection-in-symfony-for-beginners-thumb.webp](assets/thumb/2024-03-30-demystifying-dependency-injection-in-symfony-for-beginners-thumb.webp) |
| macOS App Automation | [assets/jumbo/2025-10-06-automating-application-management-macos-scheduled-app-closing-jumbo.webp](assets/jumbo/2025-10-06-automating-application-management-macos-scheduled-app-closing-jumbo.webp) | [assets/thumb/2025-10-06-automating-application-management-macos-scheduled-app-closing-thumb.webp](assets/thumb/2025-10-06-automating-application-management-macos-scheduled-app-closing-thumb.webp) |

## When to Use This Skill

ALWAYS use this skill when the user:

- Asks for an image prompt for a blog post
- Wants a featured image, thumbnail, or banner prompt
- Requests prompts for icons, diagrams, or illustrations
- Uses words like: "generate prompt", "image for", "thumbnail for", "featured image"
- References a blog post HTML file and needs visuals

Do NOT execute CLI commands or API calls—output is **text only** for copy-paste.

## Workflow

### Step 1: Analyze Reference Images for Brand Identity

Before generating any prompt, extract the consistent brand identity from the reference images:

#### Color Palette
- Dark purple gradient backgrounds (#1a0a2e → #2d1b4e)
- Dark navy/blue gradients (#0a1628 → #1a2744)
- Neon accent colors: blue (#00D4FF), magenta (#FF00FF), teal (#00FFC8), green (#00FF88)

#### Visual Style
- Flat illustration or isometric 3D
- Clean minimalist aesthetic
- Modern tech illustration style
- Subtle geometric patterns (grids, hexagons)

#### Common Elements
- Centered hero composition
- Generous negative space
- Soft glow effects on key elements
- No text rendered in images

#### Emotional Mood
- Professional yet approachable
- Tech-forward and modern
- Educational and clear
- Sleek and polished

### Step 2: Gather Topic Context

If the user references a blog post file:

1. Read the HTML file from `_posts/` directory
2. Extract: `title`, `tags`, `keywords`, `description`, `abstract`, `technologies`
3. Identify main topic/theme from content

If no file is provided, use the user's description directly.

### Step 3: Generate Prompts for Target Formats

Generate prompts that **strictly adhere** to the visual style of the reference images.

#### Target Formats and Aspect Ratios

| Format | Aspect Ratio | Model Recommendation |
|--------|--------------|---------------------|
| Blog Jumbo Header | 16:9 | `gemini-2.5-flash-image` (standard) |
| Thumbnail | 1:1 or 4:3 | `gemini-2.5-flash-image` (standard) |
| High-Quality Jumbo | 16:9 | `gemini-3-pro-image-preview` + imageSize: 2K or 4K |

**Default**: Generate prompts for both **Blog Jumbo Header (16:9)** and **Thumbnail (1:1)**.

### Step 4: Construct the Prompt

#### Prompt Structure

```
[Subject], [Visual Style from brand], [Color Palette from brand], [Mood from brand], [Composition], no text
```

#### Required Components

1. **Subject**: Specific visual metaphor representing the topic
2. **Visual Style**: Must match reference images (flat/isometric illustration, minimalist)
3. **Color Palette**: Use exact brand colors (dark gradients + neon accents)
4. **Mood**: Professional, modern, tech-forward
5. **Composition**: Centered hero, generous negative space
6. **"no text"**: ALWAYS include

### Step 5: Output Format

```markdown
## 🖼️ Image Prompt for: [Post Title]

### Brand Identity Analysis
| Element | Value |
|---------|-------|
| **Color Palette** | Dark purple/navy gradients, neon blue/magenta/teal accents |
| **Visual Style** | Flat/isometric illustration, minimalist |
| **Common Elements** | Centered composition, soft glows, geometric patterns |
| **Mood** | Professional, tech-forward, approachable |

---

### Blog Jumbo Header
**Aspect Ratio**: 16:9  
**Model**: `gemini-2.5-flash-image`

```
[Full prompt here]
```

### Thumbnail
**Aspect Ratio**: 1:1  
**Model**: `gemini-2.5-flash-image`

```
[Simplified prompt here]
```

---
📋 **Copy prompt** → Paste into [Google AI Studio](https://aistudio.google.com/prompts/new_chat?model=gemini-2.5-flash-image)

💡 **For higher quality**: Use `gemini-3-pro-image-preview` with imageSize `2K` or `4K`
```

## Prompt Examples

### Git/Version Control

**Topic**: Choosing the right conventional commit type

**Jumbo (16:9)**:
```
flat illustration of a stylized git branch diagram with glowing commit nodes, each node a different color representing commit types (green for feat, blue for fix, purple for refactor), dark navy gradient background with subtle grid lines, neon blue and magenta highlights, clean minimalist style, professional tech aesthetic, centered composition with generous negative space, no text
```

**Thumb (1:1)**:
```
bold stylized git commit node icon with colorful glow effect, dark purple background, high contrast neon accents, simplified geometric shapes, centered, no text
```

### PHP/DevOps

**Topic**: Managing Composer dependencies across environments

**Jumbo (16:9)**:
```
isometric illustration of three interconnected server platforms representing dev/staging/prod environments, connected by glowing data streams, PHP elephant icon subtly integrated, dark purple gradient background, neon blue and teal accents, clean minimalist DevOps aesthetic, architectural precision, centered composition, no text
```

**Thumb (1:1)**:
```
bold isometric server stack icon with glowing connections, dark purple background, high contrast neon teal accents, simplified shapes, centered, no text
```

### macOS Automation

**Topic**: Automating application management on macOS

**Jumbo (16:9)**:
```
flat illustration of a MacBook with app icons floating above being organized by an elegant clock mechanism, soft purple and blue gradient background, Apple design aesthetic with subtle shadows, neon teal accents on clock hands, centered composition with generous negative space, no text
```

**Thumb (1:1)**:
```
stylized MacBook icon with floating app icons and clock element, dark purple background, neon teal glow, simplified minimalist shapes, centered, no text
```

## Thumbnail Simplification Rules

Transform jumbo prompts for thumbnails:

1. **Simplify**: ONE hero element only
2. **Bold colors**: Increase contrast and saturation
3. **Remove details**: No grid lines, patterns, or secondary elements
4. **Center tightly**: Hero fills more frame
5. **Change aspect**: 1:1 or 4:3 (not 16:9)

## Model Selection Guide

| Use Case | Model | imageSize |
|----------|-------|-----------|
| Standard blog images | `gemini-2.5-flash-image` | N/A |
| High-quality hero images | `gemini-3-pro-image-preview` | 2K |
| Print/large format | `gemini-3-pro-image-preview` | 4K |

## Checklist

- [ ] Analyzed reference images for brand identity
- [ ] Extracted topic from blog post or user description
- [ ] Prompt adheres strictly to reference visual style
- [ ] Color palette matches brand (dark gradients + neon)
- [ ] Aspect ratio correct (16:9 jumbo, 1:1 thumb)
- [ ] Model recommendation included
- [ ] Ends with "no text"
- [ ] Both formats provided (jumbo + thumb)
- [ ] Thumb is simplified version of jumbo
