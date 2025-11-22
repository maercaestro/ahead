# Research Section - Usage Guide

## Overview

The Research section allows you to publish in-depth technical articles with full **Markdown** and **LaTeX** support, along with syntax highlighting for code blocks, tables, and images.

## Features

✅ **Full Markdown Support** - Headers, lists, blockquotes, links, etc.  
✅ **LaTeX Math Rendering** - Display beautiful equations using KaTeX  
✅ **Code Syntax Highlighting** - Supports 100+ programming languages  
✅ **Tables** - GitHub-flavored markdown tables  
✅ **Images** - Local or remote images with captions  
✅ **Metadata** - Frontmatter for article info (title, date, tags, etc.)  
✅ **Responsive Design** - Looks great on all devices  
✅ **Easy Navigation** - Click any article to read the full content

## How to Add a New Research Article

### 1. Create a Markdown File

Create a new `.md` file in `src/content/research/` directory:

```
src/content/research/your-article-name.md
```

### 2. Add Frontmatter

Start your article with YAML frontmatter (metadata):

```markdown
---
title: "Your Article Title"
date: "2025-11-21"
author: "Abu Huzaifah Bidin"
tags: ["Machine Learning", "Research", "AI"]
abstract: "Brief description of your research article."
status: "Published"
---
```

### 3. Write Your Content

Write your article using Markdown syntax:

```markdown
# Main Title

## Introduction

Your introduction here...

### Math Equations

Display inline math: $E = mc^2$

Or block equations:

$$
\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

### Code Blocks

```python
def hello_world():
    print("Hello, World!")
```

### Tables

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |

### Images

![Image Description](https://example.com/image.jpg)

*Figure 1: Image caption goes here*
```

### 4. Update ResearchSection.jsx

Add your article metadata to the `researchArticles` array in `src/components/ResearchSection.jsx`:

```javascript
{
  id: 'your-article-name',  // Must match filename (without .md)
  title: 'Your Article Title',
  date: '2025-11-21',
  author: 'Abu Huzaifah Bidin',
  tags: ['Machine Learning', 'Research', 'AI'],
  abstract: 'Brief description of your research article.',
  status: 'Published',
  statusColor: 'bg-green-500/10 text-green-300 border-green-500/30',
  image: 'https://example.com/cover-image.jpg',
  readTime: '10 min read'
}
```

## LaTeX Syntax Examples

### Inline Math

Use single dollar signs for inline equations:
```
The formula $E = mc^2$ is famous.
```

### Display Math

Use double dollar signs for block equations:
```
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

### Complex Equations

```
$$
\frac{\partial u}{\partial t} = \nu \frac{\partial^2 u}{\partial x^2}
$$

$$
\mathbf{F} = m\mathbf{a}
$$

$$
\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}
$$
```

## Code Block Syntax

Specify the language for syntax highlighting:

````markdown
```python
import numpy as np
def sigmoid(x):
    return 1 / (1 + np.exp(-x))
```

```javascript
const greeting = "Hello, World!";
console.log(greeting);
```

```sql
SELECT * FROM users WHERE age > 18;
```
````

## Status Colors

Choose appropriate status colors:

- **Published**: `bg-green-500/10 text-green-300 border-green-500/30`
- **In Progress**: `bg-yellow-500/10 text-yellow-300 border-yellow-500/30`
- **Experiment Report**: `bg-blue-500/10 text-blue-300 border-blue-500/30`
- **Draft**: `bg-gray-500/10 text-gray-300 border-gray-500/30`

## File Structure

```
src/
├── content/
│   └── research/
│       ├── liquid-neural-networks.md
│       ├── steam-optimization.md
│       ├── gan-anomaly-detection.md
│       └── your-new-article.md  ← Add your articles here
├── components/
│   ├── ResearchSection.jsx        ← Update article list here
│   └── ResearchArticle.jsx        ← Renders individual articles
```

## Tips & Best Practices

1. **Image URLs**: Use high-quality images from Unsplash or local files
2. **Article IDs**: Use kebab-case (lowercase with hyphens)
3. **Read Time**: Estimate ~200 words per minute
4. **Tags**: Limit to 3-5 relevant tags
5. **Abstract**: Keep it concise (2-3 sentences max)
6. **File Names**: Match the `id` field exactly

## Example Workflow

1. Write your research in Markdown: `my-research.md`
2. Add metadata (frontmatter) at the top
3. Include LaTeX equations, code, tables, images
4. Save file to `src/content/research/`
5. Update `ResearchSection.jsx` with article metadata
6. Test locally with `npm run dev`
7. Commit and deploy!

## Troubleshooting

**Article not loading?**
- Check that filename matches the `id` in ResearchSection.jsx
- Verify frontmatter format is correct
- Check browser console for errors

**Math not rendering?**
- Ensure you're using `$` for inline and `$$` for block math
- Check for syntax errors in LaTeX

**Images not showing?**
- Use absolute URLs or place images in `public/` folder
- Check image URLs are accessible

## Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [KaTeX Documentation](https://katex.org/docs/supported.html)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)

---

**Happy writing! 📝✨**
