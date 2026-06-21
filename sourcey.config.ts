import { defineConfig, markdown } from "sourcey";

export default defineConfig({
  name: "Cobra Source Reference",
  description: "Source-backed reference for the Cobra Go CLI library.",
  navigation: {
    tabs: [
      {
        tab: "Guide",
        source: markdown({
          groups: [
            {
              group: "Overview",
              pages: ["index", "source-report"]
            },
            {
              group: "API Concepts",
              pages: [
                "command-model",
                "flags-and-validation",
                "completion-and-docgen"
              ]
            },
            {
              group: "Generated API Snapshot",
              pages: [
                "api-cobra-package",
                "api-doc-package"
              ]
            }
          ]
        })
      }
    ]
  },
  theme: {
    preset: "api-first",
    colors: {
      primary: "#2563eb",
      light: "#3b82f6",
      dark: "#1d4ed8"
    }
  },
  navbar: {
    links: [
      { label: "Cobra", href: "https://github.com/spf13/cobra" },
      { label: "Pinned Commit", href: "https://github.com/spf13/cobra/tree/ad460ea8f249db69c943a365fb84f3a59042d54e" }
    ]
  },
  footer: {
    text: "Source-backed documentation proof for spf13/cobra at commit ad460ea8f249db69c943a365fb84f3a59042d54e."
  }
});
