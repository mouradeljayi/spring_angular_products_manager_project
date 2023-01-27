import { Article } from "./article";

export interface Order {
    id?: number;
    date?: Date;
    articles?: Article[];
    reference?: string;
}
  