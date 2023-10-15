import fs from "fs";
import path from "path";
import { generateCategoryScaffold } from "./categoryHelper";
import { PatchouliCategory } from "./interfaces";

const main = () => {
    // parse categories
    const categoryBasePath = "./raws/en_us/categories";
    const categoryJsons: { [id: string]: PatchouliCategory } = {};

    fs.readdirSync(categoryBasePath, { encoding: "utf8", recursive: true })
        .filter((file) => path.extname(file) == ".json")
        .forEach((file) => {
            const fileData = fs.readFileSync(path.join(categoryBasePath, file));
            const json: PatchouliCategory = JSON.parse(fileData.toString());
            const filename = path.parse(path.join(categoryBasePath, file)).name;
            categoryJsons[filename] = json;
        });

    // console.log(categoryJsons);
    const docsBasePath = "./docs";

    // clear docs folder
    fs.readdirSync(docsBasePath).forEach((doc) =>
        fs.rmSync(doc, { recursive: true })
    );

    generateCategoryScaffold(categoryJsons, docsBasePath);

    // parse entries
};

main();