export interface Comic {
    id: number;
    title: string;
    thumbnail: Thumbnail;
    characters: Characters;
}

export interface Thumbnail {
    extension: string;
    path: string;
}

export interface ComicsResponseDTO {
    data: ComicData;
}

export interface ComicData {
    count: number;
    offset: number;
    limit: number;
    total: number;
    results: Comic[];
}

export interface Characters {
    available: 0;
    collectionURI: string;
    items: any;
}