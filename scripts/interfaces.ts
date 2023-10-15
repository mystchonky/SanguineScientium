export interface PatchouliCategory {
    name: string;
    description: string;
    icon: string;
    parent?: string;
    flag?: string;
    sortnum?: number;
    secret?: boolean;
    processed?: boolean; // for our processing
    parentID?: string; // for our processing
}