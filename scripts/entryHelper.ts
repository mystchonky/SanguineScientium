import path from "path";
import {
  PatchouliCategory,
  PatchouliEntry,
  PatchouliPage,
  PatchouliPageText,
} from "./interfaces";
import { extractParentRoot, getCategoryPath } from "./utils";
import fs from "fs";

export function generateEntries(
  entries: { [id: string]: PatchouliEntry },
  categories: { [id: string]: PatchouliCategory },
  basePath: string
) {
  for (let key in entries) {
    createEntry(key, entries, categories, basePath);
  }
}

function createEntry(
  id: string,
  entries: { [id: string]: PatchouliEntry },
  categories: { [id: string]: PatchouliCategory },
  basePath: string
) {
  const entry = entries[id];
  const categoryID = extractParentRoot(entry.category);

  let content = `---
title: ${entry.name}
sidebar_position: ${entry.sortnum || 0}
---
\n\n`;
  entry.pages.forEach((page) => (content = parsePage(page, content)));

  const categoryPath = getCategoryPath(categoryID, categories);
  const fileName = path.join(basePath, categoryPath, `${id}.mdx`);
  fs.writeFileSync(fileName, content);
}

function parsePage(page: PatchouliPage, content: string): string {
  if (page.type == "patchouli:text") {
    const textPage = page as PatchouliPageText;
    content += `${textPage.text}\n`;
  }
  return content;
}