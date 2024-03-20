import { Author } from "./author";
import { Content } from "./content";

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
  enabled: boolean;
  category: string;
  tags: string[];
  content: Content;
}