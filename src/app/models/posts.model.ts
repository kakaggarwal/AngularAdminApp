
export class PostViewModel {
  postId: number;
  title: string;
  category: string;
  datePosted: Date;

  constructor(title: string, category: string, datePosted: Date) {
    this.title = title;
    this.category = category;
    this.datePosted = datePosted;
  }
}
