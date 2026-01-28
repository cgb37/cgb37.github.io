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
key_takeaways:
  - "Primary insight or technique"
  - "Secondary insight for quick scanning"
tested_on:
  - "macOS 14.x Sonoma"
  - "macOS 13.x Ventura"
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
  <h2>Quick Start</h2>
  <p>For developers who just want the solution. Keep it minimal and copy-paste ready.</p>
  <pre><code class="language-bash">
# Minimal working example - 3-5 lines max
  </code></pre>
</section>

<section>
  <h2>Prerequisites</h2>
  <ul>
    <li>Required software and versions</li>
    <li>System requirements (OS version, etc.)</li>
    <li>Prior knowledge assumed</li>
  </ul>
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
  <h2>Installation</h2>
  <p>Step-by-step deployment instructions. Separate from code explanation.</p>
  <pre><code class="language-bash">
# Installation commands
  </code></pre>
</section>

<section>
  <h2>Conclusion</h2>
  <p>Summarize key takeaways.</p>
  <p>Suggest next steps or related topics.</p>
</section>
```

### 6. Reference Source Materials

Source materials are provided in `_topics/{topic-name}/`. 
```

**Embed key portions** directly in the post (sanitized):
```html
<pre><code class="language-python">
# Key function from _topics/topic-name/main_script.py
def process_data(input_file):
    # ... sanitized code ...
</code></pre>
```

**Do not modify** files in `_topics/`—treat them as read-only source material.

### Input/Output Summary

| Direction | Location | Purpose |
|-----------|----------|--------|
| **Input** | `_topics/{topic-name}/` | Source scripts, READMEs, configs |
| **Output** | `_posts/YYYY-MM-DD-slug.html` | The blog post |

## Handling Incomplete Source Material

Not all source material supports every template section. Use this decision matrix:

### Section Requirements

| Section | Required? | When to Omit | Fallback |
|---------|-----------|--------------|----------|
| Introduction | **Always** | Never | - |
| Quick Start | **Always** | Never | Minimal usage example |
| Prerequisites | **Always** | Never | "Python 3.x" or equivalent |
| Problem Statement | **Always** | Never | Infer from code purpose |
| Approach | Optional | Simple scripts (<50 lines) | Merge into Problem Statement |
| Code Solution | **Always** | Never | - |
| Solution Explanation | **Always** | Never | Explain key lines inline |
| Testing and Edge Cases | Conditional | No tests AND no error handling | Replace with "Usage Examples" |
| Installation | Conditional | Single-file script, no deps | Replace with "Usage" one-liner |
| Conclusion | **Always** | Never | 2-3 sentences minimum |

### Adaptive Sections

**When there are no formal tests:**
```html
<section>
  <h2>Usage Examples</h2>
  <p>Common usage patterns and expected output:</p>
  <pre><code class="language-bash">
# Basic usage
python script.py input.txt

# Expected output
Processing complete: 42 items processed
  </code></pre>
</section>
```

**When error handling exists but no tests:**
```html
<section>
  <h2>Error Handling</h2>
  <p>The script handles these conditions:</p>
  <ul>
    <li><strong>Missing file</strong>: Exits with message "File not found"</li>
    <li><strong>Invalid format</strong>: Logs warning and skips entry</li>
  </ul>
</section>
```

**When installation is trivial:**
```html
<section>
  <h2>Usage</h2>
  <pre><code class="language-bash">
# No installation needed - just run:
python script.py [arguments]
  </code></pre>
</section>
```

### Inferring Missing Information

When source material lacks explicit information, infer from context:

| Missing Info | Inference Strategy |
|--------------|-------------------|
| Problem statement | What does the code's main function do? What pain does it solve? |
| Prerequisites | Check imports, shebang, file operations |
| Difficulty level | Lines of code + concept complexity |
| Target audience | Beginner (<50 LOC, single purpose), Intermediate (100-300 LOC, multiple components), Advanced (architecture, async, complex deps) |

### Front Matter for Incomplete Data

**Use empty strings for truly unknown fields:**
```yaml
repo:                    # Leave blank if no repo
gist:                    # Leave blank if no gist
tested_on:               # Infer from shebang or imports
  - "Python 3.8+"        # Use minimum version if unknown
```

**Never fabricate:**
- Specific OS versions not mentioned
- Test results that don't exist
- Performance benchmarks not measured

### Minimum Viable Post

A valid post requires at minimum:
1. **Introduction** - What and why (2-3 sentences)
2. **Quick Start** - Copy-paste usage
3. **Prerequisites** - Runtime requirements
4. **Code Solution** - The actual code
5. **Solution Explanation** - What key parts do
6. **Conclusion** - Summary + potential extensions

For very simple scripts (<50 lines), sections can be combined:

```html
<section>
  <h2>The Script</h2>
  <pre><code class="language-python">
#!/usr/bin/env python3
"""Brief description of what this does."""
# ... code ...
  </code></pre>
  
  <h3>How It Works</h3>
  <p>Line-by-line explanation for non-obvious parts.</p>
</section>
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
- [ ] `key_takeaways` populated for scanners
- [ ] `tested_on` lists OS/environment versions (or inferred minimum)
- [ ] Filename follows `YYYY-MM-DD-slug.html` format
- [ ] Quick Start section has minimal, copy-paste-ready example
- [ ] Prerequisites section lists requirements (even if just "Python 3.x")
- [ ] All paths use `$HOME` or relative references
- [ ] No API keys, tokens, or secrets in code
- [ ] No personal email addresses or usernames
- [ ] Code blocks have correct language class
- [ ] Sections use `<section>` and `<h2>` tags
- [ ] Conditional sections handled per decision matrix
- [ ] Omitted sections justified (source lacks tests, trivial install, etc.)
- [ ] `thumb` and `jumbo` image filenames set (images created separately)
