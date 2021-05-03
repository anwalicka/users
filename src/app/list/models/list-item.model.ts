export interface IList {
    userId: number;
    list: IListItem[];
}
export interface IListItem {
    id: number;
    title: string;
    content: IContent;
}

interface IContent {
    text: string;
}
