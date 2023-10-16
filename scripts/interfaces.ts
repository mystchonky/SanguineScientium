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

export interface PatchouliEntry {
  name: string;
  icon: string;
  category: string;
  pages: PatchouliPage[];
  adancement?: string;
  flag?: string;
  priority?: boolean;
  secret?: boolean;
  read_by_default?: boolean;
  sortnum?: number;
  turnin?: string;
  extra_recipe_mappings?: { string: number };
}

export interface PatchouliPage {
  type: string;
  advancement?: string;
  flag?: string;
  anchor?: string;
}

export interface PatchouliPageText extends PatchouliPage {
  text: string;
  title?: string;
}