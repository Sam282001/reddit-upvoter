import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],  // React module
  manifest: {
    manifest_version: 3,
    name: "Reddit Upvoter",
    version: "1.0",
    description: "Automatically upvote all comments on Reddit posts.",
    permissions: ["activeTab", "scripting", "tabs"],
    host_permissions: [
      "https://www.reddit.com/*"
    ],
    action: {
      default_popup: "popup.html"  // Make sure this points to a compiled version if using React
    },
    background: {
      service_worker: "background.js"  // Transpiled JS version of background.ts
    },
    content_scripts: [
      {
        matches: ["https://www.reddit.com/*"],
        js: ["content-scripts/contentScript.js"]  // Transpiled JS version of contentScript.ts
      }
    ]
  }
});
