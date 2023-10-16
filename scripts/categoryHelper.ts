import { PatchouliCategory } from "./interfaces";
import fs from "fs";
import { extractParentRoot, getCategoryPath } from "./utils";
import path from "path";

export function generateCategoryScaffold(
  categories: { [id: string]: PatchouliCategory },
  basePath: string
) {
  for (let key in categories) {
    processCategory(key, categories);
  }
  for (let key in categories) {
    createCategory(key, categories, basePath);
  }
}

function processCategory(
  id: string,
  categories: { [id: string]: PatchouliCategory }
) {
  const category = categories[id];
  if (category.processed != undefined && category.processed) {
    return;
  }
  if (category.parentID == undefined) {
    category.parentID = "";
  }
  if (category.parent != undefined) {
    const parent: string = category.parent;
    const parentID = extractParentRoot(parent);
    category.parentID += parentID;

    processCategory(parentID, categories);
  }

  category.processed = true;
}

function createCategory(
  id: string,
  categories: { [id: string]: PatchouliCategory },
  basePath: string
) {
  const categoryPath = getCategoryPath(id, categories);
  fs.mkdirSync(path.join(basePath, categoryPath), { recursive: true });

  const indexFile = path.join(basePath, categoryPath, "index.md");

  fs.writeFileSync(indexFile, getCategoryString(categories[id]));
}

const getCategoryString = (category: PatchouliCategory) =>
  `---
title: ${category.name}
sidebar_position: ${category.sortnum || 0}
---

${category.description}
`;