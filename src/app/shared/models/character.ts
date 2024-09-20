export interface Character {
    id: number;
    name: string;
    description: string;
    thumbnail: Thumbnail;
}

export interface Thumbnail {
    extension: string;
    path: string;
}