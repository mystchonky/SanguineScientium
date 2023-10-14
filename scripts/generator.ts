import fs from "fs";
import path from "path";

const main = () => {
    // parse categories
    const categoryBasePath = "./raws/en_us/categories";
    const categoryJsons: { [id: string]: JSON } = {};

    fs.readdirSync(categoryBasePath, { encoding: "utf8", recursive: true })
        .filter((file) => path.extname(file) == ".json")
        .forEach((file) => {
            const fileData = fs.readFileSync(path.join(categoryBasePath, file));
            const json = JSON.parse(fileData.toString());
            const filename = path.parse(path.join(categoryBasePath, file)).name;
            categoryJsons[filename] = json;
        });

    console.log(categoryJsons);

    // parse entries
};

main();