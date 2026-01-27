---
description: Agent Skills format specification for creating skill directories
applyTo: '**/SKILL.md'
---

# Agent Skills Format

Documentation index: https://agentskills.io/llms.txt

## Directory Structure

```
skill-name/
├── SKILL.md          # Required
├── scripts/          # Optional: executable code
├── references/       # Optional: additional documentation
└── assets/           # Optional: templates, images, data files
```

## SKILL.md Format

### Required Frontmatter

```yaml
---
name: skill-name
description: What this skill does and when to use it.
---
```

### Optional Frontmatter Fields

```yaml
---
name: pdf-processing
description: Extract text and tables from PDF files, fill forms, merge documents.
license: Apache-2.0
compatibility: Requires git, docker, jq
allowed-tools: Bash(git:*) Bash(jq:*) Read
metadata:
  author: example-org
  version: "1.0"
---
```

### Field Constraints

| Field         | Required | Constraints                                                              |
|---------------|----------|--------------------------------------------------------------------------|
| `name`        | Yes      | 1-64 chars, lowercase + hyphens only, must match parent directory name   |
| `description` | Yes      | 1-1024 chars, describe what it does AND when to use it                   |
| `license`     | No       | License name or reference to bundled LICENSE file                        |
| `compatibility` | No     | 1-500 chars, environment requirements                                    |
| `metadata`    | No       | Key-value map for additional properties                                  |
| `allowed-tools` | No     | Space-delimited list of pre-approved tools (experimental)                |

### Name Validation Rules

- Lowercase alphanumeric and hyphens only (`a-z`, `0-9`, `-`)
- Cannot start or end with hyphen
- No consecutive hyphens (`--`)
- Must match parent directory name

**Valid**: `pdf-processing`, `data-analysis`, `code-review`  
**Invalid**: `PDF-Processing`, `-pdf`, `pdf--processing`

### Description Best Practice

Good:
```yaml
description: Extracts text and tables from PDF files, fills PDF forms, and merges multiple PDFs. Use when working with PDF documents or when the user mentions PDFs, forms, or document extraction.
```

Poor:
```yaml
description: Helps with PDFs.
```

## Body Content

Write Markdown instructions after frontmatter. Recommended sections:
- Step-by-step instructions
- Examples of inputs and outputs
- Common edge cases

## Progressive Disclosure

Structure for efficient context use:
1. **Metadata** (~100 tokens): `name` + `description` loaded at startup
2. **Instructions** (<5000 tokens): Full `SKILL.md` loaded on activation
3. **Resources** (as needed): Files loaded only when required

**Keep `SKILL.md` under 500 lines.** Move detailed reference material to `references/`.

## File References

Use relative paths from skill root:
```markdown
See [the reference guide](references/REFERENCE.md) for details.
Run: scripts/extract.py
```

Keep references one level deep. Avoid nested reference chains.

## Validation

```bash
skills-ref validate ./my-skill
```
