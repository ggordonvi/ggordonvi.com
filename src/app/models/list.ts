export interface List {
    type: 'ordered' | 'unordered';
    title: string;
    description: string;
    items: string[];
}