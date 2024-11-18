export type Id = string | number;

export type Column = {
    id: Id;
    title: string;
}

export type Task = {
    length: number;
    id: Id,
    columnId: Id,
    content: string;
}