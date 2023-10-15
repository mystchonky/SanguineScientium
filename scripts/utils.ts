import { PatchouliCategory } from "./interfaces";

export const extractParentRoot = (parentID: string) =>
    parentID.replace(/.*:/, "").replace(/.*\//, "");

export function getCategoryPath(
    id: string,
    categories: { [id: string]: PatchouliCategory }
): string {
    const category = categories[id];
    const base: string =
        category.parent != undefined
            ? getCategoryPath(extractParentRoot(category.parent), categories)
            : ".";
    return `${base}/${id}`;
}