# Prompt Templates Reference

Quick-reference templates derived from brand identity analysis of assets in `assets/jumbo/` and `assets/thumb/`.

## Brand Identity (Extracted from Reference Images)

### Color Palette
| Type | Colors |
|------|--------|
| **Background Gradients** | Dark purple (#1a0a2e → #2d1b4e), Dark navy (#0a1628 → #1a2744) |
| **Neon Accents** | Blue (#00D4FF), Magenta (#FF00FF), Teal (#00FFC8), Green (#00FF88) |

### Visual Style
- Flat illustration or isometric 3D
- Clean minimalist aesthetic
- Modern tech illustration style
- Subtle geometric patterns (grids, hexagons)

### Common Elements
- Centered hero composition
- Generous negative space
- Soft glow effects on key elements
- No text rendered in images

### Emotional Mood
- Professional yet approachable
- Tech-forward and modern
- Educational and clear
- Sleek and polished

## Target Formats

| Format | Aspect Ratio | Model | Notes |
|--------|--------------|-------|-------|
| Blog Jumbo Header | 16:9 | `gemini-2.5-flash-image` | Standard quality |
| Thumbnail | 1:1 or 4:3 | `gemini-2.5-flash-image` | Simplified version |
| High-Quality Jumbo | 16:9 | `gemini-3-pro-image-preview` | Use imageSize: 2K or 4K |

## Jumbo Templates (16:9)

### Git/Version Control
```
flat illustration of [GIT_CONCEPT] with glowing [VISUAL_ELEMENT], dark navy gradient background with subtle grid lines, neon blue and magenta highlights, clean minimalist style, professional tech aesthetic, centered composition with generous negative space, no text
```

### PHP/Composer/DevOps
```
isometric illustration of [INFRASTRUCTURE_ELEMENT] represented as [VISUAL_METAPHOR], connected by glowing data streams, dark purple gradient background, neon blue and teal accents, clean minimalist DevOps aesthetic, architectural precision, centered composition, no text
```

### Editor/IDE Tools
```
flat illustration of [EDITOR_INTERFACE] with [DISTINCTIVE_FEATURE], dark mode color scheme with purple and green neon accents, minimalist tech aesthetic, centered composition with breathing room, no text
```

### PHP Framework (Symfony, Laravel)
```
isometric illustration of [FRAMEWORK_CONCEPT] represented as [VISUAL_METAPHOR], [FRAMEWORK_ICON] stylized as central element, dark gradient background with subtle hexagonal pattern, purple and orange neon accents, friendly yet professional tech illustration style, no text
```

### macOS/Apple Automation
```
flat illustration of [APPLE_DEVICE] with [AUTOMATION_VISUAL], soft purple and blue gradient background, Apple design aesthetic with subtle shadows, neon teal accents on [KEY_ELEMENT], centered composition with generous negative space, no text
```

### Architecture/Patterns
```
flat illustration of [PATTERN_VISUAL] connecting together, representing [CONCEPT], soft purple and teal color scheme, dark gradient background, clean educational style that feels approachable, isometric perspective, no text
```

## Thumbnail Templates (1:1)

Thumbnails require **simplification** - ONE hero element, bolder colors, no subtle details.

### Hero Icon Focus
```
bold [SINGLE_ICON] with glowing [ACCENT], dark [PRIMARY_COLOR] background, high contrast neon [ACCENT_COLOR] accents, simplified shapes, centered, no text
```

### Simplified Isometric
```
single isometric [ELEMENT] icon, dark gradient background, vibrant neon [COLOR] glow, minimal details, bold shapes, centered, no text
```

### Abstract Symbol
```
stylized [TECH_SYMBOL] with neon outline, dark purple background, high contrast, simplified geometric form, icon-ready composition, no text
```

## Model Selection

| Use Case | Model | imageSize |
|----------|-------|-----------|
| Standard blog images | `gemini-2.5-flash-image` | N/A |
| High-quality hero images | `gemini-3-pro-image-preview` | 2K |
| Print/large format | `gemini-3-pro-image-preview` | 4K |

## Prompt Construction Pattern

```
[Subject], [Visual Style], [Color Palette], [Mood], [Composition], no text
```

**Example**:
```
isometric illustration of modular skill blocks being plugged into an AI brain hub, flat illustration style, dark purple gradient background with neon blue and magenta accents, professional tech-forward mood, centered composition with generous negative space, no text
```
