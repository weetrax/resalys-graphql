const fs = require("fs");
const path = require("path");

const distPath = path.join(__dirname, "../dist");

// Nettoyer graphql.d.ts
const dtsPath = path.join(distPath, "graphql.d.ts");
if (fs.existsSync(dtsPath)) {
  let content = fs.readFileSync(dtsPath, "utf8");

  // Supprimer les imports de playwright-graphql
  content = content.replace(
    /import\s+{[^}]*}\s+from\s+['"]playwright-graphql['"];?\s*/g,
    ""
  );

  // Supprimer les types et fonctions liés à playwright
  content = content.replace(/export type APIRequestContext[^;]*;/g, "");
  content = content.replace(/export type RequesterOptions[^;]*;/g, "");
  content = content.replace(/export type RequestHandler[^;]*;/g, "");
  content = content.replace(/export const getClient[^;]*;/g, "");
  content = content.replace(/export type GqlAPI[^;]*;/g, "");

  // Supprimer les commentaires playwright-graphql
  content = content.replace(
    /\/\/ This additional logic appended by playwright-graphql[^\n]*\n/g,
    ""
  );

  // Nettoyer les lignes vides multiples
  content = content.replace(/\n\n\n+/g, "\n\n");

  fs.writeFileSync(dtsPath, content);
  console.log(
    "✅ Cleaned graphql.d.ts - removed playwright-graphql references"
  );
}

// Nettoyer graphql.js
const jsPath = path.join(distPath, "graphql.js");
if (fs.existsSync(jsPath)) {
  let content = fs.readFileSync(jsPath, "utf8");

  // Remplacer les imports/requires de playwright-graphql par des objets vides
  content = content.replace(
    /const\s+{\s*getSdkRequester\s*}\s*=\s*require\(['"]playwright-graphql['"]\);?/g,
    "const getSdkRequester = undefined;"
  );
  content = content.replace(
    /import\s+{[^}]*getSdkRequester[^}]*}\s+from\s+['"]playwright-graphql['"];?/g,
    "const getSdkRequester = undefined;"
  );

  // Supprimer ou commenter la fonction getClient
  content = content.replace(
    /(export const getClient = .*)/g,
    "// $1 // Removed - Playwright only"
  );

  fs.writeFileSync(jsPath, content);
  console.log(
    "✅ Cleaned graphql.js - removed playwright-graphql dependencies"
  );
}

console.log("🎉 Build files cleaned successfully!");
