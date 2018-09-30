
export class PostViewModel {
  postId: number;
  title: string;
  category: string;
  body: string;
  datePosted: Date;

  constructor(title: string, category: string, datePosted: Date) {
    this.title = title;
    this.category = category;
    this.datePosted = datePosted;
    this.body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore, repudiandae ad exercitationem totam expedita incidunt praesentium, voluptas necessitatibus beatae possimus architecto? Culpa vel ipsa aspernatur eligendi sequi eaque recusandae.";
  }
}
