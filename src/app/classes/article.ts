export class Article {
  id: number;
  title: string;
  img: string;
  prev: string;
  content: string;
  tags: string[];
  date: string;

  constructor(id: number, title: string, img: string, prev: string, date: string) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.prev = prev;
    this.date = date;
  }
}
