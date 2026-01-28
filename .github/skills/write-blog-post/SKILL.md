---
name: write-blog-post
description: Creates Jekyll blog posts from source materials (code, scripts, READMEs, project directories). Use when asked to write a blog post, document a project, or turn code into a tutorial. Sanitizes personal information and paths.
metadata:
  author: cgb37
  version: "1.0"
---

# Write Blog Post Skill

Transform source materials into polished Jekyll blog posts for cgb37.github.io.

## When to Use

- User provides code, scripts, or project directories to document
- User asks to "write a blog post about..."
- User wants to turn a project into a tutorial
- Source materials exist in `_topics/` directory

## Workflow

### 1. Gather Source Materials

Check these locations for source content:
- `_topics/{topic-name}/` - Primary source directory
- User-provided files or directories
- README files in project directories

### 2. Analyze the Content

Identify:
- Primary problem being solved
- Technologies and languages used
- Target audience skill level
- Key code components to highlight

### 3. Sanitize Content

**CRITICAL: Before including any code or content, sanitize:**

| Find | Replace With |
|------|--------------|
| Absolute paths (`/Users/username/...`) | `$HOME/` or relative paths |
| API keys, tokens, secrets | `YOUR_API_KEY`, `YOUR_TOKEN` |
| Personal emails | `your-email@example.com` |
| Internal hostnames | `your-server.example.com` |
| Database credentials | `your_username`, `your_password` |

**Path handling**: Scripts often depend on directory structure. Use:
```bash
# Set base directory
SCRIPT_DIR="$HOME/scripts/project-name"
```

### 4. Create the Post File

**Template**: Copy from [assets/TEMPLATE.html](assets/TEMPLATE.html)

**Filename**: `_posts/YYYY-MM-DD-slug-title.html`
- Use today's date
- Slug: lowercase, hyphens, descriptive

**Required front matter**:
```yaml
---
posttype: blog
category: howto
layout: blog/post
title: "Descriptive Title with Key Terms"
author: Charles Brown-Roberts
tags: [tag1, tag2, tag3]
keywords: [keyword1, keyword2, keyword3]
description: "One sentence describing the post for SEO."
abstract: "2-3 sentence summary for structured data."
thumb: YYYY-MM-DD-slug-thumb.webp
jumbo: YYYY-MM-DD-slug-jumbo.webp
repo:
gist:
programming_languages: [Python, Bash]
difficulty_level: "beginner"  # beginner, intermediate, advanced
learning_objectives:
  - "First thing readers will learn"
  - "Second thing readers will learn"
technologies:
  - name: "Technology Name"
    category: "Category"
    url: "https://example.com"
---
```

### 5. Write Content Structure

Use semantic HTML sections:

```html
<section>
  <h2>Introduction</h2>
  <p>Hook the reader with a relatable scenario. Keep it conversational but professional.</p>
  <p>State what the post will cover and who it's for.</p>
</section>

<section>
  <h2>Problem Statement</h2>
  <p>Clearly define the problem. What pain point does this solve?</p>
  <ul>
    <li>Specific challenges addressed</li>
    <li>Why existing solutions fall short</li>
  </ul>
</section>

<section>
  <h2>Approach and Thought Process</h2>
  <p>Explain the reasoning behind the solution.</p>
  <p>Discuss alternatives considered and why this approach was chosen.</p>
</section>

<section>
  <h2>Code Solution</h2>
  <pre><code class="language-{lang}">
# Sanitized code here
  </code></pre>
  <p>Brief explanation of what the code does.</p>
</section>

<section>
  <h2>Solution Explanation</h2>
  <p>Walk through the code step by step.</p>
  <p>Highlight key techniques and design decisions.</p>
</section>

<section>
  <h2>Testing and Edge Cases</h2>
  <p>How to verify the solution works.</p>
  <p>Common edge cases and how they're handled.</p>
</section>

<section>
  <h2>Conclusion</h2>
  <p>Summarize key takeaways.</p>
  <p>Suggest next steps or related topics.</p>
</section>
```

### 6. Organize Source Materials

Copy sanitized source files to `_topics/{topic-name}/`:
```
_topics/
└── topic-name/
    ├── topic_readme.md
    ├── main_script.py
    └── config_template.yaml
```

## Writing Style Guide

- **Voice**: Conversational but professional
- **Audience**: Developers looking to accomplish a specific task
- **Length**: Concise—respect the reader's time
- **Code**: Show complete, working examples (sanitized)
- **Explanations**: Focus on the "why" not just the "how"

### Do

- Start with a relatable problem scenario
- Use bullet points for lists of features or steps
- Include code comments for complex logic
- Provide complete, copy-paste-ready code blocks
- Link to official documentation for tools mentioned

### Don't

- Include personal information or secrets
- Use hardcoded absolute paths
- Write walls of text without structure
- Assume reader knows project-specific context
- Skip the problem statement

## Code Block Languages

Use appropriate language identifiers:
- `language-bash` / `language-shell`
- `language-python`
- `language-javascript`
- `language-yaml`
- `language-json`
- `language-applescript`
- `language-sql`

## Checklist Before Completion

- [ ] Front matter complete with all required fields
- [ ] Filename follows `YYYY-MM-DD-slug.html` format
- [ ] All paths use `$HOME` or relative references
- [ ] No API keys, tokens, or secrets in code
- [ ] No personal email addresses or usernames
- [ ] Code blocks have correct language class
- [ ] Sections use `<section>` and `<h2>` tags
- [ ] Source materials copied to `_topics/`
- [ ] `thumb` and `jumbo` image filenames set (images created separately)
