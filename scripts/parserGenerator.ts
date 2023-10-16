import fs from "fs";
import path from "path";
import { generateCategoryScaffold } from "./categoryHelper";
import { PatchouliCategory, PatchouliEntry } from "./interfaces";
import { generateEntries } from "./entryHelper";

const main = () => {
  // parse categories
  const categoryBasePath = "./raws/en_us/categories";
  const categories: { [id: string]: PatchouliCategory } = {};

  fs.readdirSync(categoryBasePath, { encoding: "utf8", recursive: true })
    .filter((file) => path.extname(file) == ".json")
    .forEach((file) => {
      const fileData = fs.readFileSync(path.join(categoryBasePath, file));
      const category: PatchouliCategory = JSON.parse(fileData.toString());
      const filename = path.parse(path.join(categoryBasePath, file)).name;
      categories[filename] = category;
    });

  // console.log(categoryJsons);
  const docsBasePath = "./docs";

  // clear docs folder
  fs.readdirSync(docsBasePath).forEach((doc) =>
    fs.rmSync(path.join(docsBasePath, doc), { recursive: true })
  );

  generateCategoryScaffold(categories, docsBasePath);

  // parse entries
  const entriesBasePath = "./raws/en_us/entries";
  const entries: { [id: string]: PatchouliEntry } = {};

  fs.readdirSync(entriesBasePath, { encoding: "utf8", recursive: true })
    .filter((file) => path.extname(file) == ".json")
    .forEach((file) => {
      const fileData = fs.readFileSync(path.join(entriesBasePath, file));
      const entry: PatchouliEntry = JSON.parse(fileData.toString());
      const filename = path.parse(path.join(entriesBasePath, file)).name;
      entries[filename] = entry;
    });

  generateEntries(entries, categories, docsBasePath);
};

main();