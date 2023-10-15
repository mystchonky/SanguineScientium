import { PatchouliCategory } from "./interfaces";
import { extractParentRoot, getCategoryPath } from "./utils";

export function generateCategoryScaffold(
    categories: { [id: string]: PatchouliCategory },
    basePath: string
) {
    for (let key in categories) {
        processCategory(key, categories);
    }
    for (let key in categories) {
        console.log(getCategoryPath(key, categories));
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