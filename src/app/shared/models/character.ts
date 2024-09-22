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

export interface CharactersResponseDTO {
    data: CharactersData;
}

export interface CharactersData {
    count: number;
    limit: number;
    offset: number
    results: Character[];
}