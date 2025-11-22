import { defineConfig } from "tinacms";

// Your hosting provider will likely expose this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  
  schema: {
    collections: [
      // ========================================
      // COLLECTION 1: Research Streams (Parent)
      // ========================================
      {
        name: "research_streams",
        label: "Research Streams",
        path: "src/content/research-streams",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            return `/research/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
            description: "Unique identifier for this research stream (e.g., 'energy-based-lnn')",
          },
          {
            type: "datetime",
            name: "date",
            label: "Start Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "string",
            name: "supervisor",
            label: "Supervisor(s)",
          },
          {
            type: "string",
            name: "status",
            label: "Status",
            required: true,
            options: [
              {
                value: "active",
                label: "Active Research",
              },
              {
                value: "paused",
                label: "Paused",
              },
              {
                value: "published",
                label: "Published/Complete",
              },
            ],
          },
          {
            type: "string",
            name: "abstract",
            label: "Abstract",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "keywords",
            label: "Keywords",
            list: true,
          },
          {
            type: "image",
            name: "cover_image",
            label: "Cover Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Main Content",
            isBody: true,
            templates: [
              {
                name: "Equation",
                label: "LaTeX Equation",
                fields: [
                  {
                    name: "equation",
                    label: "Equation (LaTeX)",
                    type: "string",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    name: "display",
                    label: "Display Mode",
                    type: "boolean",
                    description: "Use $$ for display mode (block), or $ for inline",
                  },
                ],
              },
              {
                name: "CodeBlock",
                label: "Code Block",
                fields: [
                  {
                    name: "code",
                    label: "Code",
                    type: "string",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    name: "language",
                    label: "Language",
                    type: "string",
                    options: ["python", "javascript", "typescript", "bash", "sql", "matlab"],
                  },
                ],
              },
            ],
          },
        ],
      },

      // ========================================
      // COLLECTION 2: Lab Logs (Children)
      // ========================================
      {
        name: "lab_logs",
        label: "Lab Logs",
        path: "src/content/lab-logs",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            // Get the parent stream slug from the reference
            const parentSlug = document.parent_stream?.split("/").pop()?.replace(".mdx", "");
            return `/research/${parentSlug}/logs/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Log Date",
            required: true,
          },
          {
            type: "string",
            name: "log_type",
            label: "Log Type",
            required: true,
            options: [
              {
                value: "experiment",
                label: "🧪 Experiment",
              },
              {
                value: "reading",
                label: "📚 Literature Reading",
              },
              {
                value: "feasibility",
                label: "✅ Feasibility Study",
              },
              {
                value: "refutation",
                label: "❌ Refutation/Failed Attempt",
              },
              {
                value: "insight",
                label: "💡 Insight/Breakthrough",
              },
              {
                value: "meeting",
                label: "🤝 Meeting Notes",
              },
            ],
          },
          {
            type: "reference",
            name: "parent_stream",
            label: "Parent Research Stream",
            collections: ["research_streams"],
            required: true,
            description: "Link this log to a specific research stream",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "summary",
            label: "Summary",
            ui: {
              component: "textarea",
            },
            description: "Brief summary of this log entry",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
            templates: [
              {
                name: "Equation",
                label: "LaTeX Equation",
                fields: [
                  {
                    name: "equation",
                    label: "Equation (LaTeX)",
                    type: "string",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    name: "display",
                    label: "Display Mode",
                    type: "boolean",
                  },
                ],
              },
              {
                name: "CodeBlock",
                label: "Code Block",
                fields: [
                  {
                    name: "code",
                    label: "Code",
                    type: "string",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    name: "language",
                    label: "Language",
                    type: "string",
                  },
                ],
              },
              {
                name: "Table",
                label: "Data Table",
                fields: [
                  {
                    name: "caption",
                    label: "Caption",
                    type: "string",
                  },
                  {
                    name: "data",
                    label: "Table Data (Markdown)",
                    type: "string",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
