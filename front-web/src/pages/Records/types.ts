export type RecordsResponse = {
    content: RecordItem[];
    totalPages: number;
}

export type Platform= 'XBOX'| 'PC' | 'PLAYSTATION';

export type RecordItem = {
    age: number;
    gameGenre: string;
    gamePlatform: Platform;
    gameTitle: string;
    id: number;
    moment: string;
    name: string;
}