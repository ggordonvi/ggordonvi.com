import { Author } from "./author";

export interface Project {
  id: number;
  uid: string;
  title: string;
  image: string;
  route: string;
  author: Author;
  dateCreated: Date | null;
  dateModified: Date | null;
  featured: boolean;
  category: string;
  tags: string[];
}