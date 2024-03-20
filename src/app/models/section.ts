import { Image } from "./image";
import { List } from "./list";
import { Quote } from "./quote";

export interface Section {
    title: string;
    body: string;
    images?: Image[];
    lists?: List[];
    quotes?: Quote[];
}