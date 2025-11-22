# Tina CMS Setup for Research Lab Logs

This document provides step-by-step instructions to set up Tina CMS for your research workflow.

## 📋 Overview

Your research system is structured as:
- **Research Streams** (Parent): Main research thesis/project
- **Lab Logs** (Children): Atomic updates, experiments, readings, insights

## 🚀 Installation Steps

### 1. Install Required Packages

All packages are already installed! We've added:
- `tinacms` - The CMS library
- `@tinacms/cli` - Command line tools
- `fs-extra` - Required dependency

The installation used `--legacy-peer-deps` flag to handle React 19 compatibility.

### 2. Configuration Files

Your Tina CMS is already configured at `/tina/config.ts` with:
- Research Streams collection
- Lab Logs collection with parent references
- GraphQL query support

### 3. Dev Script Updated

Your `package.json` now runs Tina with Vite:

```json
{
  "scripts": {
    "dev": "tinacms dev -c \"vite\""
  }
}
```

## 📝 Using Tina CMS

### Access the Admin Panel

1. Start dev server:
```bash
npm run dev
```

2. Navigate to either:
```
http://localhost:5173/__tina (Direct Tina admin)
http://localhost:5173/admin (Redirects to Tina admin)
```

3. You'll see the Tina CMS interface!

## ✍️ Creating Content

### Create a New Research Stream

1. Go to `/admin`
2. Click "Research Streams"
3. Click "Create New"
4. Fill in fields:
   - **Title**: Your research title
   - **Slug**: Unique ID (e.g., `energy-based-lnn`)
   - **Status**: Active/Paused/Published
   - **Abstract**: Brief overview
   - **Body**: Main content with LaTeX support

### Create a Lab Log

1. Go to `/admin`
2. Click "Lab Logs"
3. Click "Create New"
4. Fill in fields:
   - **Title**: Log title
   - **Date**: Log date
   - **Log Type**: Choose type (experiment, reading, etc.)
   - **Parent Stream**: Link to your research stream
   - **Body**: Log content

### Adding LaTeX Equations

In the body editor, click "+ " and select "LaTeX Equation":

**Inline equation** (display = false):
```
E = mc^2
```

**Display equation** (display = true):
```
\frac{dx(t)}{dt} = - [\frac{1}{\tau} + S(t,\theta)]x(t) + S(t,\theta)A
```

### Adding Code Blocks

Click "+ " and select "Code Block":
```python
def train_model(data):
    # Your code here
    return model
```

## 🔍 Querying Data (GraphQL)

### Fetch Research Stream with All Logs

```graphql
query ResearchStreamWithLogs($relativePath: String!) {
  research_streams(relativePath: $relativePath) {
    title
    slug
    status
    abstract
    body
  }
  
  lab_logsConnection(
    filter: { parent_stream: { eq: $relativePath } }
    sort: "date"
  ) {
    edges {
      node {
        title
        date
        log_type
        summary
        body
      }
    }
  }
}
```

**Variables**:
```json
{
  "relativePath": "energy-based-lnn.mdx"
}
```

### Fetch All Research Streams

```graphql
query AllResearchStreams {
  research_streamsConnection(sort: "date") {
    edges {
      node {
        title
        slug
        status
        abstract
        date
      }
    }
  }
}
```

## 🎨 File Structure

After setup, your structure will look like:

```
your-project/
├── src/
│   └── content/
│       ├── research-streams/       ← Main research docs
│       │   └── energy-based-lnn.mdx
│       └── lab-logs/               ← Experiment logs
│           ├── feasibility-cd-training.mdx
│           ├── reading-hasani-2021.mdx
│           └── experiment-furnace-control.mdx
├── tina/
│   ├── config.ts                   ← Tina configuration
│   ├── queries.ts                  ← GraphQL queries
│   └── __generated__/              ← Auto-generated types
├── public/
│   └── admin/                      ← Tina admin panel
└── .env.local                      ← API credentials (gitignored)
```

## 🔐 Authentication

For local development (no auth needed):
- Just access `/admin` directly
- All changes save to local Git

For production (with Tina Cloud):
- Users must authenticate via tina.io
- Changes pushed to GitHub automatically
- Branch-based editing supported

## 📦 Deployment

### Option 1: Vercel/Netlify (Recommended)

1. Push code to GitHub
2. Connect to Vercel/Netlify
3. Add environment variables:
   - `TINA_CLIENT_ID`
   - `TINA_TOKEN`
   - `TINA_BRANCH=main`
4. Deploy!

Admin panel will be at: `https://yourdomain.com/admin`

### Option 2: Static Export

```bash
npm run build
```

Then deploy the `dist/` folder anywhere.

## 💡 Tips & Best Practices

### 1. Use Meaningful Slugs
```
✅ Good: energy-based-lnn, furnace-optimization
❌ Bad: research1, project-a
```

### 2. Consistent Log Types
- 🧪 **experiment**: Actual experiments with data
- 📚 **reading**: Literature reviews
- ✅ **feasibility**: Feasibility studies
- ❌ **refutation**: Failed attempts (important!)
- 💡 **insight**: Breakthroughs
- 🤝 **meeting**: Meeting notes

### 3. Link Logs to Streams
Always set `parent_stream` to link logs to the main research!

### 4. Use Tags Liberally
Tags help filter and search:
```yaml
tags:
  - "Energy Based Models"
  - "MCMC"
  - "Training"
```

### 5. Write Summaries
Always fill the `summary` field - it's shown in log lists.

## 🐛 Troubleshooting

### "Module not found: tinacms"
```bash
npm install --save tinacms @tinacms/cli --legacy-peer-deps
```

### React version warnings
These are safe to ignore. You're using React 19, Tina expects React 18. Use `--legacy-peer-deps` flag for installation.

### "Cannot find tina/config.ts"
Make sure the file exists and is properly formatted (TypeScript).

### "GraphQL query failed"
Check your query syntax matches the schema in `tina/config.ts`.

### Admin panel not loading
1. Check dev server is running
2. Clear browser cache
3. Try: `npx @tinacms/cli dev`

## 🎓 Learning Resources

- [Tina CMS Docs](https://tina.io/docs/)
- [GraphQL Tutorial](https://graphql.org/learn/)
- [MDX Documentation](https://mdxjs.com/)

## 📞 Support

If you encounter issues:
1. Check [Tina Docs](https://tina.io/docs/)
2. Join [Tina Discord](https://discord.com/invite/zumN63Ybpf)
3. GitHub Issues: [tinacms/tinacms](https://github.com/tinacms/tinacms)

---

**Happy researching! 🔬✨**

Your research workflow is now Git-backed, version-controlled, and beautifully organized!
